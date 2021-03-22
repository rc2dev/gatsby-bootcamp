import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => (
  <Layout>
    <Head title="About" />
    <h1>About</h1>
    <p>My name is Rafael and this is a Gatsby tutorial.</p>
    <p>
      Click here to <Link to="/contact">contact me.</Link>
    </p>
  </Layout>
)

export default AboutPage
