import React from 'react';
import Image from 'next/image';
import strongCommunity from '../assets/StrongCommunity.svg';
import competativeProgramming from '../assets/CompitativeProgramming.svg';
import mentoring from '../assets/Mentoring.svg';
import classes from './Mission.module.css';

const Mission = () => {
  return (
    <div className={classes.main}>
      <div className={classes.container1}>
        <h1 className={classes.smallheading}>Why we are doing this</h1>
        <h1 className={classes.heading}>OUR MISSION</h1>
        <h1 className={classes.content}>
          On a goal to increase students critical thinking skills through competitive programming,
          creating a mentor-mentee connection between juniors and seniors, and assisting students in
          getting better jobs.
        </h1>
      </div>
      <div className={classes.container3}>
        <div className={classes.card2}>
          <div>
            <Image src={strongCommunity} alt="xyz" width={80} height={80} />
          </div>
          <h1 className={classes.heading1}>Strong Community</h1>
          <h1 className={classes.content1}>
            We also want to build a robust and influential network that will assist juniors in
            connecting with and learning from their mentors, and seniors in preparing for
            competitive programming so that they may pass their interviews and land fantastic MNC
            jobs.
          </h1>
        </div>
        <div className={classes.card2}>
          <div>
            <Image src={mentoring} alt="xyz" width={80} height={80} />
          </div>
          <h1 className={classes.heading1}>Mentorship</h1>
          <h1 className={classes.content1}>
            Our secondary goal is to build a strong mentoring relationship between our seasoned
            seniors and juniors. This will allow the students to learn a lot in a short amount of
            time while also allowing them to form strong bonds with their peers.
          </h1>
        </div>
        <div className={classes.card2}>
          <div>
            <Image src={competativeProgramming} alt="xyz" width={80} height={80} />
          </div>
          <h1 className={classes.heading1}>Competitive Programming</h1>
          <h1 className={classes.content1}>
            Our primary goal is to promote CP in our college community and help students enhance
            their problem-solving abilities.
          </h1>
        </div>
      </div>
      <div className={classes.container2}>
        <div className={classes.div1}>
          <div className={classes.card}>
            <div>
              <Image src={strongCommunity} alt="xyz" width={80} height={80} />
            </div>
            <h1 className={classes.heading1}>Strong Community</h1>
            <h1 className={classes.content1}>
              We also want to build a robust and influential network that will assist juniors in
              connecting with and learning from their mentors, and seniors in preparing for
              competitive programming so that they may pass their interviews and land fantastic MNC
              jobs.
            </h1>
          </div>
          <div className={classes.card}>
            <div>
              <Image src={mentoring} alt="xyz" width={80} height={80} />
            </div>
            <h1 className={classes.heading1}>Mentorship</h1>
            <h1 className={classes.content1}>
              Our secondary goal is to build a strong mentoring relationship between our seasoned
              seniors and juniors. This will allow the students to learn a lot in a short amount of
              time while also allowing them to form strong bonds with their peers.
            </h1>
          </div>
        </div>
        <div className={classes.div2}>
          <div className={classes.card}>
            <div>
              <Image src={competativeProgramming} alt="xyz" width={80} height={80} />
            </div>
            <h1 className={classes.heading1}>Competitive Programming</h1>
            <h1 className={classes.content1}>
              Our primary goal is to promote CP in our college community and help students enhance
              their problem-solving abilities.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
