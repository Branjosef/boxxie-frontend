import React from 'react'
import { Link } from 'react-router-dom'
import logo from './boxxie.png'
import '../../styles/upperNavBar.css'

function UpperNav() {
    return (
        <div className='navbar'>
            <Link to='/'>
                {/* slogan = marking header */}
                {/* <i className='material-icons black'>home</i> */}
                <img src={logo} alt='boxxie' className="branding-header" />
            </Link>

            <div className="nav-search">
                <i className='material-icons'>search</i>
                <input
                    className="nav-search-input"
                    type="text"
                />
            </div>

            <Link to='/checkout'><i className='material-icons nav-icon'>shopping_cart</i></Link>
            <Link to='/login'><i className="material-icons nav-icon">person </i></Link>

        </div>
    )
}

export default UpperNav
