import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addCart } from "../../services/cartManager";
import { CmsManager } from "../../services/CmsManager";
import { getTravelDetails } from "../../store/slices/travels/travelSlice";
import { AuthNav } from "../AuthNav/AuthNav";
import './details.css'
export const DetailsTravel = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { user } = useAuth0()

  useEffect(() => {

    CmsManager(id, 'getUniqueTravels', null, null)
      .then(res => {
        console.log(res);
        dispatch(getTravelDetails(res))
      })
  }, [dispatch, id])


  const { travels: { travelDetails }, auth: { users } } = useSelector(state => state)

  setTimeout(() => {
    const leftTransition = document.querySelector('.image-travel')
    leftTransition?.classList?.remove('leftTransition')

    const rightTransition = document.querySelector('.details-travel')
    rightTransition?.classList?.remove('rightTransition')
  }, 300)

  return (
    <div>

      <AuthNav />

      {travelDetails.map((item, index) => {

        return <div key={index} className="details-container mt-5 mb-5">

          <div className="details">
            <div className="image-travel leftTransition">
              <img src={item.imgURL} alt="" />
            </div>

            <div className="details-travel rightTransition">

              <h1> {item.destino} </h1>

              <p className="mb-5">
                {item.descripcion}
              </p>

              <div className="mt-5 mb-5">
                <span >
                  {item.precio}
                </span>

              </div>
            </div>
          </div>

          <button
            className="btn btn-success mt-3"
            onClick={() => {
              addCart({ id: item._id, users, user })
            }}
          >Reservar el Viaje</button>
        </div>
      })
      }
    </div>
  )
}