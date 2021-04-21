import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => (
  <Layout>
    <Head title="Contact" />
    <h1>Contact</h1>
    <p>
      Send me a message{" "}
      <a
        href="https://twitter.com/"
        target="_blank"
        rel="noreferrer"
      >
        on Twitter
      </a>
      .
    </p>
  </Layout>
)

export default ContactPage
