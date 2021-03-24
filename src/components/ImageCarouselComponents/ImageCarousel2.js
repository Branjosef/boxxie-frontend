import React from "react"; 

const Carousel = () => {

    var myTimer; 
    var slideIndex = 1; 
    var mySlides; 

    const plusSlides = (n) => {
        clearInterval(myTimer)
    }   

    const currentSlide = (n) => {
        clearInterval(myTimer);
        myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
        showSlides(slideIndex = n);
    }

    const showSlides = (n) => {
        var i;
        var mySlides = <div className="mySlides"></div>
        var slides = mySlides

        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
    }

        return ( 
            <div className="Carousel">
                <div className="slideshow-container">
                    <div className="slideshow-inner">
                        <div className="mySlides fade">
                            <img src="" alt="photo1" />
                            <div className="text">Caption 1</div>
                        </div>
                        <div className="mySlides fade">
                            <img src="" alt="photo2" />
                            <div className="text">Caption 2</div>
                        </div>
                        <div className="mySlides fade">
                            <img src="" alt="photo3" />
                            <div className="text">Caption 3</div>
                        </div>
                        <div className="mySlides fade">
                            <img src="" alt="photo4" />
                            <div className="text">Caption 4</div>
                        </div>
                        <div className="mySlides fade">
                            <img src="" alt="photo5" />
                            <div className="text">Caption 5</div>
                        </div>
                    </div>

                    <a className="prev" onClick={plusSlides(-1)}>&#10094;</a>
                    <a className="next" onClick={plusSlides(1)}>&#10095;</a>

                    <div  className="dots">
                        {/*style="text-align: center;" */}
                        <span className="dot" onClick={currentSlide(1)}></span>
                        <span className="dot" onClick={currentSlide(2)}></span>
                        <span className="dot" onClick={currentSlide(3)}></span>
                        <span className="dot" onClick={currentSlide(4)}></span>
                        <span className="dot" onClick={currentSlide(5)}></span>
                    </div>
                </div>
            </div>
        )
}

export default Carousel; 