import React from 'react';
import styles from './EventsPage.module.css';
import classes from '../LandingSlide/LandingSlide.module.css';
import e1 from '../assets/Event1.png';
import e2 from '../assets/mastertalk.png';
import Image from 'next/image';
import Link from 'next/link';

const EventsPage = () => {
  return (
    <>
      <div className={styles.event_section}>
        <h1 className={styles.title}>
          Upcoming <span className={styles.red}> Events</span>
        </h1>
        <div className={styles.event}>
          <div className={styles.blue_box}></div>
          <div className={styles.content_container}>
            <div className={styles.content}>
              <h1 className={styles.name}>
                Code <span className={styles.red}>Room</span>
              </h1>
              <p className={styles.desc}>A talk with the Masters for Masters</p>
              <p className={styles.date}>
                DATE - <span className={styles.blue}>Not Defined</span>
              </p>
              <span className={styles.link}>
                <Link href="/masterstalk">
                  <button className={classes.btn} style={{ margin: '0' }}>
                    <span className={classes.span}>REGISTER HERE!!</span>
                    <svg viewBox="0 0 13 10" height="10px" width="15px">
                      <path d="M1,5 L11,5"></path>
                      <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                  </button>
                </Link>
              </span>
            </div>
            <div className={styles.xyz}>
              <Image alt="xyz" src={e2} width={270} height={250} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.event_section}>
        <h1 className={styles.title}>
          Past <span className={styles.red}> Events</span>
        </h1>
        <div className={styles.event}>
          <div className={styles.blue_box}></div>
          <div className={styles.content_container}>
            <div className={styles.content}>
              <h1 className={styles.name}>
                Masters&apos; <span className={styles.red}>Talk</span>
              </h1>
              <p className={styles.desc}>A talk with the Masters for Masters</p>
              <p className={styles.date}>
                Held On - <span className={styles.blue}>4/July/2022</span>
              </p>
              <span className={styles.link}>
                <Link href="/masterstalk">
                  <button className={classes.btn} style={{ margin: '0' }}>
                    <span className={classes.span}>VIEW EVENT</span>
                    <svg viewBox="0 0 13 10" height="10px" width="15px">
                      <path d="M1,5 L11,5"></path>
                      <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                  </button>
                </Link>
              </span>
            </div>
            <div className={styles.xyz}>
              <Image alt="xyz" src={e2} width={270} height={250} />
            </div>
          </div>
        </div>
        <div className={styles.event}>
          <div className={styles.blue_box}></div>
          <div className={styles.content_container}>
            <div className={styles.content}>
              <h1 className={styles.name}>
                CODING <span className={styles.red}>COMPETION</span>
              </h1>
              <p className={styles.desc}>
                Programming Competition, for students and professionals of DYPCOE Akurdi, Pune.
              </p>
              <p className={styles.date}>
                Held On - <span className={styles.blue}>5/June/2022</span>
              </p>
              <span className={styles.link}>
                <Link href="/masterstalk">
                  <button className={classes.btn} style={{ margin: '0' }}>
                    <span className={classes.span}>VIEW EVENT</span>
                    <svg viewBox="0 0 13 10" height="10px" width="15px">
                      <path d="M1,5 L11,5"></path>
                      <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                  </button>
                </Link>
              </span>
            </div>
            <div className={styles.xyz}>
              <Image alt="xyz" src={e1} width={250} height={200} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventsPage;
