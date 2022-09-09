import React from 'react';
import Image from 'next/image';
import classes from './Card.module.css';
import linkedin from '../assets/linkedin.svg';
import instagram from '../assets/instagram.svg';
import github from '../assets/github.svg';

const Card = ({m}) => {
  return (
    <>
      <div className={classes.card}>
        <div className={classes.image_circle}> </div>
        <div className={classes.image_container}>
          <Image alt="xyz" className={classes.image} src={m.photo} width={210} height={210} />
        </div>
        <div className={classes.contents}>
          <h1 className={classes.name}>{m.name}</h1>
          <p className={classes.position}>{m.position}</p>
          <p className={classes.class}>{m.class}</p>
        </div>
        <div className={classes.social_container}>
          <ul className={classes.social_links}>
            <li className={classes.link_container}>
              <a href={m.linkedin} className={classes.link} target="_blank" rel="noreferrer">
                <Image alt="xyz" src={linkedin} width={40} height={40} />
              </a>
            </li>
            <li className={classes.link_container}>
              <a href={m.instagram} className={classes.link} target="_blank" rel="noreferrer">
                <Image alt="xyz" src={instagram} width={40} height={40} />
              </a>
            </li>
            <li className={classes.link_container}>
              <a href={m.github} className={classes.link} target="_blank" rel="noreferrer">
                <Image alt="xyz" src={github} width={40} height={40} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Card;
