import React from 'react'
import Link from 'gatsby-link'
import logo from '../images/logo-drone.svg';
import './Header.css'

const Header = ({ siteTitle }) => (
  <div>
    <div className="Header">
      <div className="HeaderGroup">
        <Link to="/"><img src={logo} width="60" /></Link>
        <Link to="/boston">Boston</Link>
        <Link to="/national-parks">National Parks</Link>
        <Link to="/request">Request</Link>
        <Link to="/buy"><button>Buy</button></Link>
      </div>
    </div>
  </div>
)
export default Header
