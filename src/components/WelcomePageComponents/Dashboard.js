import React from 'react' 
import '../../styles/Dashboard.css'
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
                <div className="body"><h1>Clothes<i className='material-icons boxxie-purple favorite'>favorite_border</i></h1></div>


            </div>
        )
    }
}

export default Dashboard



