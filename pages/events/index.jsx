import Head from 'next/head';
import Image from 'next/image';
import { Footer, Navbar } from '../../components';
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
      <div className="flex h-[90vh] w-[100vw] flex-col items-center justify-center gap-10 font-Paytone text-[#fff]">
        <div className=" flex flex-col items-center px-[50px] py-[50px] shadow-cde lg:px-[100px] lg:py-[100px]">
          <h1 className="text-[30px] lg:text-[50px]">
            Looking for <span className="text-[#f32053]"> Events</span> ?
          </h1>
          <h1 className="text-[16px] lg:text-[30px]">
            We are planning some <span className="text-[#f32053]">Surprises</span> for you.
          </h1>
          <h1 className="text-[16px] lg:text-[30px]">
            Stay <span className="text-[#f32053]">Tuned !</span>
          </h1>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Events;
