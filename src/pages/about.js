import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const AboutPage = () => (
  <Layout>
    <h1>About</h1>
    <p>My name is Rafael and this is a Gatsby tutorial.</p>
    <p>
      Click here to <Link to="/contact">contact me.</Link>
    </p>
  </Layout>
)

export default AboutPage
