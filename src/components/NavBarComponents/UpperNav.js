import React from 'react'
import { Link } from 'react-router-dom'
import logo from './boxxie.png'
import '../../styles/upperNavBar.css'
import Search from './Search'

function UpperNav() {

  function onClickHandler() {
    let x = document.getElementById("navbar")
    if (x.className === "navbar") {
      x.className += " responsive"
    } else {
      x.className = "navbar"
    }
  }
  return (
    <div className='navbar' id="navbar">
      <Link to='/'>
        <img src={logo} alt='boxxie' className="branding-header" />
      </Link>
      <Search />
      <div className="navbar-right">
        <Link to='/checkout'><i className='material-icons nav-icon'>shopping_cart</i></Link>
        <Link to='/login'><i className="material-icons nav-icon">person </i></Link>
        <Link to='#' class="hamburger-icon" onClick={onClickHandler}><i className="fa fa-bars"></i></Link>
      </div>

    </div>
  )
}

export default UpperNav
