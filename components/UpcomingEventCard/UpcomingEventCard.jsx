import React from 'react';
import styles from './UpcomingEventCard.module.css';
import Link from 'next/link';
import classes from '../LandingSlide/LandingSlide.module.css';
import Image from 'next/image';

const UpcomingEventCard = (props) => {
  const name = props.data.event_name;
  const nameArr = name?.split(' ');

  var words = name?.split(' ');

  var firstPart = '';
  var secondPart = '';

  if (words?.length > 1) {
    firstPart = words.slice(0, -1).join(' ');

    secondPart = words[words.length - 1];
  } else {
    secondPart = name;
  }

  return (
    <>
      <div className={styles.event}>
        <div className={styles.blue_box}></div>
        <div className={styles.content_container}>
          <div className={styles.content}>
            {nameArr?.length > 1 ? (
              <h1 className={styles.name}>
                {firstPart} <span className={styles.red}>{secondPart}</span>
              </h1>
            ) : (
              <h1 className={styles.name}>
                {' '}
                <span className={styles.red}>{props.data.event_name}</span>
              </h1>
            )}
            {props.data.caption ? <p className={styles.desc}>{props.data.caption}</p> : null}
            <div style={{ display: 'flex', gap: '2rem' }}>
              <p style={{ fontWeight: '600' }} className={styles.date}>
                <span className={styles.red}>{props.data.event_date}</span> |{' '}
                <span className={styles.red}>{props.data.event_time}</span>
              </p>
            </div>
            {props.data.venue ? (
              <p className={styles.date}>
                {' '}
                Venue - <span className={styles.blue}>{props.data.venue}</span>{' '}
              </p>
            ) : null}
            {!props.data.is_completed ? (
              <span className={styles.link}>
                <Link href={{ pathname: `/events/${props.data._id}` }}>
                  <button className={classes.btn} style={{ margin: '0' }}>
                    <span className={classes.span}>View Event!!</span>
                    <svg viewBox="0 0 13 10" height="10px" width="15px">
                      <path d="M1,5 L11,5"></path>
                      <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                  </button>
                </Link>
              </span>
            ) : null}
          </div>
          <div className={styles.xyz}>
            {/* <Image alt="xyz" src={props.data.img} width={270} height={250} /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default UpcomingEventCard;
