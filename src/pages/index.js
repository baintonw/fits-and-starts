import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    {/* children */}
    <SEO title="Home" />
    <h1>Will's Blog</h1>
    <p>Welcome to my blog.</p>
    <p>Here are some of my posts: </p>
    
  </Layout>
)

export default IndexPage
