import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { CmsManager } from "../../services/CmsManager";
import { getTravelDetails } from "../../store/slices/travels/travelSlice";
import { AuthNav } from "../AuthNav/AuthNav";
import './details.css'
export const DetailsTravel = () => {
  const { id } = useParams()
  const dispatch = useDispatch()

  console.log(id);

  useEffect(() => {
    // const getUniqueTravels = async (id) => {

    CmsManager(id, 'getUniqueTravels', null, null)
      .then(res => {
        console.log(res);
        dispatch(getTravelDetails(res))
      })
    // }
  }, [dispatch, id])


  const { travelDetails } = useSelector(state => state.travels)

  console.log(travelDetails);
  setTimeout(() => {
    const leftTransition = document.querySelector('.image-travel')
    leftTransition?.classList?.remove('leftTransition')

    const rightTransition = document.querySelector('.details-travel')
    rightTransition?.classList?.remove('rightTransition')
  }, 300)

  //   {
  //     "_id": "6361a0b16cee20397ea0f329",
  //     "destino": "asdasdasd3",
  //     "descripcion": "asdasdads",
  //     "precio": 119,
  //     "imgURL": "http://res.cloudinary.com/eriber/image/upload/v1667342513/q2kk2oqkxfs2xcrtiydz.jpg",
  //     "public_id": "q2kk2oqkxfs2xcrtiydz",
  //     "__v": 0
  // }
  return (
    <div>

      <AuthNav />

      {travelDetails.map((item, index) => {


        return <div className="details-container mt-5 mb-5">

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

          <button className="btn btn-success mt-3" href="/addShoppingCart/<%= DataTravel._id %> ">Reservar el Viaje</button>
        </div>
      })
      }
    </div>
  )
}