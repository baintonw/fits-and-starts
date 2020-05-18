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



const IndexPage = () => (
  
  <Layout name="Hello">
   {/* children */}
      <SEO title="Home" />
      <div className="backgroundImage" 
           style={{
            backgroundImage: `url(../images/church-mars-martines.jpg)`,
            backgroundSize: `cover`,
            width: `100vw`,
            height: `100vh`
      }}>
        {/* <h1 style={{
                // fontSize: `6rem`,
                // marginBottom: `4rem`,
                // marginTop: `-17rem`,
                // marginLeft: `-20rem`,
                // color: `antiquewhite`,
                // width: `100%`,
            }}>
          Fits and Starts
        </h1>  */}
       </div>
  </Layout>
)

export default IndexPage
