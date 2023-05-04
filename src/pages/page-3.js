import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ThirdPage = () => (
    <Layout>
        <h1>Hi from twefx2rf13fpage</h1>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export const Head = () => <Seo title="Page two" />

export default ThirdPage
