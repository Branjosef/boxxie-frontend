import React from 'react'
import '../../styles/Dashboard.css'
import Main from "../WelcomePageComponents/Main"
// favorite, favorite_border

let departments = [
    { id: 1, name: "Clothes" },
    { id: 2, name: "Automotive" },
    { id: 3, name: "Computers" },
    { id: 4, name: "Toys" }
]

class Dashboard extends React.Component {


    render() {
        return (
            <div>
                <div className="sidebar">
                    <p>Departments</p>
                </div>
                <Main />

            </div>
        )
    }
}

export default Dashboard



