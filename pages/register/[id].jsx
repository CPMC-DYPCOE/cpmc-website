import React from 'react'
import { useRouter } from 'next/router'
import { Footer, Navbar } from '../../components'
import Head from 'next/head'
import EventRegistration from '../../components/EventRegistration/EventRegistration'


const Event = () => {
    const router = useRouter()
    const event_id = router.query.id

    return (
        <>
            <Head>
                <title>Register </title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
                <EventRegistration event_id={event_id}/>
            <Footer />
        </>
    )
}

export default Event
