import React from 'react';
import { useRef, useState } from 'react';
import classes from './JoinPage.module.css';
import Link from 'next/link';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const JoinPage = () => {
  const [registraion, setRegistraion] = useState(true);

  const nameInput = useRef();
  const emailInput = useRef();
  const phoneNumberInput = useRef();
  const academicYearInput = useRef();
  const branchInput = useRef();
  const divisionInput = useRef();
  const hackerEarthIdInput = useRef();
  const hackerRankIdInput = useRef();
  const leetCodeIdInput = useRef();
  const codeChefIdInput = useRef();
  const codeForcesIdInput = useRef();
  const atCoderIdInput = useRef();

  const submitFormHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/join-team', {
        method: 'POST',
        body: JSON.stringify({
          firstName: nameInput.current.value,
          email: emailInput.current.value,
          phoneNumber: phoneNumberInput.current.value,
          division: divisionInput.current.value,
          branch: branchInput.current.value,
          atCoderId: atCoderIdInput.current.value,
          codeForcesId: codeForcesIdInput.current.value,
          codeChefId: codeChefIdInput.current.value,
          leetCodeId: leetCodeIdInput.current.value,
          academicYear: academicYearInput.current.value,
          hackerRankId: hackerRankIdInput.current.value,
          hackerEarthId: hackerEarthIdInput.current.value
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!res.ok) {
        toast.error('Something Went Wrong');
      }
      if (res.ok) {
        toast.success('Submitted successfully');
      }
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
      // const err = await error.json();
      // console.log(error);
    }
    nameInput.current.value = '';
    emailInput.current.value = '';
    phoneNumberInput.current.value = '';
    divisionInput.current.value = '';
    branchInput.current.value = '';
    atCoderIdInput.current.value = '';
    codeForcesIdInput.current.value = '';
    codeChefIdInput.current.value = '';
    leetCodeIdInput.current.value = '';
    academicYearInput.current.value = '';
    hackerRankIdInput.current.value = '';
    hackerEarthIdInput.current.value = '';
  };

  return (
    <>
      <div className={classes.join_section}>
        <ToastContainer />
        { registraion ? (
          <>
            <h1 className={classes.heading}>
              Join us to level up your <span className={classes.red}>coding skills. </span>
            </h1>
            <p className={classes.para}>We&apos;ve got 99 bugs, but a glitch ain&apos;t one. Join our code-tastic community today! </p>
            <Link href="https://chat.whatsapp.com/Hbd6HIrZPheKZOFzFRYLy8" target={'_blank'}>
              <button className={classes.btn}>
                JOIN COMMUNITY
              </button>
            </Link>
          </>
        ) : (
          <>
            <h1 className={classes.heading}>
              FILL THESE DETAILS TO <br /> <span className={classes.red}> JOIN CLUB</span>
            </h1>
            <p className={classes.para}>
              Fill out the form below to join the club and become a member of the C.P.M.C squad.
            </p>
          </>
        )}

        {!registraion ? (
          <>
            <div className={classes.form}>
              <div className={classes.input_container}>
                <label className={classes.input_label}>
                  First Name<span className={classes.mandatory}>*</span>
                </label>
                <input className={classes.input} placeholder="Rahul Sharma" ref={nameInput} />
              </div>
              <div className={classes.input_container}>
                <label className={classes.input_label}>
                  Email<span className={classes.mandatory}>*</span>
                </label>
                <input
                  className={classes.input}
                  placeholder="rahulsharma@gmail.com"
                  ref={emailInput}
                />
              </div>
              <div className={classes.input_container}>
                <label className={classes.input_label}>
                  Phone Number<span className={classes.mandatory}>*</span>
                </label>
                <input className={classes.input} placeholder="0123456789" ref={phoneNumberInput} />
              </div>
              <div className={classes.input_container}>
                <label className={classes.input_label}>
                  Academic Year<span className={classes.mandatory}>*</span>
                </label>
                <select className={classes.input} ref={academicYearInput}>
                  <option className={classes.option}>Choose your year</option>
                  <option className={classes.option}>FE</option>
                  <option className={classes.option}>SE</option>
                  <option className={classes.option}>TE</option>
                  <option className={classes.option}>BE</option>
                </select>
              </div>
              <div className={classes.input_container}>
                <label className={classes.input_label}>
                  Branch<span className={classes.mandatory}>*</span>
                </label>
                <select className={classes.input} ref={branchInput}>
                  <option>Choose your branch</option>
                  <option>Computer Engineering</option>
                  <option>IT Engineering</option>
                  <option>AI&DS Engineering</option>
                  <option>Mechanical Engineering</option>
                  <option>Robotics and Automation</option>
                  <option>ENTC Engineering</option>
                  <option>Civil Engineering</option>
                  <option>Instrumental Engineering</option>
                </select>
              </div>
              <div className={classes.input_container}>
                <label className={classes.input_label}>
                  Division<span className={classes.mandatory}>*</span>
                </label>
                <select className={classes.input} ref={divisionInput}>
                  <option>Choose your division</option>
                  <option>A</option>
                  <option>B</option>
                </select>
              </div>
              <div className={classes.input_container}>
                <label className={classes.input_label}>
                  Hackerrank ID<span className={classes.mandatory}>*</span>
                </label>
                <input
                  className={classes.input}
                  placeholder="https://www.hackerrank.com/rahul_sharma"
                  ref={hackerRankIdInput}
                />
              </div>
              <div className={classes.input_container}>
                <label className={classes.input_label}>Codechef ID</label>
                <input
                  className={classes.input}
                  placeholder="https://www.codechef.com/users/rahul_sharma"
                  ref={codeChefIdInput}
                />
              </div>
              <div className={classes.input_container}>
                <label className={classes.input_label}>Leetcode ID</label>
                <input
                  className={classes.input}
                  placeholder="https://leetcode.com/rahul_sharma/"
                  ref={leetCodeIdInput}
                />
              </div>
              <div className={classes.input_container}>
                <label className={classes.input_label}>Codeforces ID</label>
                <input
                  className={classes.input}
                  placeholder="https://codeforces.com/profile/rahul_sharma"
                  ref={codeForcesIdInput}
                />
              </div>
              <div className={classes.input_container}>
                <label className={classes.input_label}>Atcoder ID</label>
                <input
                  className={classes.input}
                  placeholder="https://atcoder.jp/users/rahul_sharma"
                  ref={atCoderIdInput}
                />
              </div>
              <div className={classes.input_container}>
                <label className={classes.input_label}>Hackerearth ID</label>
                <input
                  className={classes.input}
                  placeholder="https://www.hackerearth.com/@rahul_sharrma"
                  ref={hackerEarthIdInput}
                />
              </div>

              <button className={classes.btn} onClick={submitFormHandler}>
                <div className={classes['svg-wrapper-1']}>
                  <div className={classes['svg-wrapper']}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
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
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default JoinPage;
