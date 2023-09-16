import Link from 'next/link';
import React from 'react';
import classes from './AdminEvents.module.css';
import UpcomingEventCard from '../../UpcomingEventCard/UpcomingEventCard';

const AllEvents = [
  {
	id:"event1",
    event_name: 'Mastertalk',
    caption: 'Competitive Programming Talk Show with Abhinav Awasti',
    description: 'We invited Competitive Programming Talk Show with Abhinav Awasti',
    event_date: '2015-11-29 - 2018-11-29',
    event_time: '4pm - 5pm',
    venue: 'MS Teams',
    is_completed: true,
    images: ['', '', '', '']
  },
  {
	id:"event2",
    event_name: 'Mastertalk',
    caption: 'Competitive Programming Talk Show with Abhinav Awasti',
    description: 'We invited Competitive Programming Talk Show with Abhinav Awasti',
    event_date: '2015-11-29 - 2018-11-29',
    event_time: '4pm - 5pm',
    venue: 'MS Teams',
    is_completed: true,
    images: ['', '', '', '']
  },
  {
	id:"event3",
    event_name: 'Mastertalk',
    caption: 'Competitive Programming Talk Show with Abhinav Awasti',
    description: 'We invited Competitive Programming Talk Show with Abhinav Awasti',
    event_date: '2015-11-29 - 2018-11-29',
    event_time: '4pm - 5pm',
    venue: 'MS Teams',
    is_completed: false,
    images: ['', '', '', '']
  }
];

const AdminEvents = () => {
  return (
    <div className={classes.adminEvents}>
      <h1 style={{ fontSize: '2em', margin: '1em' }}> CPMC Events </h1>
      <Link href="/admin/events/create_event" className={classes.btn}>
        <a className={classes.btn}> Create Event</a>
      </Link>
      <div className={classes.eventList}>
        {AllEvents.map((item) => {
			let redirectUrl = `/admin/events/edit_event?event_id=${item.id}`
          return (
            <a className={classes.events} key={item.id} href={redirectUrl}>
              <UpcomingEventCard data={item} />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default AdminEvents;
