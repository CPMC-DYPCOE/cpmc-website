import Head from 'next/head';
import Image from 'next/image';
import { EventsPage, Footer, Navbar } from '../../components';
import styles from '../../styles/Home.module.css';

const Events = () => {
  return (
    <>
      <Head>
        <title>CPMC EVENTS</title>
        <meta
          name="CPMC-EVENTS"
          content="Competetive Programming
and Mentorship Club.
DYPCOE, Pune."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <EventsPage />
      <Footer />
    </>
  );
};

export default Events;