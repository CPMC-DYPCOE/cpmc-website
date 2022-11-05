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

const event = () => {
    const router = useRouter()
    const event = router.query.event

    const mastersTalk = [mastersTalkPic1, mastersTalkPic2, mastersTalkPic3, mastersTalkPic4, mastersTalkPic5, mastersTalkPic6, mastersTalkPic7]

    const currentEvent = []
    const eventName =''
    switch (event) {
        case 'masters-talk':
            currentEvent = mastersTalk
            eventName = 'MASTERS TALK'
            break;
    }


    return (
        <>
            <Head>
                <title className={style.title}>CPMC {eventName}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <h1 className={style.heading}>{eventName}</h1>
            <div className={style.eventImagesDiv}>
                {currentEvent.map((img) => {
                    return (
                        <div>
                            <Image className={style.image} src={img} alt={event} height={400} width={600} />
                        </div>
                    )
                })}
            </div>
            <Footer />
        </>
    )
}

export default event
