import React, { useEffect, useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const IndexPage = () => {
  const [fetchedData, setFetchedData] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchData = () => {
    console.log("Updating...")

    fetch("https://random-data-api.com/api/dessert/random_dessert?size=15")
    .then(response => response.json())
    .then(json => {
      console.log(json)
      setFetchedData(json);
      setLoading(false);
    })

    setTimeout(fetchData, 3000);
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello!</h1>
      <h2>I'm Rafael, and this is me learning Gatsby.</h2>
      <p>
        Need a developer? <Link to="/contact">Contact me</Link>
      </p>

      {/*  Calling an API */}
      <hr />
      <p>This are some posts I just fetched from an API:</p>
      {loading ? (
        <p>Loading API data...</p>
      ) : (
        <ul>
          {fetchedData.map(item => {
            return <li key={item.id}>{item.variety}</li>
          })}
        </ul>
      )}
    </Layout>
  )
}

export default IndexPage
