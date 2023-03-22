import React from 'react'
import './checkoutproducts.css'
import DeleteIcon from '@mui/icons-material/Delete';
import { useCartState } from '../context/cartState';

function CheckoutProducts({ id, image, description, price, rating }) {
    const [{ basket }, dispatch] = useCartState()
    const formatter = new Intl.NumberFormat('en-US', {
        currency: 'INR',
    })
    const removeItem = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
    return (
        <div className="checkoutproduct">
            <div className='checkoutproductMainContianer'>
                <div className='checkoutproductContianer'>
                    <img className='checkoutproductImg' src={image} alt="" />

                    <div className='checkotproductInfo'>
                        <div>
                            <p className='checkoutproductDesc'>
                                {description.length < 60 ? description : `${description.slice(0, 60)}...`}
                            </p>
                            <div className='productRatingBox'>
                                {
                                    Array(rating).fill().map(() => <p className='productRating'>⭐</p>)
                                }
                            </div>
                            <p className='checkoutproductStock'>In Stock</p>
                            <p className='checkoutproductShipping'>Eligible  for FREE Shipping</p>
                            <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png" alt="" />
                        </div>
                        {/* Product Price */}
                        <div className='productPriceCart'>
                            <strong className='productCurrency'>₹</strong>
                            <strong className='productPrice'>
                                {formatter.format(price)}
                            </strong>
                        </div>

                    </div>
                </div>
                <DeleteIcon onClick={removeItem} className='checkoutproductDelete' />
            </div>
            <hr />
        </div>

    )
}

export default CheckoutProducts