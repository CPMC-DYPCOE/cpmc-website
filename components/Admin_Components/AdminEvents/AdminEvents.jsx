import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import classes from './AdminEvents.module.css';
import UpcomingEventCard from '../../UpcomingEventCard/UpcomingEventCard';
import { API_HOST } from '../../../utils/utils';
import axios from 'axios';

const AdminEvents = () => {
  const [allEvents, setAllEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getEvents = async () => {
    try {
      axios({
        method: 'GET',
        url: `${API_HOST}/api/events`,
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': ''
        }})
        .then((response) => {
          setAllEvents(response.data.events);
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
    <div className={classes.adminEvents}>
      <h1 style={{ fontSize: '2em', margin: '1em' }}> CPMC Events </h1>
      <Link href="/admin/events/create_event" className={classes.btn}>
        <a className={classes.btn}> Create Event</a>
      </Link>
      {isLoading ? (
        <div>Loading events.....</div>
      ) : (
        <div className={classes.eventList}>
          {allEvents.map((item) => {
            let redirectUrl = `/admin/events/edit_event?event_id=${item._id}`;
            return (
              <a className={classes.events} key={item._id} href={redirectUrl}>
                <UpcomingEventCard data={item} />
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AdminEvents;
