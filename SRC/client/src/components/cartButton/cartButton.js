import React from 'react'
import Nav from 'react-bootstrap/Nav'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const CartButton = () => {
    const cartData = useSelector(state => state.cart)

    console.log(cartData);
    //className='text-decoration-none text-white'
    return (
        <div>
            <Link className='text-decoration-none text-white d-flex align-items-center' to='/cart'>
                <i className="fas fa-shopping-cart fa-lg text-bg-dark"></i>
                <span className='p-2'>{cartData.cart.length}</span>
            </Link>
        </div>
    )
}

export default CartButton