import React from 'react'
import './subtotal.css'
import CheckCircle from '@mui/icons-material/CheckCircle';
import { useCartState } from '../context/cartState';
import { getBasketTotal } from '../context/reducer';

function Subtotal() {
    const formatter = new Intl.NumberFormat('en-US', {
        currency: 'INR',
    })
    const [{ basket }, dispatch] = useCartState()
    return (
        <div className='subtotal'>
            <div className='subtotalParaBox'>
                <CheckCircle className='subtotalCheck' />
                <p className='subtotalPara'>
                    Your order is eligible for FREE Delivery.<br /><span className='subtotalParaSecond'>Select this option at checkout. Details</span></p>
            </div>

            <p className='subtotalItem'>Subtotal ({basket?.length} items) : <strong className='subtotalPrice'>
                ₹{formatter.format(getBasketTotal(basket))}
            </strong>
            </p>
            <div className='subtotalParaBox subtotalGiftBox'>
                <input className='subtotalCheckBox' type="checkbox" />
                <p className='subtotalGift'>This order contains a gift</p>
            </div>
            <button className='productCart subtotalBuyBtn'>Proceed to Buy</button>
        </div>
    )
}

export default Subtotal