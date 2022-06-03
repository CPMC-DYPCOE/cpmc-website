import classes from './ClubOperations.module.css';

import React from 'react';
import Card from './Card';

const data = [
  {
    number: 1,
    content: `Choosing Club Members - Our initial step is to assemble a team of
    30-40 persons who are either interested in or already involved in
    competitive programming. This is accomplished through interviews
    conducted by our team's core members.`,
    color: '#FFA701'
  },
  {
    number: 2,
    content: `Conducting Contests and Quizzes - The chosen team members will compete in various contests and quizzes alongside the core team members. Along with the quizzes, the team will receive a daily question on a specific topic for a period of 1-2 weeks, as well as a tip of the day to keep the coders informed.`,
    color: '#F32053'
  },
  {
    number: 3,
    content: `Mentoring Sessions - After a month of doing cp, mentors and mentees will be selected from the team and other students, respectively. The mentors will next guide the mentees around the world of cp and tech, as well as continue to answer the questions from phase 2.`,
    color: 'green'
  }
];

const ClubOperations = () => {
  return (
    <div className={classes.mainDiv}>
      <div className={classes.hero}>
        <h1 className={classes.smallTitle}>Why we are doing this!</h1>
        <h1 className={classes.title}>
          HOW DOES THIS <span>CLUB WORK?</span>
        </h1>
        <p className={classes.context}>
          Our club seeks to increase student&#39;s problem-solving skills as well as their cp in
          order to improve their coding abilities. The following three steps describe how our Club
          operates.
        </p>
      </div>
      <div className={classes.scroll}>
        {data.map((item, index) => (
          <Card number={item.number} content={item.content} color={item.color} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ClubOperations;
