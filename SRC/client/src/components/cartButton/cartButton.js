import React from 'react'
import Nav from 'react-bootstrap/Nav'
import { useSelector } from 'react-redux'


const CartButton = () => {
    const cartData = useSelector(state => state.cart)

    console.log(cartData.cart.length);
    return (
        <div>
            <Nav.Link href='/cart'><i className="fas fa-shopping-cart fa-lg text-bg-dark"></i></Nav.Link>

            <div className='boder bg-dark position-absolute' style={{ width: '150px', height: '150px' }}>


            </div>
        </div>
    )
}

export default CartButton