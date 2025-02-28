import React from 'react'
import PostList from './PostList'
import Layout from '../components/Layout/Layout'
import HeroSec from '../components/Layout/HeroSec'
import ServiceMain from '../components/MySpecialties/ServiceMain'
import About from '../components/About'
import ResumeTab from '../components/ResumeTab'
import Portfolio from '../components/Portfolio'
import Testimonial from '../components/Testimonial'
import Marquee from '../components/Marquee'
import Blog from '../components/Blog'
import Pricing from '../components/Pricing'
import Contact from '../components/Contact'

const Home = () => {
    return (
        <Layout title={'My Portfolio - Know More'}>
            <div className="container h-screen bg-[#FFE9D9] ">
                <HeroSec />
                <ServiceMain />
                <About />
                <ResumeTab />
                <Portfolio />
                <Testimonial />
                <Marquee />
                <Blog />
                <Pricing />
                <Contact />
                {/* <PostList /> */}
            </div>
        </Layout>
    )
}

export default Home