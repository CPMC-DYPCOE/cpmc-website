import classes from './ClubOperations.module.css';
import React, { useState } from 'react';
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
  const [currentIndex, setCurrentIndex] = useState(0);

  const dec = () => {
    let res = currentIndex - 1 < 0 ? 2 : currentIndex - 1;
    setCurrentIndex(res);
  };
  const inc = () => {
    let res = currentIndex + 1 > 2 ? 0 : currentIndex + 1;
    setCurrentIndex(res);
  };

  return (
    <div className={classes.mainDiv}>
      <div className={classes.hero}>
        <h1 className={classes.smallTitle}>How do we operate?</h1>
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
        {data.map((items, index) => {
          if (index === currentIndex)
            return (
              <Card
                key={items.number}
                number={items.number}
                color={items.color}
                content={items.content}
                className={classes.card}
              />
            );
        })}
      </div>
      <div className={classes.buttonContainer}>
        <div className={classes.button} onClick={dec}>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg>
        </div>
        <div className={classes.button} onClick={inc}>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="White" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg>
        </div>
      </div>
    </div>
  );
};

export default ClubOperations;
