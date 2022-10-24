import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../store/slices/cart/cartSlice";
// import { CmsManager } from "../../services/CmsManager";

export const BestOfferts = () => {

	const dispatch = useDispatch()

	const { travels } = useSelector(state => state.travels)

	console.log(travels);
	return (
		<div className="offert" id="offers">
			<div className="title-best">
				<h2>Nuestras Mejores Ofertas</h2>
			</div>

			<div className="card-container">
				<div className="travels">

					{
						travels.map(item => (
							<div key={item._id} className="card text-center d-flex m-3 flex-column shadow-lg cards"
								style={{ transition: 'all 600ms ease', width: '400px' }}>
								<img className="card-img-top" src={item.imgURL} alt="" />
								<div className="text-Card card-body">
									<h3 className="country">{item.destino}</h3>
									<p>
										{item.descripcion}
									</p>
									<br />
									<span><strong>{item.precio}</strong></span>


									<div className="travel-opcion">
										<button className="btn btn-success w-75 p-0 mb-2"
											onClick={() => {
												dispatch(addCart({ id: item._id, price: item.precio, name: item.destino }))
											}}
										>Reservar</button>
										{/* <a href="/#">Ver mas detalles</a> */}
										<Link className="btn btn-success w-75 p-0" to={'/detailsTravel'} >Ver mas detalles</Link>
									</div>
								</div>
							</div>
						))
					}

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