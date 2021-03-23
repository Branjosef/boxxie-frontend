import React from 'react' 
import '../../styles/CategoryDropDown.css'

class CategoryDropDown extends React.Component { 
    render(){ 
        return (
            <div className="upperBar">
            <button className='department__button categories'>Search By Department 
            <i className='material-icons arrow'>play_arrow</i>
            </button>
                    {/* <ul className="categories">
                        <li>Clothes</li>
                        <li>Technology</li>
                        <li>Kitchen Appliance</li>
                    </ul> */}
            </div>
        )
    }
}

export default CategoryDropDown