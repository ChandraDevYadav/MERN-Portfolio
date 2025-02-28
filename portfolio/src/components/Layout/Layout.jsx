import React from 'react'
import { Helmet } from "react-helmet"
import { Toaster } from "react-hot-toast"
import Footer from './Footer'
import Navbar from './Navbar'
import ScrollToTop from './ScrollToTop'

const Layout = ({ children, title, description, keywords, author }) => {
    return (
        <div class="">
            <Helmet>
                <meta charSet='utf-8' />
                <meta name='description' content={description} />
                <meta name='keywords' content={keywords} />
                <meta name='author' content={author} />
                <title>{title}</title>
            </Helmet>
            <Navbar />
            <main className=''>
                <Toaster />
                {children}
            </main>
            <ScrollToTop />
        </div>
    )
}

Layout.defaultProps = {
    title: 'My Portfolio - Know More',
    description: 'MERN Stack Project',
    keywords: 'mern, react, node, mongodb',
    author: 'CodeHustler'
}

export default Layout