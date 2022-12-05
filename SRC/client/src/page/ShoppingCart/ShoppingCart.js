import React, { useState } from "react";
import { AuthNav } from "../../components/AuthNav/AuthNav";
import { ModalPayment } from "../../components/ModalPayment/ModalPayment";
import { useAuth0 } from "@auth0/auth0-react";
import { Loading } from "../../components/Loading/Loading";
import { IsAuthenticate } from "../../components/IsAuthenticate/IsAuthenticate";
import { useSelector, useDispatch } from "react-redux";
import { addCartSlice, removeCartSlice } from "../../store/slices/cart/cartSlice";
import { getCart, removeCart } from "../../services/cartManager";


export const ShoppingCart = () => {
  const [state, setState] = useState(false)
  const { cart: { cart }, auth: { users } } = useSelector((state) => state)
  const dispatch = useDispatch()
  const { isLoading, isAuthenticated } = useAuth0()

  console.log(users);
  return (
    <div>
      {
        isLoading ? <Loading />
          :
          !isAuthenticated ?
            < IsAuthenticate /> :

            <div>
              <AuthNav path={'signup'} onAuth={false} text={'LogOut'} />
              <div className="container-fluid m-0 p-0">
                <table className="table table-striped table-bordered table-dark mt-5 mb-0">
                  <thead>
                    <tr>
                      <th className="text-center" scope="col">#</th>
                      <th scope="col">Destino</th>
                      <th className="text-center" scope="col">Precio</th>
                      <th className="text-center" scope="col">Opciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      cart?.map((item, index) => {
                        return <tr className="w-100" key={index}>
                          <th className="text-center" style={{ width: '7%' }} scope="row">{index + 1}</th>
                          <th className="" style={{ width: '70%' }}>{item.product.name}</th>
                          <th className="text-center" style={{ width: '15%' }}>{item.product.price}</th>
                          <th className="text-center" style={{ width: '15%' }}>
                            <button
                              onClick={() => {
                                removeCart(item.id)

                                getCart(users._id).then(resCart => {
                                  console.log(resCart);
                                  dispatch(addCartSlice(resCart))
                                })

                              }}
                              className="btn btn-danger p-0 m-0 pe-2 px-2">Borrar</button>
                          </th>
                        </tr>
                      })
                    }
                  </tbody>
                </table>
                <table className="table table-dark">
                  <tbody>
                    <tr >
                      <th>TOTAL</th>
                      <th className="text-end pe-5">{
                        cart?.reduce((pre, cur) => {
                          return pre + cur.product.price
                        }, 0)
                      }</th>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="text-center mt-5">
                <button onClick={() => setState(true)} className="btn btn-primary" >Procesar Pago</button>
              </div>

              <ModalPayment open={state} action={setState} />
            </div>

      }
    </div>
  )
}
