import React from 'react'
import { Link } from 'react-router-dom'
import logo from './boxxie.png'
import '../../styles/upperNavBar.css'

function UpperNav() {
    return (
        <div className='navbar'>
            <Link to ='/'>
                {/* slogan = marking header */}
                {/* <i className='material-icons black'>home</i> */}
                <img src={logo} alt='boxxie' className="branding-header"/>
            </Link>

            {/* <div className="navbar__search">
                <input
                    className="navbar__searchInput"
                    type="text" 
                    placeholder="Search" />
                <i className='searchIcon material-icons black' height>search</i>
            </div> */}
            <div> 
                <Link to='/checkout'>
                <i className='material-icons boxxie-purple'>shopping_cart</i>
                </Link>
            </div>
            <div>
                <Link to='/login'>Sign In</Link>
            </div>
            
        </div>
    )
}

export default UpperNav
