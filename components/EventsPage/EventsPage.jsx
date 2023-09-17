import React, { useEffect, useState } from 'react';
import styles from './EventsPage.module.css';
import UpcomingEventCard from '../UpcomingEventCard/UpcomingEventCard';
import PastEventCard from '../PastEventCard/PastEventCard';
import { API_HOST } from '../../utils/utils';
// import {useLocation} from 'react-router-dom'
const EventsPage = () => {
  const [upComingEvent, setUpcomingEvent] = useState([]);
  const [pastEvent, setPastEvent] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getEvents = async () => {
    try {
      fetch(`${API_HOST}/api/events`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          let events = data.events;
          const filteredUpcomingEvents = events.filter((event) => !event.is_completed);
          const filteredPastEvents = events.filter((event) => event.is_completed);
          setUpcomingEvent(filteredUpcomingEvents);
          setPastEvent(filteredPastEvents);
        });
    } catch (error) {
      console.log(error);
      alert('Something Went Wrong');
    }
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    getEvents();
  }, []);

  return (
    <>
      {upComingEvent.length > 0 ? (
        <div className={styles.event_section}>
          <h1 className={styles.title}>
            {' '}
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
    </>
  );
};

export default EventsPage;
