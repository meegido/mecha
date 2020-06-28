import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Home = () => (
  <Layout>
    <SEO title="Home" />
    <h1
      style={{ maxWidth: `300px`, marginBottom: `1.45rem`, marginTop: `2rem` }}
    >
      Home
    </h1>
  </Layout>
)

export default Home
