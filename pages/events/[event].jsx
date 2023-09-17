import fs from 'fs';
import path from 'path';
import style from './event.module.css';
import { Footer, Navbar } from '../../components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import EventDetails from '../../components/EventDetails/EventDetails';
import { useEffect, useState } from 'react';
import { API_HOST } from '../../utils/utils';
import Image from 'next/image';
const Event = ({ imagePaths }) => {
  const router = useRouter();
  const event_id = router.query.event;
  console.log(imagePaths)
  
  return (
    <>
      <Head>
        <title className={style.title}>CPMC </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <EventDetails event_id={event_id} />
        <h1 className={style.Imageheading}>Memories</h1>
      <div className={style.imagesDiv}>
        {imagePaths?.map((src, index) => {
          return (
            <div key={index}>
              <img src={src} alt={`Image ${index}`} width={400} height={300} />
              <div></div>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default Event;

export async function getServerSideProps(context) {
  const { event } = context.params;
  let event_name = '';

  try {
    const response = await fetch(`${API_HOST}/api/events/eventDetails`, {
      method: 'POST',
      body: JSON.stringify({ event_id: event }),
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': ''
      }
    });

    if (!response.ok) {
        return {
            props: {
              imagePaths
            }
          };
    }

    const data = await response.json();
    event_name = data.event_details[0].event_name;
    const folderPath = path.join(process.cwd(), `public/images/events/${event_name}`);
    const imageFiles = fs.readdirSync(folderPath);

    const imagePaths = imageFiles.map((fileName) => `/images/events/${event_name}/${fileName}`);

    return {
      props: {
        imagePaths
      }
    };
  } catch (error) {
    console.error(error);

    return {
      props: {
        imagePaths: []
      }
    };
  }
}
