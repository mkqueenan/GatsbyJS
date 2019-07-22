import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => {
    return (
        <div>
            <Layout>
                <h1>Hello.</h1>
                <h2>
                    I'm Kevin, a full-stack software engineer living in
                    beautiful Dallas, TX.
                </h2>
                <p>
                    Need a developer? <Link to="/contact">Contact</Link> me.
                </p>
                <p>
                    Musings on tech? My <Link to="/blog">blog</Link> is here.
                </p>
            </Layout>
        </div>
    )
}

export default IndexPage
