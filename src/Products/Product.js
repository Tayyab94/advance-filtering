import React from 'react'
import "./Product.css"

const Product = ({ products }) => {

    return (
        <>
            <div className='card-container'>
                {
                    products
                }
                {/* {
                    products.map((item, index) => (<Card key={index} img={item.img}
                        title={item.title}
                        star={item.star}
                        reviews={item.reviews}
                        prevPrice={item.prevPrice}
                        newPrice={item.newPrice} />))
                } */}

            </div>
        </>
    )
}

export default Product
