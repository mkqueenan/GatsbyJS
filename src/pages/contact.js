import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage = () => {
    return (
        <div>
            <Layout>
                <Head title="Contact" />
                <h1>Contact</h1>
                <p>
                    You can find me on{' '}
                    <a
                        href="https://www.github.com/mkqueenan/"
                        target="_blank noopener norefferrer"
                    >
                        GitHub
                    </a>{' '}
                    or{' '}
                    <a
                        href="https://www.linkedin.com/in/mkqueenan/"
                        target="_blank noopener norefferrer"
                    >
                        LinkedIn
                    </a>
                    . Or, if you prefer, feel free to e-mail me:{' '}
                    <a href="mailto:kevin@queenan.dev">here</a>.
                </p>
            </Layout>
        </div>
    )
}

export default ContactPage
