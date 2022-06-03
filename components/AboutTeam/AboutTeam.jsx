import React, { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import classes from '../LandingSlide/LandingSlide.module.css';
import t4 from '../assets/t4.svg';
import styles from './AboutTeam.module.css';

const AboutTeam = () => {
  return (
    <>
      <div className={styles.mainabout}>
        <div className={styles.leftcolumnteam}>
          <div className={styles.teammainhead}>
            <h2 className={styles.aboutteamhead}>About the Team</h2>
            <h1 className={styles.teamhead1}>
              <span className={styles.teamhead2}>MEET OUR</span>
              TEAM
            </h1>
          </div>
          <p className={styles.teammssg}>
            Our primary goal is to promote CP in our college community and help students enhance
            their problem-solving abilities. Our primary goal is to promote CP in our college
            community and help students enhance their
          </p>
          <div className={styles.teambtn}>
            <Link href="/team">
              <button className={classes.btn}>
                <span className={classes.span}>OUR TEAM</span>
                <svg viewBox="0 0 13 10" height="10px" width="15px">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </button>
            </Link>
          </div>
        </div>
        <div>
          <Image alt="xyz" src={t4} width={600} height={450} />
        </div>
      </div>
    </>
  );
};

export default AboutTeam;
