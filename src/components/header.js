import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      backgroundColor: `rgba(f,f,f,0)`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      {/* <h1 style={{ margin: 0, display: `inline-block` }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1> */}
      <h2 style={{ 
          display: `inline-block`
          }}>
        <Link style={{ 
          display: `inline-block`,
          textDecoration: `none`, 
          color: `black` }}>
          Posts
        </Link>
      </h2>

      <h2 style={{ display: `inline-block`,
          marginLeft: `2rem` }}>
        <Link style={{ 
          display: `inline-block`, 
          textDecoration: `none`, 
          color: `black` }}>
          About
        </Link>
      </h2>

      <h2 style={{ display: `inline-block`,
            marginLeft: `2rem`
          }}>
        <Link style={{ 
          display: `inline-block`, 
          textDecoration: `none`, 
          color: `black` }}>
          Contact
        </Link>
      </h2>
      

    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
