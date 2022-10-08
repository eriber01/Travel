import React from "react";
import { Link } from "react-router-dom";
import { AuthNav } from "../AuthNav/AuthNav";
import './details.css'
export const DetailsTravel = () => {

  setTimeout(() => {
    const leftTransition = document.querySelector('.image-travel')
    leftTransition.classList.remove('leftTransition')

    const rightTransition = document.querySelector('.details-travel')
    rightTransition.classList.remove('rightTransition')
  }, 300)
  //details-travel rightTransition
  return (
    <div>
      {/*       <nav className="detailsNav">
        <a href="/" className="btn-home">HOME</a>
      </nav> */}
      <AuthNav />

      <div className="details-container mt-5 mb-5">

        <div className="details">
          <div className="image-travel leftTransition">
            <img src="img/rep-dom.jpg" alt="" />
          </div>

          <div className="details-travel rightTransition">

            <h1> Titulo </h1>

            <p className="mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, quod magnam animi, vitae unde nam voluptatibus exercitationem veritatis possimus veniam numquam soluta, natus nostrum facere sapiente consequatur blanditiis adipisci cupiditate?
            </p>

            <div className="mt-5 mb-5">
              <span >
                Precio: 9999
              </span>

            </div>
          </div>
        </div>

        <button class="btn btn-success mt-3" href="/addShoppingCart/<%= DataTravel._id %> ">Reservar el Viaje</button>
      </div>
    </div>
  )
}