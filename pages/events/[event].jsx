import fs from 'fs';
import path from 'path';
import style from './event.module.css';
import { Footer, Navbar } from '../../components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import EventDetails from '../../components/EventDetails/EventDetails';
import { useEffect, useState } from 'react';
import { API_HOST } from '../../utils/utils';

const Event = ({ imagePaths }) => {
  const router = useRouter();
    const event_id = router.query.event;
    const [eventDetails, setEventDetails] = useState({

    })

  const getEvents = async () => {
    console.log(event_id);
    try {
      fetch(`${API_HOST}/api/events/eventDetails`, {
        method: 'POST',
        body: JSON.stringify({ event_id: event_id }),
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': ''
        }
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data.event_details[0]);
          setEventDetails(data.event_details[0]);
        });
    } catch (error) {
      console.log(error);
      alert('Something Went Wrong');
    }
  };

  useEffect(() => {
    if (event_id) {
      getEvents();
    }
  }, [event_id]);
  return (
    <>
      <Head>
        <title className={style.title}>CPMC </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <EventDetails event_id={event_id} />
      {imagePaths.map((src, index) => {
        return (
          <div key={index}>
            <img src={src} alt={`Image ${index}`} width={400} height={300} />
            <div></div>
          </div>
        );
      })}
      <Footer />
    </>
  );
};

export default Event;

export async function getServerSideProps(eventDetails) {
  const event = "master_talk";

  const folderPath = path.join(process.cwd(), `public/images/events/${event}`);

  try {
    const imageFiles = fs.readdirSync(folderPath);

    const imagePaths = imageFiles.map((fileName) => `/images/events/${event}/${fileName}`);

    return {
      props: {
        imagePaths
      }
    };
  } catch (error) {
    console.error(error);

    return {
      props: {
        imagePaths: null
      }
    };
  }
}
