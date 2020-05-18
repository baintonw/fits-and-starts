import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

//My Components
import Post from "../components/post"
//My Containers
// import PostContainer from "../containers/PostContainer"

//Styles
import "../components/styles/postContainer.css"


const Title = (props) => {
  return(
     <div style=
            {{
                position: `absolute`,
                bottom: `3rem`,
                fontSize: `4rem`,
                color: `snow`,
                width: `40%`,
                // border: `1px solid black`,
                paddingLeft: `2rem`,
                lineHeight: `1`,
                // marginTop: `10rem`
            }}
      >
          <p>Fits<br></br>and<br></br> Starts</p>
          
          
          



      </div>
  )
}


// console.log(`graphql: `, graphql)

const IndexPage = ({ data }) => (
  
  <Layout>
    {/* <div> Hello {data.site.siteMetadata.title}</div> */}
   {/* children */}
      <SEO title="Home" />
      <div className="backgroundImage" 
           style={{
            backgroundImage: `url(../images/church-mars-martines.jpg)`,
            backgroundSize: `cover`,
            width: `93.5vw`,
            height: `82vh`,
            margin: `0 auto`,
      }}>
      <Title name={data.site.siteMetadata.title}></Title>

        

       </div>
  </Layout>
)

//GraphQL query
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`


export default IndexPage
