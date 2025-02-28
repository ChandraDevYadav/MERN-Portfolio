import React from 'react'
import Layout from '../components/Layout/Layout'
import AboutHero from '../components/About/AboutHero'
import MyVision from '../components/About/MyVision'
import AboutTab from '../components/About/AboutTab'
import Testimonial from './../components/Testimonial';
import Marquee from './../components/Marquee';
import Contact from './../components/Contact';

const About = () => {
    return (
        <Layout title={'My Portfolio - About Us'}>
            <div>
                <AboutHero />
                <MyVision />
                <AboutTab />
                <Testimonial />
                <Marquee />
                <Contact />
            </div>
        </Layout>
    )
}

export default About