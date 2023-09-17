import React, { useEffect, useState } from 'react';
import classes from './EventDetails.module.css';
import Link from 'next/link';
import { API_HOST } from '../../utils/utils';
import Image from 'next/image';

const EventDetails = ({ event_id }) => {
  const [isLoading, setIsLoading] = useState(true);

  const [eventDetails, setEventDetails] = useState({
    event_id: '',
    event_name: '',
    caption: '',
    description: '',
    event_date: '',
    event_time: '',
    venue: '',
    is_completed: false,
    images: []
  });

  const getEvents = async () => {
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
          setIsLoading(false);
        });
    } catch (error) {
      console.log(error);
      alert('Something Went Wrong');
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    if (event_id) {
      getEvents();
    }
  }, [event_id]);

  return (
    <div>
      {isLoading == true ? (
        <div style={{ color: 'white', margin: '10em 2em', textAlign: 'center' }}>Loading...</div>
      ) : (
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
            <p style={{ maxWidth: '500px', textAlign: 'center' }}> {eventDetails.description}</p>
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
          {eventDetails.images.length > 0 ? (
            <div className={classes.eventImages}>
              <h1 className={classes.heading}>Memories</h1>
              <div className={classes.allImages}>
                {eventDetails.images.map((src, id) => {
                  return <img src={src} key={id} />;
                })}
              </div>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default EventDetails;
