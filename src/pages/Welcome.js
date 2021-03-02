import React from 'react';
import ImageCarousel from '../components/ImageCarouselComponents/ImageCarousel'
import NavBar from '../components/NavBarComponents/NavBar'
import Product from '../components/ProductComponents/Product';
import '../styles/welcome.css'


const products = { 
  product1: {
    id: 12345,
    title: "PlayStation 5 Game Console", 
    image: 'https://i1.wp.com/freepngimages.com/wp-content/uploads/2020/07/Playstation-5-games-console-transparent-background-png-image.png?fit=1000%2C1000', 
    description: "Home video game console developed by Sony Interactive Entertainment",
    price: '$499.00', 
    sale: "",
    saleInfo: "",
    rating: 5
  }, 
  product2: {
    id: 54321, 
    title: "Apple iPhone 12", 
    image: 'https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/Apple-iPhone-12/Blue/Apple-iPhone-12-Blue-frontimage.png', 
    description: "Standard model with a 6.1-inch screen and dual camera. Equipped with triple-lens cameras and premium designs",
    price: '$799.00', 
    sale: "",
    saleInfo: "", 
    rating: 5
  }, 
  product3: {
    id: 24680, 
    title: "Apple MacBook Pro", 
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16touch-space-gallery1-201911?wid=4000&hei=3072&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1573165109376",
    description: "2.3GHz 8‑core 9th‑generation Intel Core i9 processor, Turbo Boost up to 4.8GHz",
    price: '$2,799.00', 
    sale: "",
    saleInfo: "", 
    rating: 5
  }, 
}
 
class Welcome extends React.Component {

  render() {
    return (
      <div className="home">
        <ImageCarousel />
        <div className="product__container">
          <div className="product__row">
            <Product
              id='12345'
              title= "PlayStation 5 Game Console"
              image= 'https://i1.wp.com/freepngimages.com/wp-content/uploads/2020/07/Playstation-5-games-console-transparent-background-png-image.png?fit=1000%2C1000'
              description= "Home video game console developed by Sony Interactive Entertainment"
              price= {499.00}
              sale=""
              saleInfo= ""
              rating={5} 
            />
            <Product 
              id='54321'
              title= "Apple iPhone 12"
              image= 'https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/Apple-iPhone-12/Blue/Apple-iPhone-12-Blue-frontimage.png'
              description= "Standard model with a 6.1-inch screen and dual camera. Equipped with triple-lens cameras and premium designs"
              price={799.00}
              sale= ""
              saleInfo= ""
              rating={5}
            />
            <Product 
              id='24680'
              title= "Apple MacBook Pro"
              image= "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16touch-space-gallery1-201911?wid=4000&hei=3072&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1573165109376"
              description="2.3GHz 8‑core 9th‑generation Intel Core i9 processor, Turbo Boost up to 4.8GHz"
              price={2,799.00}
              sale=""
              saleInfo=""
              rating={5}
            />
          </div>
          {/* <div className="product__row">
            <Product 
                id='09876'
                title= "NUMENN 5 Tier Bookshelf"
                image= "https://images-na.ssl-images-amazon.com/images/I/71cRNrHdiYL._AC_SL1500_.jpg"
                description="Tall bookcase shelf storage organizer, modern book shelf for bedroom, living room and home office, vintage"
                price={89.00}
                sale=""
                saleInfo=""
                rating={4}
              />
          </div> */}
        </div>
        
      </div>
    )
  }
}



export default (Welcome)