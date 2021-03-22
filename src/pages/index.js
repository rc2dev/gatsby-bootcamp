import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const IndexPage = () => (
  <Layout>
    <Head title="Home" />
    <h1>Hello!</h1>
    <h2>I'm Rafael, and this is me learning Gatsby.</h2>
    <p>
      Need a developer? <Link to="/contact">Contact me</Link>
    </p>
  </Layout>
)

export default IndexPage
