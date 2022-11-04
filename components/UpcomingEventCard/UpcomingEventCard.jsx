import React from 'react'
import styles from './UpcomingEventCard.module.css'
import Link from 'next/link';
import classes from '../LandingSlide/LandingSlide.module.css';
import Image from 'next/image';

const UpcomingEventCard = (props) => {
    const name = props.data.name;
    const nameArr = name.split(' ');
    return (
        <>
            <div className={styles.event}>
                <div className={styles.blue_box}></div>
                <div className={styles.content_container}>
                    <div className={styles.content}>
                        {nameArr.length > 1 ?
                            <h1 className={styles.name}>{nameArr[0]} <span className={styles.red}>{nameArr[1]}</span></h1> :
                            <h1 className={styles.name}> <span className={styles.red}>{props.data.name}</span></h1>
                        }
                        {props.data.subTitle ? <p className={styles.desc}>{props.data.subTitle}</p> : null}
                        <div style={{display:'flex', gap:'2rem'}}>
                        {props.data.toBeHeldOn ? <p className={styles.date}> DATE - <span className={styles.blue}>{props.data.toBeHeldOn}</span> </p> : null}
                        {props.data.timing ? <p className={styles.date}> Timing - <span className={styles.blue}>{props.data.timing}</span> </p> : null}
                        </div>
                        {props.data.registrationLink?
                        <span className={styles.link}>
                            <Link href={props.data.registrationLink}>
                                <button className={classes.btn} style={{ margin: '0' }}>
                                    <span className={classes.span}>REGISTER HERE!!</span>
                                    <svg viewBox="0 0 13 10" height="10px" width="15px">
                                        <path d="M1,5 L11,5"></path>
                                        <polyline points="8 1 12 5 8 9"></polyline>
                                    </svg>
                                </button>
                            </Link>
                        </span>:
                        null
                        }
                    </div>
                    <div className={styles.xyz}>
                        <Image alt="xyz" src={props.data.img} width={270} height={250} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpcomingEventCard
