import React, { useEffect, useState } from 'react';
import classes from './EventDetails.module.css';
import Link from 'next/link';
import { API_HOST } from '../../utils/utils';

const EventDetails = ({ event_id }) => {
  const [isLoading, setIsLoading] = useState(false);

  const [eventDetails, setEventDetails] = useState({
    event_id: '',
    event_name: '',
    caption: '',
    description: '',
    event_date: '',
    event_time: '',
    venue: '',
    is_completed: false
  });

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
            console.log(data.event_details[0]);
            setEventDetails(data.event_details[0]);
        });
    } catch (error) {
      console.log(error);
      alert('Something Went Wrong');
    }
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    if (event_id) {
      getEvents();
    }
  }, [event_id]);

  return (
    <div className={classes.eventDetails}>
      <div className={classes.generalInfo}>
        <h1 className={classes.heading}>{eventDetails.event_name}</h1>
        <h1 className={classes.caption}>{eventDetails.caption}</h1>
        <h1 className={classes.generalDetails}>
          <span>Date: </span>
          {eventDetails.event_date}
        </h1>
        <h1 className={classes.generalDetails}>
          <span>Time: </span>
          {eventDetails.event_time}
        </h1>
        <h1 className={classes.generalDetails}>
          <span>Venue: </span>
          {eventDetails.venue}
        </h1>
      </div>
      <div className={classes.aboutEvent}>
        <h1>About Event: </h1>
        <p> descriptiom{eventDetails.description}</p>
      </div>
      <div>
        {!eventDetails.is_completed ? (
          <Link href={{ pathname: `/register/${event_id}` }}>
            <button className={classes.btn} style={{ margin: '0' }}>
              <span className={classes.span}>Register here</span>
              <svg viewBox="0 0 13 10" height="10px" width="15px">
                <path d="M1,5 L11,5"></path>
              </svg>
            </button>
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default EventDetails;
