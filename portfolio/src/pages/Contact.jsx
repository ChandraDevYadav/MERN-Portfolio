import React from 'react'
import Layout from '../components/Layout/Layout'
import ContactForm from '../components/ContactForm'
import ContContact from '../components/ContContact'

const Contact = () => {
    return (
        <Layout title={'My Portfolio - Contact Us'}>
            <div>
                <ContactForm />
                <ContContact />
            </div>
        </Layout>
    )
}

export default Contact