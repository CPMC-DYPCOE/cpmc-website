import React from 'react';
import classes from './tp.module.css';
import Card from './Card';
import mannu from '../assets/mannu.jpeg';

import { DATA, DATA2, DATA3 } from '../assets/Team/Data/index';

const sirKaData = {
  name: 'Dr. Manish Sharma',
  position: 'Faculty Co-ordinator',
  photo: mannu,
  linkedin: 'https://www.linkedin.com/in/dr-manish-sharma-2bb7404a/',
  instagram: 'https://www.linkedin.com/in/dr-manish-sharma-2bb7404a/',
  github: 'https://www.linkedin.com/in/dr-manish-sharma-2bb7404a/'
};

const TeamPage = () => {
  return (
    <>
      <div className={classes.team_section}>
        <h1 className={classes.heading}>
          FACULTY <span className={classes.red}>CO-ORDINATOR</span>
        </h1>
        <div className={classes.sirContainer}>
          <p className={classes.sirDetails}>
            Researcher with Ph.D. in Electronics Engineering (ML & AI) and 15+ years of hands-on
            experience leveraging machine learning models for predictive modeling, data
            preprocessing, exploratory data analysis and optimization to solve challenging problems.
            Passionate about reinforcement learning, intelligent systems, various configurations of
            neural Network, mathematical modeling. Published more than 70 research papers, 3 book
            chapters and 5 patents.
          </p>
          <Card m={sirKaData} key={0} sir />
        </div>
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
        <h1 className={classes.heading2}>
          TEAM <span className={classes.red}> SPANKARS</span>
        </h1>
        <div className={classes.team}>
          {DATA2.map((m, i) => (
            <Card m={m} key={i} />
          ))}
        </div>
        <h1 className={classes.heading2}>
          TEAM <span className={classes.red}> SINISTERS</span>
        </h1>
        <div className={classes.team}>
          {DATA2.map((m, i) => (
            <Card m={m} key={i} />
          ))}
        </div>
        <h1 className={classes.heading2}>
          TEAM <span className={classes.red}> ENDEAVOURS</span>
        </h1>
        <div className={classes.team}>
          {DATA2.map((m, i) => (
            <Card m={m} key={i} />
          ))}
        </div>
        <h1 className={classes.heading2}>
          TEAM <span className={classes.red}> LANNISTERS</span>
        </h1>
        <div className={classes.team}>
          {DATA2.map((m, i) => (
            <Card m={m} key={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TeamPage;
