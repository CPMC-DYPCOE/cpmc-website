import React from 'react';
import styles from './EventsPage.module.css';
import classes from '../LandingSlide/LandingSlide.module.css';
import e1 from '../assets/Event1.png';
import e2 from '../assets/mastertalk.png';
import Image from 'next/image';
import Link from 'next/link';
import UpcomingEventCard from '../UpcomingEventCard/UpcomingEventCard';
import PastEventCard from '../PastEventCard/PastEventCard';
// import {useLocation} from 'react-router-dom'
const EventsPage = () => {

  const upcomingEvent = [
    { name: 'Masters-Talk Episode-2', subTitle: 'Competitive Programming Talk Show with Abhinav Awasti', toBeHeldOn: 'Novermber 6', timing: '4pm - 5pm', venue: 'MS Team', registrationLink:'https://forms.gle/BgSWqSGdFJb6uWXn7', img: e2 },
    { name: 'Code Room', subTitle: 'Come code together learn together', toBeHeldOn: 'Monday to Friday', timing: '5pm - 7pm', venue: 'Classroom Number 1, A building', registrationLink: '', img: e1 }
  ]

  const pastEvent = [
    { name: 'Masters-Talk Episode-1', subTitle: 'A talk with the Masters for Masters', heldOn: 'July 4', timing: '', Venue: 'sfd', ViewEventDetailsLink: 'events/masters-talk' },
    { name: 'Coding Competition', subTitle: 'Programming Competition, for students and professionals of DYPCOE Akurdi, Pune', heldOn: 'June 5', timing: '', Venue: 'Online', ViewEventDetailsLink: ''},
  ]

  return (
    <>
      <div className={styles.event_section}>
        <h1 className={styles.title}> Upcoming <span className={styles.red}> Events</span></h1>
        {upcomingEvent.map((data,i) => {
          return (<UpcomingEventCard data={data} key={i} />)
        })
        }
      </div>
      <div className={styles.event_section}>
        <h1 className={styles.title}>Past <span className={styles.red}> Events</span></h1>
        <div className={styles.event_content_section}>
          {pastEvent.map((data,i) => {
            return (<PastEventCard data={data} key={i}/>)
          })
          }
        </div>
      </div>
    </>
  );
};

export default EventsPage;
