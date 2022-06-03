import React from 'react';
import classes from './tp.module.css';
import Card from './Card';
import aj from '../assets/Team/aj.jpeg';

import { DATA, DATA2, DATA3 } from '../assets/Team/Data/index';

const TeamPage = () => {
  return (
    <>
      <div className={classes.team_section}>
        <h1 className={classes.heading}>
          OUR <span className={classes.red}> TEAM</span>
        </h1>
        <p className={classes.para}>
          Our team consists of some of the most devoted and driven students from various fields who
          have made significant progress in their coding journey.
        </p>
        <div className={classes.team}>
          {DATA?.map((m, i) => (
            <Card m={m} key={i} />
          ))}
        </div>
        <h1 className={classes.heading2}>
          Doubt-Solving <span className={classes.red}> TEAM</span>
        </h1>
        <div className={classes.team}>
          {DATA2.map((m, i) => (
            <Card m={m} key={i} />
          ))}
        </div>
        <h1 className={classes.heading2}>
          Management <span className={classes.red}> TEAM</span>
        </h1>
        <div className={classes.team}>
          {DATA3.map((m, i) => (
            <Card m={m} key={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TeamPage;
