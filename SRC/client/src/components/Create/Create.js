import React from "react";
import { useDispatch } from "react-redux";
import { CmsManager } from "../../services/CmsManager";
import { ManageForm } from "../../services/manageForm";
import { getTravels } from "../../store/slices/travels/travelSlice";

export const Create = () => {

    const { state, handleState, reset } = ManageForm()
    const dispatch = useDispatch()
    const handleEvent = (e) => {
        e.preventDefault()
        CmsManager(state, 'create', e, reset)

        CmsManager(null, 'getTravels', null, null)
            .then(res => {
                dispatch(getTravels(res.data))
            })
    }

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center mt-5">

            <div className="border rounded p-2 mb-5 h-100" style={{ width: '400px', /* height: '500px' */ }}>
                <div className=" d-flex justify-content-center align-items-center">
                    <form onSubmit={(e) => handleEvent(e)} action="">
                        <div className="d-flex flex-column mb-2 mt-2">
                            <label className="mb-2" htmlFor="destino">Destino</label>
                            <input
                                onChange={({ target: { value } }) => handleState({ target: 'destino', value: value })}
                                className="form-control" type="text" name="destino" />
                        </div>
                        <div className="d-flex flex-column">
                            <label className="mb-2" htmlFor="descripcion">Descripcion</label>
                            <textarea
                                onChange={({ target: { value } }) => handleState({ target: 'descripcion', value: value })}
                                className="form-control" name="descripcion" id="" cols="20" rows="5"></textarea>
                        </div>
                        <div className="d-flex flex-column mb-2">
                            <label className="mb-2" htmlFor="precio">Precio</label>
                            <input
                                onChange={({ target: { value } }) => handleState({ target: 'precio', value: parseFloat(value) })}
                                className="form-control" min={0} type="number" name="precio" id="" />
                        </div>

                        <div className="d-flex flex-column mb-2">
                            <label className="mb-2" htmlFor="img">Imagen</label>
                            <input
                                onChange={(e) => handleState({ target: 'img', value: e.target.files[0] })}
                                className="form-control" type={"file"} name="img" id="" />
                        </div>

                        <div className="text-center mb-5 mt-4">
                            <button
                                className="btn btn-primary"
                            >Crear Viaje</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}