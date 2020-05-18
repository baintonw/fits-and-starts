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
    <Link to='/'>
      <h1 style={{ 
              position: `absolute`,
              top: `.6rem`,
              left: `2.2rem`,
              fontSize: `4.5rem`
              }}>
           WB
        </h1>
    </Link>
    
    <div
      style={{
        margin: `0 auto`,
        marginLeft: `12rem`,
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
        <Link to='/posts'
              style={{ 
                display: `inline-block`,
                textDecoration: `none`, 
                color: `black` 
              }}>
          Posts
        </Link>
      </h2>

      <h2 style={{ display: `inline-block`,
          marginLeft: `2rem` }}>
        <Link to='/about' 
              style={{ 
              display: `inline-block`, 
              textDecoration: `none`, 
              color: `black` }}>
          About
        </Link>
      </h2>

      <h2 style={{ display: `inline-block`,
            marginLeft: `2rem`
          }}>
        <Link to='/contact'
              style={{ 
              display: `inline-block`, 
              textDecoration: `none`, 
              color: `rgba(0,0,0,.7)`
               }}>
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
