import React from 'react'
import '../../styles/navBar.css'
import { Link } from 'react-router-dom'
import UpperNav from './UpperNav'
import LowerNav from './LowerNav'
import CategoryDropDown from '../../components/NavBarComponents/CategoryDropDown'

function NavBar() {
    return (
        <>
        <UpperNav />
        <CategoryDropDown />
        {/* <LowerNav /> */}
        </>
    )
}

export default NavBar
