import React from 'react';
import classes from './NavList.module.css';
import Link from 'next/link';

const NavList = ({ onClick }) => {
  return (
    <>
      <ul className={classes.nav_links}>
        <li className={classes.link_container}>
          <Link href="/" onClick={onClick}>
            <a className={classes.link}> Home</a>
          </Link>
        </li>
        <li className={classes.link_container}>
          <Link href="/joinus" onClick={onClick}>
            <a className={classes.link}> Join Us</a>
          </Link>
        </li>
        <li className={classes.link_container}>
          <Link href="/events" onClick={onClick}>
            <a className={classes.link}> Events</a>
          </Link>
        </li>
        <li className={classes.link_container}>
          <Link href="/team" onClick={onClick}>
            <a className={classes.link}> Team</a>
          </Link>
        </li>
        <li className={classes.link_container}>
          <Link className={classes.link} href="/contact" onClick={onClick}>
            <a className={classes.link}>Contact</a>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default NavList;
