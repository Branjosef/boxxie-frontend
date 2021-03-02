import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/lowerNavBar.css'

function LowerNav() {
    return (
        <div className='navbar lowerNavBar'>
           <button className='department__button'>Search By Department 
           <i className='material-icons arrow'>play_arrow</i>
           </button>
           <div className="navbar__search">
                <input
                    className="navbar__searchInput"
                    type="text" 
                    placeholder="Search" />
                <i className='searchIcon material-icons black' height>search</i>
            </div>
            <div> 
                <Link to='/checkout'>
                <i className='material-icons boxxie-purple'>shopping_cart</i>
                </Link>
            </div>
        </div>
    )
}

export default LowerNav
