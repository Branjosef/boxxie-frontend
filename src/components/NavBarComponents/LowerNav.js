import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/lowerNavBar.css'

function LowerNav() {
    return (
        <div className='navbar lowerNavBar'>
           <button>Search By Department </button>
           <div className="navbar__search">
                <input
                    className="navbar__searchInput"
                    type="text" 
                    placeholder="Search" />
                <i className='material-icons'>Search</i>
            </div>
            <div> 
                <Link to='/checkout'>
                    Basket
                </Link>
            </div>
        </div>
    )
}

export default LowerNav
