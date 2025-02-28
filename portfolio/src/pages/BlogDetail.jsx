import React from 'react'
import Layout from '../components/Layout/Layout'
import BlogDetailCom from '../components/BlogDetailCom'
import Contact from '../components/Contact'
import Blog from '../components/Blog'

const BlogDetail = () => {
    return (
        <Layout>
            <div className=''>
                <BlogDetailCom />
                <div className='pb-20'>
                    <Blog />
                </div>
                <Contact />
            </div>
        </Layout>
    )
}

export default BlogDetail