import React, { useEffect, useRef, useState } from 'react';
import classes from './EventRegistration.module.css';
import { API_HOST } from '../../utils/utils';
import Head from 'next/head';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EventRegistration = ({ event_id }) => {
  const [eventDetails, setEventDetails] = useState({
    event_id: '',
    event_name: '',
    caption: '',
    description: '',
    event_date: '',
    event_time: '',
    venue: '',
    is_completed: false,
    is_competition_form: false
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    division: '',
    branch: '',
    academicYear: '',
    atCoderId: '',
    codeForcesId: '',
    codeChefId: '',
    leetCodeId: '',
    hackerRankId: '',
    hackerEarthId: ''
  });

  function checkEmptyFields(formData) {
    const requiredFields = ['name', 'email', 'phoneNumber', 'division', 'branch', 'academicYear'];
    const emptyFields = [];

    for (const field of requiredFields) {
      if (typeof formData[field] === 'string' && formData[field].trim() === '') {
        if (field == 'division' || field == 'branch' || field == 'academicYear') {
          emptyFields.push('Please choose your ' + field);
        } else {
          emptyFields.push('Please fill your ' + field);
        }
      }
    }
    return emptyFields;
  }

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? e.target.checked : value
    });
  };

  const submitFormHandler = async (e) => {
    e.preventDefault();
    let updated_value = formData;
    updated_value['events'] = [event_id];

    const emptyFields = checkEmptyFields(updated_value);
    if (emptyFields.length > 0) {
      for (let item = 0; item < emptyFields.length; item++) {
        toast.error(emptyFields[item]);
      }
      return;
    }

    try {
      const res = await fetch(`${API_HOST}/api/register`, {
        method: 'POST',
        body: JSON.stringify(updated_value),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!res.ok) {
        toast.error('Something Went Wrong');
      }
      if (res.ok) {
        toast.success('Submitted successfully');
        window.location.href = '/joinus'
      }
      const data = await res.json();
    } catch (error) {
      toast.error(error.message);
    }

    // Clear input fields
    setFormData({
      name: '',
      email: '',
      phoneNumber: '',
      division: '',
      branch: '',
      academicYear: '',
      atCoderId: '',
      codeForcesId: '',
      codeChefId: '',
      leetCodeId: '',
      hackerRankId: '',
      hackerEarthId: ''
    });
  };

  const getEvents = async () => {
    console.log(event_id);
    try {
      fetch(`${API_HOST}/api/events/eventDetails`, {
        method: 'POST',
        body: JSON.stringify({ event_id: event_id }),
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': ''
        }
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setEventDetails(data.event_details[0]);
        });
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (event_id) {
      getEvents();
    }
  }, [event_id]);

  return (
    <div>
      <ToastContainer />
      <Head>
        <title>Register {eventDetails.event_name}</title>
        <meta
          name="CPMC-EVENTS"
          content="Competetive Programming
            and Mentorship Club.
            DYPCOE, Pune."
        />
      </Head>
      <h1 className={classes.heading}>{eventDetails.event_name} registration form</h1>
      <form className={classes.form} onSubmit={submitFormHandler}>
        <div className={classes.input_container}>
          <label className={classes.input_label}>
            Full name<span className={classes.mandatory}>*</span>
          </label>
          <input
            className={classes.input}
            placeholder="Rahul Sharma"
            type="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className={classes.input_container}>
          <label className={classes.input_label}>
            Email<span className={classes.mandatory}>*</span>
          </label>
          <input
            className={classes.input}
            placeholder="sharmaji@gmail.com"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className={classes.input_container}>
          <label className={classes.input_label}>
            Phone Number<span className={classes.mandatory}>*</span>
          </label>
          <input
            className={classes.input}
            placeholder="9876543210"
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
        </div>
        <div className={classes.input_container}>
          <label className={classes.input_label}>
            Academic Year<span className={classes.mandatory}>*</span>
          </label>
          <select
            className={classes.input}
            name="academicYear"
            value={formData.academicYear}
            onChange={handleInputChange}
          >
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
          <select
            className={classes.input}
            name="branch"
            value={formData.branch}
            onChange={handleInputChange}
          >
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
          <select
            className={classes.input}
            name="division"
            value={formData.division}
            onChange={handleInputChange}
          >
            <option>Choose your division</option>
            <option>A</option>
            <option>B</option>
          </select>
        </div>
        {eventDetails.is_competition_form ? (
          <div className={classes.competitionsForm}>
            <div className={classes.input_container}>
              <label className={classes.input_label}>
                Hackerrank ID<span className={classes.mandatory}>*</span>
              </label>
              <input
                className={classes.input}
                placeholder="https://www.hackerrank.com/sharma_ji"
                type="text"
                name="hackerRankId"
                value={formData.hackerRankId}
                onChange={handleInputChange}
              />
            </div>
            <div className={classes.input_container}>
              <label className={classes.input_label}>Codechef ID</label>
              <input
                className={classes.input}
                placeholder="https://www.codechef.com/users/sharma_ji"
                type="text"
                name="codeChefId"
                value={formData.codeChefId}
                onChange={handleInputChange}
              />
            </div>
            <div className={classes.input_container}>
              <label className={classes.input_label}>Leetcode ID</label>
              <input
                className={classes.input}
                placeholder="https://leetcode.com/sharma_ji/"
                type="text"
                name="leetCodeId"
                value={formData.leetCodeId}
                onChange={handleInputChange}
              />
            </div>
            <div className={classes.input_container}>
              <label className={classes.input_label}>Codeforces ID</label>
              <input
                className={classes.input}
                placeholder="https://codeforces.com/profile/sharma_ji"
                type="text"
                name="codeForcesId"
                value={formData.codeForcesId}
                onChange={handleInputChange}
              />
            </div>
            <div className={classes.input_container}>
              <label className={classes.input_label}>Atcoder ID</label>
              <input
                className={classes.input}
                placeholder="https://atcoder.jp/users/sharma_ji"
                type="text"
                name="atCoderId"
                value={formData.atCoderId}
                onChange={handleInputChange}
              />
            </div>
            <div className={classes.input_container}>
              <label className={classes.input_label}>Hackerearth ID</label>
              <input
                className={classes.input}
                placeholder="https://www.hackerearth.com/@rahul_sharrma"
                type="text"
                name="hackerEarthId"
                value={formData.hackerEarthId}
                onChange={handleInputChange}
              />
            </div>
          </div>
        ) : null}

        <button className={classes.btn} type="submit">
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
      </form>
    </div>
  );
};

export default EventRegistration;
