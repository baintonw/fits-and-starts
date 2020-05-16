import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

//My Components
import Post from "../components/post"
//My Containers
import PostContainer from "../containers/PostContainer"

//Styles
import "../components/styles/postContainer.css"

//Images imported using webpack
import WorldTrade from "../images/world-trade.jpg"

const IndexPage = () => (
  
  <Layout>
      

      {/* children */}
      <SEO title="Home" />
      <h1 style={{
        fontSize: `6rem`,
        marginBottom: `4rem`,
        marginTop: `-17rem`,
        marginLeft: `-20rem`,
        color: `antiquewhite`,
        width: `100%`,
      }}>Fits and Starts</h1>
      <p style={{
        marginTop: `12rem`
      }}>Welcome to my blog.</p>
      <p>Here are some of my posts: </p>
      <img src={WorldTrade} />

      {/* Posts */}
      <div className="postContainer">
        <Post imageUrl={WorldTrade} postTitle="Will's FIRST Post">

        </Post>
        <Post postTitle="Will's SECOND Post"></Post>
        <Post postTitle="Will's Third Post"></Post>
      </div>
      
    
    


    
  </Layout>
)

export default IndexPage
