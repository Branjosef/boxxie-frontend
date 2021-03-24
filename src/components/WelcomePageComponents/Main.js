import React from "react" 
import '../../styles/main.css'
import ImageCarousel from "../ImageCarouselComponents/ImageCarousel"

class Main extends React.Component{ 
    render(){
        return (
            <div className="main">
                <div className="body">
                    <h1>Clothes<i className='material-icons boxxie-purple favorite'>favorite_border</i></h1>
                    <ImageCarousel />
                </div>
            </div>
        )
    }
}

export default Main; 