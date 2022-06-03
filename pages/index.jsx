import Head from 'next/head';

import {
  LandingSlide,
  TimeLines,
  Mission,
  Footer,
  Registers,
  JoinClub,
  AboutTeam,
  Questions,
  ClubOperations
} from '../components';

export default function Home() {
  return (
    <>
      <Head>
        <title>CPMC DYPCOE</title>
        <meta
          name="CPMC-DYPCOE"
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

      <LandingSlide />
      <TimeLines />
      <Mission />
      <ClubOperations />
      <JoinClub />
      <Registers />
      <AboutTeam />
      <Questions />
      <Footer />
    </>
  );
}
