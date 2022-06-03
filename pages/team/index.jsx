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
      </Head>
      <Navbar />
      <TeamPage />
      <Footer />
    </>
  );
};

export default Team;
