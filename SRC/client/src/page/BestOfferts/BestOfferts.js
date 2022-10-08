import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../store/slices/cart/cartSlice";

export const BestOfferts = () => {

	const dispatch = useDispatch()

	const cart = useSelector((state) => state.cart)

	console.log(cart);

	return (
		<div className="offert" id="offers">
			<div className="title-best">
				<h2>Nuestras Mejores Ofertas</h2>
			</div>

			<div className="card-container">
				<div className="travels">

					<div className="card text-center d-flex m-3 flex-column shadow-lg cards"
						style={{ transition: 'all 600ms ease', width: '400px' }}>
						<img className="card-img-top" src="img/rep-dom.jpg" alt="" />
						<div className="text-Card card-body">
							<h3 className="country">Cuba</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
							</p>
							<br />
							<span><strong>46546546</strong></span>


							<div className="travel-opcion">
								<button className="btn btn-success w-75 p-0 mb-2"
									onClick={() => {
										dispatch(addCart({id: 1, price: 2500, name: 'Cuba'}))
									}}
								>Reservar</button>
								{/* <a href="/#">Ver mas detalles</a> */}
								<Link className="btn btn-success w-75 p-0" to={'/detailsTravel'} >Ver mas detalles</Link>
							</div>
						</div>
					</div>
					<div className="card text-center d-flex flex-column m-3 shadow-lg cards "
						style={{ transition: 'all 600ms ease', width: '400px' }}>
						<img className="card-img-top" src="img/rep-dom.jpg" alt="" />
						<div className="text-Card card-body">
							<h3 className="country">Russia</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
							</p>
							<br />
							<span><strong>5464654</strong></span>
						</div>

						<div className="travel-opcion">
							<button className="btn btn-success w-75 p-0 mb-2" onClick={() => console.log('asdajg')}>Reservar</button>
							{/* <a href="/#">Ver mas detalles</a> */}
							<Link className="btn btn-success w-75 p-0" to={'/detailsTravel'} >Ver mas detalles</Link>
						</div>
					</div>

				</div>

				<div className="video-offert">
					<div className="video-card">
						<video src="videos/video-offert.mp4" autoPlay loop controls muted></video>
					</div>
				</div>

			</div>
		</div >
	)
}