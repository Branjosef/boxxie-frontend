import React from 'react'
import { Link } from 'react-router-dom'

function AdSpace() {
    return (
        <div className="Ad__bar">
            <div className="email__ad">
                <p>
                    Sign up for emails & get extra 25% off! Exclusions apply. <Link to="/login">Sign Up</Link>
                </p>
                <p>
                    Free Shipping with $25 Purchase. <Link>Exclusions & Details</Link>
                </p>
            </div>
            <div className="purchase__ad">

            </div>
        </div>  
    )
}

export default AdSpace
