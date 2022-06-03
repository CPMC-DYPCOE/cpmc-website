import Head from 'next/head';
import Image from 'next/image';
import { Navbar, ContactPage, Footer } from '../../components';
import styles from '../../styles/Home.module.css';

const Contact = () => {
  return (
    <>
      <Head>
        <title>CPMC CONTACT</title>
        <meta
          name="CPMC-CONTACT"
          content="Competetive Programming
and Mentorship Club.
DYPCOE, Pune."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <ContactPage />
      <Footer />
    </>
  );
};

export default Contact;
