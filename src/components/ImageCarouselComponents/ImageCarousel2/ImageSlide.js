import React from "react"; 
import '../../../styles/imageCarousel2.css'

const ImageSlide = ({ url }) => { 
    const styles = { 
        backgroundImage: `url(${url})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center'
    }; 

    return (
        <div className="image-slide">
            <img src={url}  />
        </div>
    )
}

export default ImageSlide