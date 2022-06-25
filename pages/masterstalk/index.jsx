import Head from 'next/head';
import Image from 'next/image';
import { Footer, MastersTalk, Navbar } from '../../components';
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
      </Head>
      <Navbar />
      <MastersTalk />
      <Footer />
    </>
  );
};

export default Join;
