import Head from 'next/head';
import Image from 'next/image';
import { Footer, Navbar, TeamPage } from '../../components';
import styles from '../../styles/Home.module.css';

const Team = () => {
  return (
    <>
      <Head>
        <title>CPMC TEAM</title>
        <meta
          name="CPMC-TEAM"
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
      <TeamPage />
      <Footer />
    </>
  );
};

export default Team;
