import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart, paymentCart } from "../../services/cartManager";
import { addCartSlice } from "../../store/slices/cart/cartSlice";


export const ModalPayment = ({ open, action }) => {
    const dispatch = useDispatch()

    const { cart: { cart }, auth: { users } } = useSelector(state => state)

    console.log(users);

    return (
        <div>
            {open ?

                <div className="d-flex justify-content-center align-items-center modal bg-dark bg-opacity-10" >

                    <div className="d-flex flex-column text-center border rounded bg-white" style={{ width: '600px', height: '300px' }}>
                        <div className="d-flex justify-content-between  ps-5 p-2 border-bottom">
                            <h3>Confirmar Pago</h3>
                            <button
                                onClick={() => action(false)}
                                className="btn border">X</button>
                        </div>

                        <div className="d-flex flex-column justify-content-center border h-50">
                            <p className="">Estas seguro de que deseas Confirmar el Pago</p>
                            <p>El monto total es de: {
                                cart?.reduce((prev, curr) => {
                                    return prev + curr.product.price
                                }, 0)
                            }</p>
                        </div>

                        <div className="d-flex align-items-center justify-content-end h-25">
                            <button
                                onClick={() => action(false)}
                                className="btn btn-danger text-white me-3"
                            >
                                Cancelar
                            </button>

                            <button
                                className="btn btn-success text-white me-3"
                                onClick={() => {
                                    paymentCart(cart)
                                    getCart(users._id).then(resCart => {
                                        dispatch(addCartSlice(resCart))
                                    })
                                }}
                            >
                                Aceptar
                            </button>
                        </div>
                    </div>
                </div> : null
            }
        </div>

    )
}