import React from 'react'
import Layout from '../components/Layout/Layout'
import Contact from '../components/Contact'
import BlogCard from '../components/BlogCard'

const Blog = () => {
    return (
        <Layout title={'My Portfolio - Blog'}>
            <div className=''>
                <BlogCard />
                <Contact />
            </div>
        </Layout>
    )
}

export default Blog