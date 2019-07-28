import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
    return (
        <div>
            <Layout>
                <Head title="About" />
                <h1>About Me</h1>
                <p>
                    I'm a recent graduate from the College of Engineering at
                    SMU. I love to snowboard and I have a gorgeous German
                    Shepherd named Lux whom I love very much!
                </p>
            </Layout>
        </div>
    )
}

export default AboutPage
