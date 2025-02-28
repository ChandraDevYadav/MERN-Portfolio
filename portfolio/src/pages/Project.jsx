import React from 'react'
import Layout from '../components/Layout/Layout'
import ProjectGrid from '../components/ProjectGrid'
import Contact from './../components/Contact';

const Project = () => {
    return (
        <Layout title={'My Portfolio - All Project'}>
            <div>
                <ProjectGrid />
                <Contact />
            </div>
        </Layout>
    )
}

export default Project