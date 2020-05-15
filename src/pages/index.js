import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

//My Components
import Post from "../components/post"

const IndexPage = () => (
  <Layout>
    {/* children */}
    <SEO title="Home" />
    <h1>Will's Blog</h1>
    <p>Welcome to my blog.</p>
    <p>Here are some of my posts: </p>
    {/* Posts */}
    <Post postTitle="Will's FIRST Post"></Post>
    <Post postTitle="Will's SECOND Post"></Post>
    <Post postTitle="Will's Third Post"></Post>


    
  </Layout>
)

export default IndexPage
