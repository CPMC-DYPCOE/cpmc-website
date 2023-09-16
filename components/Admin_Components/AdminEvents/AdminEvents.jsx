import Link from 'next/link';
import React from 'react';
import classes from './AdminEvents.module.css'


const AllEvents = [
	{
		"event_name":"Mastertalk",
		"description": "Competitive Programming Talk Show with Abhinav Awasti",
		"event_date":"2015-11-29",
		"time":"4pm - 5pm",
		"venue":"MS Teams",
		"registration_link":""
		
	}
]

const AdminEvents = () => {


  return (
    <div className={classes.adminEvents}>
      <Link href="/admin/events/create_event" className={classes.btn}>
        <a className={classes.btn}> Create Event</a>
      </Link>
    </div>
  );
};

export default AdminEvents;
