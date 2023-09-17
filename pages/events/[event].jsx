import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import style from './event.module.css'
import { Footer, Navbar } from '../../components'
import Head from 'next/head'

import mastersTalkPic1 from '../../components/assets/Events/MastersTalk/pic1-min.JPG'
import mastersTalkPic2 from '../../components/assets/Events/MastersTalk/pic2-min.JPG'
import mastersTalkPic3 from '../../components/assets/Events/MastersTalk/pic3-min.JPG'
import mastersTalkPic4 from '../../components/assets/Events/MastersTalk/pic4-min.JPG'
import mastersTalkPic5 from '../../components/assets/Events/MastersTalk/pic5-min.JPG'
import mastersTalkPic6 from '../../components/assets/Events/MastersTalk/pic6-min.JPG'
import mastersTalkPic7 from '../../components/assets/Events/MastersTalk/pic7-min.JPG'
import EventDetails from '../../components/EventDetails/EventDetails'

const Event = () => {
    const router = useRouter()
    const event_id = router.query.event

    const mastersTalk = [mastersTalkPic1, mastersTalkPic2, mastersTalkPic3, mastersTalkPic4, mastersTalkPic5, mastersTalkPic6, mastersTalkPic7]

    return (
        <>
            <Head>
                <title className={style.title}>CPMC </title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
                <EventDetails event_id={event_id}/>
            <Footer />
        </>
    )
}

export default Event
