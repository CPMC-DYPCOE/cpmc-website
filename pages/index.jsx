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
  ClubOperations,
  EventSlider
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
      </Head>

      <LandingSlide />
      <EventSlider/>
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
