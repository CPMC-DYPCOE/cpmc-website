import React, { useRef } from 'react';
import Image from 'next/image';

import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import contact from '../assets/contact.svg';
import classes from './ContactPage.module.css';

const Contact = () => {
  const nameInput = useRef();
  const emailInput = useRef();
  const messageInput = useRef();

  const submitFormHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify({
          name: nameInput.current.value,
          email: emailInput.current.value,
          message: messageInput.current.value
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
    } catch (error) {
      console.log(error);
    }
    nameInput.current.value = '';
    emailInput.current.value = '';
    messageInput.current.value = '';
  };
  return (
    <>
      <div className={classes.contact_section}>
        <ToastContainer />
        <h1 className={classes.heading}>
          CONTACT <span className={classes.red}>US</span>
        </h1>
        <p className={classes.para}>
          If you&#39;d like to support us, deliver a talk in our mentorship program, or have a new
          idea you&#39;d like to contribute, please fill out the form below!
        </p>
        <div className={classes.contact}>
          <div className={classes.form}>
            <div className={classes.input_container}>
              <h1 className={classes.inputheading}>Name*</h1>

              <input className={classes.input} placeholder="Full Name" ref={nameInput} required />
            </div>
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
              <h1 className={classes.inputheading}>Message*</h1>
              <textarea
                className={classes.textarea}
                placeholder="Type Your Message Here..!"
                ref={messageInput}
                required
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
        </div>
      </div>
    </>
  );
};

export default Contact;
//Changed
