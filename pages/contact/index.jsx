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
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600&family=Paytone+One&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Navbar />
      <ContactPage />
      <Footer />
    </>
  );
};

export default Contact;
