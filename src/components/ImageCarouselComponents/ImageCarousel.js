import React from 'react'
import '../../styles/imageCarousel.css'
function ImageCarousel() {

  const productAds = {
    electronics: "https://blessingstelecom.com/img/developerimg/choco_blessingstelecom_20200113100659_db/mebase/CustomSectionStyle/Images/original_200219061202_5e4cd1b2c5eb3.jpg", 
    womenClothes: "https://previews.123rf.com/images/appolobay/appolobay1602/appolobay160200009/54518183-collection-collage-of-women-s-clothing.jpg", 
    menClothes: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80", 
    kitchenItems: "https://thumbor.thedailymeal.com/2sdT7VpTJlM1CzO699XtYxOSZb4=/870x565/filters:focal(1001x496:1002x497)/https://www.thedailymeal.com/sites/default/files/story/2018/iStock-536685288.jpg", 
    kidToys: "https://s7d1.scene7.com/is/image/mattelsites/FP_PLP_Banner_Mobile_GJW91_LL_PPGarden?wid=640&hei=400", 
    gamingSystems: "https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", 
    womenShoes: "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80",
    menShoes: "https://i.pinimg.com/564x/e0/73/bc/e073bc85e58afb35b1d058ba70e3776d.jpg"
}
    return (
      <div className="image__carousel">
        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://blessingstelecom.com/img/developerimg/choco_blessingstelecom_20200113100659_db/mebase/CustomSectionStyle/Images/original_200219061202_5e4cd1b2c5eb3.jpg" 
              className="d-block w-100 h-100" alt="electronics"/>
              <div className="carousel-caption d-none d-md-block">
                <h5><strong>Electronics</strong></h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://previews.123rf.com/images/appolobay/appolobay1602/appolobay160200009/54518183-collection-collage-of-women-s-clothing.jpg" 
              className="d-block w-100 h-100" alt="Women Clothing"/>
              <div className="carousel-caption d-none d-md-block">
                <h5>Women Fashion</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
              className="d-block w-100 h-100" alt="Men Clothing"/>
              <div className="carousel-caption d-none d-md-block">
                <h5>Men Fashion</h5>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://thumbor.thedailymeal.com/2sdT7VpTJlM1CzO699XtYxOSZb4=/870x565/filters:focal(1001x496:1002x497)/https://www.thedailymeal.com/sites/default/files/story/2018/iStock-536685288.jpg" 
              className="d-block w-100 h-100" alt="Kitchen Appliances"/>
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://s7d1.scene7.com/is/image/mattelsites/FP_PLP_Banner_Mobile_GJW91_LL_PPGarden?wid=640&hei=400" 
              className="d-block w-100 h-100" alt="Kid's Toys"/>
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://images.unsplash.com/photo-1519415943484-9fa1873496d4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80" 
              className="d-block w-100 h-100" alt="Women Shoes"/>
              <div className="carousel-caption d-none d-md-block">
                <h5>Women Shoes</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://images.unsplash.com/photo-1612902376491-7a8a99b424e8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njd8fHNob2VzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" 
              className="d-block w-100 h-100 card-img" alt="Men Shoes"/>
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
              className="d-block w-100 h-100" alt="Gaming"/>
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </div>
            </div>
          </div>
        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
    )
}

export default ImageCarousel
