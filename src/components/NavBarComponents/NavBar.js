import React from 'react'
import '../../styles/navBar.css'
import { Link } from 'react-router-dom'
import UpperNav from './UpperNav'
import LowerNav from './LowerNav'

function NavBar() {
    return (
        <>
        <UpperNav />
        <LowerNav />
        </>
    )
}

export default NavBar
