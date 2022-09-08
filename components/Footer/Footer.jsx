import React from 'react';
import classes from './Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';
import linkedin from '../assets/Social/linkedin.svg';
import instagram from '../assets/Social/instagram.svg';
import twitter from '../assets/Social/twitter.svg';
import gmail from '../assets/Social/gmail.svg';
import logo from '../assets/CPMC.svg';
import insta from '../assets/instagram-new.png';
import linkd from '../assets/linkedin.png';
import github from '../assets/github.png';

const Footer = () => {
  return (
    <>
      <div className={classes.footer_container}>
        <div className={classes.footer}>
          <div className={classes.logotagline}>
            <div className={classes.logo}>
              <Image alt="xyz" src={logo} width={150} height={100} layout="fixed" />
            </div>
            <div className={classes.tagline}>
              <h1 className=" text-center font-Paytone">
                <span className="text-[#f32053]">Coding</span> is{' '}
                <span className="text-[#a8ecf0]">Fun</span> when{' '}
                <span className="text-[#4073ff]">Mentoring</span> is{' '}
                <span className="text-[#a8ecf0]">done !</span>
              </h1>
            </div>
          </div>
          <div className={classes.menu}>
            <h1>Menu</h1>
            <ul className={classes.footer_links}>
              <li className={classes.link_container}>
                <Link href="/">
                  <a className={classes.link}> Home</a>
                </Link>
              </li>
              <li className={classes.link_container}>
                <Link href="/events">
                  <a className={classes.link}> Events</a>
                </Link>
              </li>
              <li className={classes.link_container}>
                <Link href="/joinus">
                  <a className={classes.link}> Join Us</a>
                </Link>
              </li>
              <li className={classes.link_container}>
                <Link href="/team">
                  <a className={classes.link}>Our Team</a>
                </Link>
              </li>
              <li className={classes.link_container}>
                <Link className={classes.link} href="/contact">
                  <a className={classes.link}>Contact</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className={classes.social} style={{ display: 'inline' }}>
            Connect <span className="text-[#f32053]"> With Us</span>
            <div className={classes.socialmedia}>
              <Link
                // target = {'_blank'}
                // rel="noreferrer"
                href={"https://www.linkedin.com/company/cpmc-dypcoe/"}
              // href={"https://www.linkedin.com/company/cpmc-dypcoe/"}
              >
                <a target="_blank" rel="noopener noreferrer">
                  <div className={classes.linkedin}>
                    <div className={classes.innerlink}>
                      <div className={classes.name}>Linkedin</div>
                      <div className={classes.icon}>
                        <Image alt="xyz" src={linkd} width={24} height={24} layout="fixed" />
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
              <Link href="https://www.instagram.com/cpmc_dypcoe/">
                <a target="_blank" rel="noopener noreferrer">
                  <div className={classes.instagram}>
                    <div className={classes.innerinsta}>
                      <div className={classes.name}>Instagram</div>
                      <div className={classes.icon}>
                        <Image alt="xyz" src={insta} width={24} height={24} layout="fixed" />
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
              <Link
                href="https://github.com/Spyware007/CPMC-DYPCOE-OFFICIAL"
              >
                <a target="_blank" rel="noopener noreferrer">
                  <div className={classes.instagram}>
                    <div className={classes.innerinsta}>
                      <div className={classes.name}>GitHub</div>
                      <div className={classes.icon}>
                        <Image alt="xyz" src={github} width={24} height={24} layout="fixed" />
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
        {/* <div className={classes.footer_ruler}></div> */}
        <div className={classes.footer_copyrights}>
          <div className={classes.footer_ruler}></div>
          <p className={classes.footer_copyright}>
            © CPMC-DYPCOE 2022   All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
