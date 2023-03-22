import React from 'react'
import { useCartState } from '../context/cartState'
import './Product.css'

function Product({ id, image, description, price, rating }) {
    const formatter = new Intl.NumberFormat('en-US', {
        currency: 'INR',
    })

    const [{ basket }, dispatch] = useCartState()

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                description: description,
                price: price,
                rating: rating,
                image: image,
            }
        })
    }

    return (
        <div className='product'>
            {/* Product Image */}
            <img className='productImg' src={image} alt="" />
            <div className='productInfo'>
                {/* Product Description */}
                <p className='productDesc'>
                    {description.length < 50 ? description : `${description.slice(0, 50)}...`}
                </p>
                {/* Product Rating section */}
                <div className='productRatingBox'>
                    {
                        Array(rating).fill().map(() => <p className='productRating'>⭐</p>)
                    }
                </div>
                {/* Product Price */}
                <div className='productPriceCart'>
                    <strong className='productCurrency'>₹</strong>
                    <strong className='productPrice'>
                        {formatter.format(price)}
                    </strong>
                </div>
                <button onClick={addToBasket} className='productCart'>Add to Cart</button>
            </div>
        </div>
    )
}

export default Product