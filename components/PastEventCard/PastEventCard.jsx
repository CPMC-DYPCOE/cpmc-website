import styles from './PastEventCard.module.css';
import Link from 'next/link';
import classes from '../LandingSlide/LandingSlide.module.css';
import Image from 'next/image';

const PastEventCard = (props) => {
  const name = props.data.event_name;
  const nameArr = name?.split(' ');
  var words = name?.split(' ');

  var firstPart = '';
  var secondPart = '';

  if (words?.length > 1) {
    firstPart = words.slice(0, -1).join(' ');

    secondPart = words[words.length - 1];
  } else {
    secondPart = name;
  }

  return (
    <div className={styles.event}>
      <div className={styles.blue_box}></div>
      <div className={styles.content_container}>
        <div className={styles.content}>
          {nameArr?.length > 1 ? (
            <h1 className={styles.name}>
              {firstPart} <span className={styles.red}>{secondPart}</span>
            </h1>
          ) : (
            <h1 className={styles.name}>
              {' '}
              <span className={styles.red}>{props.data.event_name}</span>
            </h1>
          )}
          {props.data.subTitle ? <p className={styles.desc}>{props.data.caption}</p> : null}
          <p style={{ fontWeight: '600' }} className={styles.date}>
            <span className={styles.red}>{props.data.event_date}</span>
          </p>

          {/* {props.data.heldOn ? <p className={styles.date}> Held On - <span className={styles.blue}>{props.data.heldOn}</span> </p> : null} */}
          {/* {props.data.ViewEventDetailsLink ? ( */}
          <span className={styles.link}>
            <Link href={{ pathname: `/events/${props.data._id}` }}>
              <button className={classes.btn} style={{ margin: '0' }}>
                <span className={classes.span}>VIEW EVENT</span>
                <svg viewBox="0 0 13 10" height="10px" width="15px">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </button>
            </Link>
          </span>
          {/* ) : null} */}
        </div>
      </div>
    </div>
  );
};

export default PastEventCard;
