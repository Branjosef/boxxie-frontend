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
            <div>
                <span className="upperNavBar__options">
                    Option 1 
                </span>
                <span className="upperNavBar__options">
                    Option 2
                </span>
                <span className="upperNavBar__options">
                    Option 3
                </span>
                <span className="upperNavBar__options">
                    Option 4
                </span>
                <span className="upperNavBar__options">
                    Option 5
                </span>
            </div>
            <div>
                <Link to='/login'>Sign In</Link>
            </div>
            
        </div>
    )
}

export default UpperNav
