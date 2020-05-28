import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

//header styles
import "./styles/header.css"


const Header = ({ siteTitle }) => (
  <header className="header">
      <h1 className="logo-heading">
          <Link className="logo-link" to='/'
            activeStyle={{color: `dodgerblue` }}
          >
            WB
          </Link>
      </h1>
    
    
    <div className="navigation">
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
