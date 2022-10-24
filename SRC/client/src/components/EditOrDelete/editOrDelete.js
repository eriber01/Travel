import { Button } from "bootstrap";
import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { EditOrDeleteModal } from "./EditOrDeleteModal";
export const EditOrDelete = () => {
    const [state, setState] = useState({
        isOpen: false,
        validate: Boolean,
        name: '',
        item: {}
    })

    const dispatch = useDispatch()

    const { travels } = useSelector(state => state.travels)
    console.log(travels);

    return (
        <div>

            <div className="d-flex flex-wrap justify-content-evenly" >

                {travels.map(item => (

                    <div key={item._id} className="card m-4 rounded pb-4" style={{ transition: 'all 600ms ease', width: '350px' }}>
                        <img className="card-img-top" src={item.imgURL} alt="" />
                        <div className="card-body d-flex flex-column text-center">
                            <div className="d-flex flex-column mb-2">
                                <label className="text-start" htmlFor="destino">Destino</label>
                                <input className="form-control" value={item.destino} type="text" name="destino" id="" />
                            </div>

                            <div className="d-flex flex-column mb-2">
                                <label className="text-start" htmlFor="description">Descripcion</label>
                                <input className="form-control" value={item.descripcion} type="text" name="description" id="" />
                            </div>

                            <div className="d-flex flex-column mb-2">
                                <label className="text-start" htmlFor="precio">Precio</label>
                                <input min={0} className="form-control" value={item.precio} type="number" name="precio" id="" />
                            </div>

                            <div className="d-flex flex-column mb-2">
                                <label className="text-start" htmlFor="img">Imagen</label>
                                <input className="form-control" type={"file"} name="img" id="" />
                            </div>
                        </div>

                        <div className="d-flex flex-wrap justify-content-evenly align-items-center mt-3">
                            <button
                                className="btn btn-info text-white"
                                onClick={() => setState({ isOpen: true, name: item.destino, validate: true })}
                            >
                                Editar
                            </button>
                            <button
                                className="btn btn-danger text-white"
                                onClick={() => setState({ isOpen: true, name: item.destino, validate: false, item })}
                            >
                                Borrar
                            </button>
                        </div>
                    </div>
                ))
                }
            </div>
            <EditOrDeleteModal state={state} action={setState} />
        </div>
    )
}