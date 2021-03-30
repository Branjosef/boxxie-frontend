import React from "react"; 
import Arrow from "./Arrow";
import ImageSlide from './ImageSlide';


// source = https://dev.to/willamesoares/how-to-build-an-image-carousel-with-react--24na

class Carousel extends React.Component{
    constructor(props){
      super(props); 

      this.state = { 
        currentImageIndex: 0
      }

      this.nextSlide = this.nextSlide.bind(this); 
      this.previousSlide = this.previousSlide.bind(this); 
    }

    componentDidMount(){
        this.interval = setInterval(this.nextSlide, 6000)

        //source: https://stackoverflow.com/questions/45982244/adding-setinterval-to-componentdidmount-in-react
    }

    componentWillUnmount(){

      clearInterval(this.interval); 
    }

    sampleImage = "https://blessingstelecom.com/img/developerimg/choco_blessingstelecom_20200113100659_db/mebase/CustomSectionStyle/Images/original_200219061202_5e4cd1b2c5eb3.jpg"
    
    productAds = [
             "https://blessingstelecom.com/img/developerimg/choco_blessingstelecom_20200113100659_db/mebase/CustomSectionStyle/Images/original_200219061202_5e4cd1b2c5eb3.jpg"
            , 
            "https://previews.123rf.com/images/appolobay/appolobay1602/appolobay160200009/54518183-collection-collage-of-women-s-clothing.jpg"
            , 
            "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            , 
            "https://thumbor.thedailymeal.com/2sdT7VpTJlM1CzO699XtYxOSZb4=/870x565/filters:focal(1001x496:1002x497)/https://www.thedailymeal.com/sites/default/files/story/2018/iStock-536685288.jpg"
            , 
             "https://s7d1.scene7.com/is/image/mattelsites/FP_PLP_Banner_Mobile_GJW91_LL_PPGarden?wid=640&hei=400"
            , 
            "https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    ]

    productAdsWithDescription = [
      { title: "Electronics", 
        image: "https://blessingstelecom.com/img/developerimg/choco_blessingstelecom_20200113100659_db/mebase/CustomSectionStyle/Images/original_200219061202_5e4cd1b2c5eb3.jpg"
      }, 
      {
        title: "Women Clothes", 
        image: "https://previews.123rf.com/images/appolobay/appolobay1602/appolobay160200009/54518183-collection-collage-of-women-s-clothing.jpg"
      }, 
      {
        title: "Men's Clothing", 
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      }, 
      {
        title: "Kitchen Items", 
        image: "https://thumbor.thedailymeal.com/2sdT7VpTJlM1CzO699XtYxOSZb4=/870x565/filters:focal(1001x496:1002x497)/https://www.thedailymeal.com/sites/default/files/story/2018/iStock-536685288.jpg"
      }, 
      {
        title: "Kid's Toys", 
        image: "https://s7d1.scene7.com/is/image/mattelsites/FP_PLP_Banner_Mobile_GJW91_LL_PPGarden?wid=640&hei=400"
      }, 
      {
        title: "Gaming", 
        image: "https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      }
]

    previousSlide () {
      const lastIndex = this.productAds.length - 1; 
      const { currentImageIndex } = this.state; 
      const shouldResetIndex = currentImageIndex === 0; 
      const index = shouldResetIndex ? lastIndex : currentImageIndex - 1; 

      this.setState({
        currentImageIndex: index
      }); 
    }

    nextSlide () { 
      const lastIndex = this.productAds.length - 1; 
      const { currentImageIndex } = this.state; 
      const shouldResetIndex = currentImageIndex === lastIndex; 
      const index = shouldResetIndex ? 0 : currentImageIndex + 1; 

      this.setState({
        currentImageIndex: index
      })
    }

    render(){
        return (
            <div id="carousel">
              <Arrow 
                direction="left" 
                clickFunction={ this.previousSlide } 
                glyph="&#9664;" />

              <ImageSlide url= {this.productAds[this.state.currentImageIndex] } />

              <Arrow 
                direction="right" 
                clickFunction={ this.nextSlide } 
                glyph="&#9654;" />
            </div>
        )
    }
}

export default Carousel; 