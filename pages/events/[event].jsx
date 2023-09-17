import style from './event.module.css';
import { Footer, Navbar } from '../../components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import EventDetails from '../../components/EventDetails/EventDetails';

const Event = () => {
  const router = useRouter();
  const event_id = router.query.event;

  return (
    <>
      <Head>
        <title className={style.title}>CPMC </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <EventDetails event_id={event_id} />
      <Footer />
    </>
  );
};

export default Event;
