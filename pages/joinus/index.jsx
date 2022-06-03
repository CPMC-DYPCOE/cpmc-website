import Head from 'next/head';
import Image from 'next/image';
import { Footer, JoinPage, Navbar } from '../../components';
import styles from '../../styles/Home.module.css';

const Join = () => {
  return (
    <>
      <Head>
        <title>CPMC JOIN US</title>
        <meta
          name="CPMC-JOIN US"
          content="Competetive Programming
and Mentorship Club.
DYPCOE, Pune."
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600&family=Paytone+One&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Navbar />
      <JoinPage />
      <Footer />
    </>
  );
};

export default Join;
