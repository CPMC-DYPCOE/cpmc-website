import React from 'react';
import { useRef } from 'react';
import classes from '../JoinPage/JoinPage.module.css';
import Link from 'next/link';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const MasterTalk = () => {
  const nameInput = useRef();
  const emailInput = useRef();
  const phoneNumberInput = useRef();
  const academicYearInput = useRef();
  const branchInput = useRef();
  const questionInput = useRef();

  const submitFormHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/event1', {
        method: 'POST',
        body: JSON.stringify({
          name: nameInput.current.value,
          email: emailInput.current.value,
          phoneNumber: phoneNumberInput.current.value,
          branch: branchInput.current.value,
          academicYear: academicYearInput.current.value,
          question: questionInput.current.value
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
    branchInput.current.value = '';
    academicYearInput.current.value = '';
    questionInput.current.value = '';
  };

  return (
    <>
      <div className={classes.join_section}>
        <ToastContainer />
        <h1 className={classes.heading}>
          Register for the
          <br /> <span className={classes.red}> Masters&apos; Talk</span>
        </h1>
        <p className={classes.para}>Fill out the form below to register for the event.</p>
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
            <input className={classes.input} placeholder="rahulsharma@gmail.com" ref={emailInput} />
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
              Ask a question to the speakers!<span className={classes.mandatory}>*</span>
            </label>
            <input className={classes.input} placeholder="How are you?" ref={questionInput} />
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
      </div>
    </>
  );
};

export default MasterTalk;
