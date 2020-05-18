import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

//header styles
import "./styles/header.css"


const Header = ({ siteTitle }) => (
  <header className="header">
    
    
      <h1 className="logo-heading">
          <Link className="logo-link" to='/'
          activeStyle={{color: `tomato` }}
          >
           WB
           </Link>
      </h1>
    
    
    <div className="navigation"
      style={{
        margin: `0 auto`,
        marginLeft: `12rem`,
        maxWidth: 960,
        // padding: `1.45rem 1.0875rem`,
        padding: `1rem 0 0 0`,
        // border: `1px solid black`,
      }}
    >
      <h2 className="nav-heading" style={{ 
          display: `inline-block`
          }}>
        <Link className="nav-link" to='/posts'
              activeStyle={{color: `tomato` }}>
          Posts
        </Link>
      </h2>

      <h2 className="nav-heading" style={{ display: `inline-block`,
          marginLeft: `2rem` }}>
        <Link className="nav-link" to='/about'
              activeStyle={{color: `tomato` }}

              >
          About
        </Link>
      </h2>

      <h2 className="nav-heading" 
          style={{ 
            display: `inline-block`,
            marginLeft: `2rem`
          }}>
        <Link className="nav-link" to='/contact'
              activeStyle={{color: `tomato` }}
              >
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
