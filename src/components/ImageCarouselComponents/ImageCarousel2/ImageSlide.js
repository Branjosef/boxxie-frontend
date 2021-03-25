import React from "react"; 

const ImageSlide = ({ url }) => { 
    const style = { 
        backgroundImage: `url(${url})`, 
        bacogroundSize: 'cover', 
        backgroundPosition: 'center'
    }; 

    return (
        <div className="image-slide" style={style}></div>
    )
}

export default ImageSlide