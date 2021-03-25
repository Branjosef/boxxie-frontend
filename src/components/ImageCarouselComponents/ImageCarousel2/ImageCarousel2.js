import React from "react"; 
import ImageSlide from './ImageSlide'

class Carousel extends React.Component{
    productAds = [
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

    render(){
        return (
            <div id="carousel">
               <ImageSlide url= {"https://blessingstelecom.com/img/developerimg/choco_blessingstelecom_20200113100659_db/mebase/CustomSectionStyle/Images/original_200219061202_5e4cd1b2c5eb3.jpg"} />
            </div>
        )
    }
}

export default Carousel; 