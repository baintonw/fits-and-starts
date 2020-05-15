/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "./styles/layout.css"

const Layout = ({ children }) => {
  // queries site for site metadata, found in config 
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  console.log('children: ', children)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />

      <div
        style={{
         
          margin: `0 25rem`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
          
        }}
      >
        <main>{children}</main>

       
          
          {/* , Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a> */}
        
      </div>

      
      <Footer></Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
