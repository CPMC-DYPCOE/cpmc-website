import React from 'react';
import classes from './ClubOperations.module.css';

const Card = ({ number = 1, color, content }) => {
  return (
    <div className={classes.card}>
      <div className={classes.cardLeft} style={{ backgroundColor: color }}>
        <span className={classes.number}>{number}</span>
      </div>
      <div className={classes.cardRight}>
        <p className={classes.content}>{content}</p>
      </div>
    </div>
  );
};

export default Card;
