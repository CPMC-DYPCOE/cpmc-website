import { useEffect, useRef, useState } from 'react';
import classes from './AdminPage.module.css';

const AdminPage = () => {
  const [students, setStudents] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [event1, setEvent1] = useState([]);

  // useEffect(() => {
  //   try {
  //     fetch('/api/admin')
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .then((data) => {
  //         console.log(data);
  //         setContacts(data.contacts);
  //         setStudents(data.students);
  //         setEvent1(data.event1);
  //       });
  //   } catch (error) {
  //     console.log(error);
  //     alert('Something Went Wrong');
  //   }
  // }, []);
  const emailInput = useRef();
  const passwordInput = useRef();

  const submitFormHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/admin/authoriseAdmin', {
        method: 'POST',
        body: JSON.stringify({
          email: emailInput.current.value,
          password: passwordInput.current.value
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      // if (!res.ok) {
      //   toast.error('Something Went Wrong');
      // }
      // if (res.ok) {
      //   toast.success('Submitted successfully');
      // }
      const data = await res.json();
    } catch (error) {
      console.log(error);
    }
    passwordInput.current.value = '';
    emailInput.current.value = '';
  };
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1 className={classes.heading}>
          Admin <span className={classes.red}>Page</span>
        </h1>
      </div>
      <div className={classes.form}>
        <div className={classes.input_container}>
          <h1 className={classes.inputheading}>Email address*</h1>
          <input
            className={classes.input}
            placeholder="Email"
            ref={emailInput}
            type="email"
            required
          />
        </div>
        <div className={classes.input_container}>
          <h1 className={classes.inputheading}>Password*</h1>
          <input
            className={classes.input}
            placeholder="Enter your Password"
            ref={passwordInput}
            required
          />
        </div>

        <button className={classes.btn} onClick={submitFormHandler}>
          <div className={classes['svg-wrapper-1']}>
            <div className={classes['svg-wrapper']}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="currentColor"
                  d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                ></path>
              </svg>
            </div>
          </div>
          <span>SUBMIT</span>
        </button>
      </div>
    </>
  );
};

export default AdminPage;

//Yoo
