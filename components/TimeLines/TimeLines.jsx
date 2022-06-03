import React from 'react';
import classes from './TimeLines.module.css';
import Image from 'next/image';
import t1 from '../assets/t1.svg';
import t2 from '../assets/t2.svg';
import t3 from '../assets/t3.svg';

const TimeLines = () => {
  return (
    <div id="timeline" className={classes.main}>
      <div className={classes.container}>
        <div className={classes.img_div}>
          <Image src={t1} alt="xyz" width={600} height={400} />
        </div>
        <div className={classes.content_div}>
          <h1 className={classes.number}>01.</h1>
          <h1 className={classes.heading}>IMPROVE PROBLEM SOLVING</h1>
          <h1 className={classes.sub_heading}>
            Assisting students in developing their problem-solving skills and coding abilities.
          </h1>
        </div>
      </div>
      <div className={classes.container_1}>
        <div className={classes.img_div}>
          <Image src={t2} alt="xyz" width={600} height={400} />
        </div>
        <div className={classes.content_div}>
          <h1 className={classes.number}>02.</h1>
          <h1 className={classes.heading}>LEARN AND DISCUSS COMPETITIVE PROGRAMMING</h1>
          <h1 className={classes.sub_heading}>
            Learning and refining competitive programming to crack interviews better and improve
            critical thinking.
          </h1>
        </div>
      </div>
      <div className={classes.container}>
        <div className={classes.img_div}>
          <Image src={t3} alt="xyz" width={600} height={400} />
        </div>
        <div className={classes.content_div}>
          <h1 className={classes.number}>03.</h1>
          <h1 className={classes.heading}>MENTORING AND HELPING EACH OTHER TO LEARN NEW SKILLS</h1>
          <h1 className={classes.sub_heading}>
            Exchanging ideas and guiding students down a route that is devoid of errors.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default TimeLines;
