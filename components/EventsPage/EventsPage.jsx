import React, { useEffect, useState } from 'react';
import styles from './EventsPage.module.css';
import UpcomingEventCard from '../UpcomingEventCard/UpcomingEventCard';
import PastEventCard from '../PastEventCard/PastEventCard';
import { API_HOST } from '../../utils/utils';
import axios from 'axios'
// import {useLocation} from 'react-router-dom'
const EventsPage = () => {
  const [upComingEvent, setUpcomingEvent] = useState([]);
  const [pastEvent, setPastEvent] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getEvents = async () => {
    try {
      axios({
        method: 'GET',
        url: `${API_HOST}/api/events`,
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': ''
        }
      })
      .then((response) => {
        const data = response.data;
        const events = data.events;
        const filteredUpcomingEvents = events.filter((event) => !event.is_completed);
        const filteredPastEvents = events.filter((event) => event.is_completed);
        setUpcomingEvent(filteredUpcomingEvents);
        setPastEvent(filteredPastEvents);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Something Went Wrong');
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
    getEvents();
  }, []);

  return (
    <>
      {isLoading == true ? (
        <div style={{ color: 'white', margin: '10em 2em', textAlign: 'center' }}>Loading...</div>
      ) : (
        <div>
          {upComingEvent.length > 0 ? (
            <div className={styles.event_section}>
              <h1 className={styles.title}>
                Upcoming <span className={styles.red}> Events</span>
              </h1>
              {upComingEvent.map((data, i) => {
                return <UpcomingEventCard data={data} key={i} />;
              })}
            </div>
          ) : null}
          {pastEvent.length > 0 ? (
            <div className={styles.event_section}>
              <h1 className={styles.title}>
                Past <span className={styles.red}> Events</span>
              </h1>
              <div className={styles.event_content_section}>
                {pastEvent.map((data, i) => {
                  return <PastEventCard data={data} key={i} />;
                })}
              </div>
            </div>
          ) : null}
        </div>
      )}
    </>
  );
};

export default EventsPage;
