import React from 'react'
import CheckoutProducts from '../checkoutproducts/CheckoutProducts';
import { useCartState } from '../context/cartState';
import Subtotal from '../subtotal/Subtotal';
import './checkout.css'

function Checkout() {
    const [{ basket }, dispatch] = useCartState();
    return (
        <>
            <div className='checkout'>
                {
                    basket?.length == 0 ? <div className='checkoutContainer checkoutContainer2'>
                        <h1 className='checkoutHeading'>Your Amazon Cart is empty.</h1>
                        <p className='checkoutPara'>Continue shopping.</p>
                    </div>
                        :
                        <div className='checkoutContainer'>
                            <h1 className='checkoutHeading'>Shopping Cart</h1>
                            <hr />
                            {
                                basket.map(item => (
                                    <CheckoutProducts
                                        id={item.id}
                                        image={item.image}
                                        description={item.description}
                                        price={item.price}
                                        rating={item.rating}
                                    />
                                ))
                            }
                        </div>
                }
                {
                    basket?.length == 0 ? ""
                        :
                        <div className='checkoutRight'>
                            <Subtotal />
                        </div>
                }

            </div>
        </>
    )
}

export default Checkout