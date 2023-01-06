import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCartSlice } from "../../store/slices/cart/cartSlice";
import { addCart, getCart } from "../../services/cartManager";
import { useAuth0 } from "@auth0/auth0-react";

export const BestOfferts = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { user } = useAuth0()

	const { travels: { travels }, auth: { users } } = useSelector(state => state)
	console.log(travels);
	console.log(users);
	return (
		<div className="offert" id="offers">
			<div className="title-best">
				<h2>Nuestras Mejores Ofertas</h2>
			</div>

			<div className="card-container">
				<div className="travels">

					{
						travels?.map(item => (
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
												addCart({ id: item._id, users, user })
												getCart(users._id).then(resCart => {
													dispatch(addCartSlice(resCart))
												})
											}}
										>Reservar</button>
										<Link className="btn btn-success w-75 p-0"
											to={`/detailsTravel/${item._id}`}
										>
											Ver mas detalles
										</Link>
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