import React from 'react' 
import '../../styles/Dashboard.css'
import Main from "../WelcomePageComponents/Main"
// favorite, favorite_border

class Dashboard extends React.Component { 

    render(){
        return (
            <div>
                <div className="sidebar"><h1>Sidebar</h1>
                    <ul className="categories">
                        <li>Clothes</li>
                        <li>Technology</li>
                        <li>Kitchen Appliance</li>
                    </ul>
                </div>
                <Main />

            </div>
        )
    }
}

export default Dashboard



