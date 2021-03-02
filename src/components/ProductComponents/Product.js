import React from 'react'
import '../../styles/product.css'

let ratingStar = 'https://static.vecteezy.com/system/resources/thumbnails/000/380/404/small/Basic_Elements__28175_29.jpg'

function Product({id, title, image, price, rating, description}) {
    return (
        <div className='product'>
            <img 
                src={image} 
            />
            <div className='product__info'>
                <p><strong>{title}</strong></p>
                <p>{description}</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='product__rating'>
                    {Array(rating).fill().map((_, i) => (
                        <img className="product__rating" src={ratingStar} alt="rating star" />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Product
