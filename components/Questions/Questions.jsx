import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AskQuestion from '../assets/askQuestions.svg';
import styles from './Questions.module.css';

import classes from '../LandingSlide/LandingSlide.module.css';

const Questions = () => {
  return (
    <>
      <div className={styles.questions}>
        <div className={styles.question}>
          <h1 className={styles.text}>HAVE ANY QUESTIONS?</h1>
        </div>
        <div className={styles.btnimg}>
          <div className={styles.questbtn}>
            <Link href="/contact">
              <button style={{ margin: 0 }} className={classes.btn}>
                <span className={classes.span}>CONTACT US</span>
                <svg viewBox="0 0 13 10" height="10px" width="15px">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </button>
            </Link>
          </div>
          <div className={styles.image}>
            <Image alt="xyz" src={AskQuestion} width="120" height="100" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Questions;
