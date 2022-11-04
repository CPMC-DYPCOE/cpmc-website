import React, { useState } from 'react';
import NavList from './NavList';
import classes from './Navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../assets/CPMC.svg';
import logo1 from '../assets/CPMCLogo.svg';

const Navbar = () => {
  const [isActive, setActive] = useState(false);

  const navHandler = () => {
    setActive(!isActive);
  };
  return (
    <>
      <div className={classes.navbar}>
        <Link href="/">
          <div className={classes.img_container}>
            <Image alt="xyz" src={logo} width={100} height={70} />
          </div>
        </Link>

        <div
          className={!isActive ? classes.hamburger : classes.hamburger_active}
          onClick={navHandler}
        >
          <div className={classes.line1}></div>
          <div className={classes.line2}></div>
          <div className={classes.line3}></div>
        </div>
      </div>
      {isActive && <NavList onClick={navHandler} />}
    </>
  );
};

export default Navbar;
