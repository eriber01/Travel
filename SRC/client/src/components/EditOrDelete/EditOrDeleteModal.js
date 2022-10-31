import React from 'react'
import { useDispatch } from 'react-redux'
import { CmsManager } from '../../services/CmsManager'
import { deleteTravels, getTravels } from '../../store/slices/travels/travelSlice'

export const EditOrDeleteModal = ({ state, action }) => {

    const dispatch = useDispatch()

    const taskDelete = async (item) => {
        await CmsManager(item, 'deleteTravels', null, null)

        await CmsManager(null, 'getTravels', null, null)
            .then(res => {
                dispatch(getTravels(res.data))
            })
        // dispatch(deleteTravels(item._id))
    }

    const taskUpdate = async (item) => {
        console.log(item);
        await CmsManager(item, 'updateTravels', null, null)

        await CmsManager(null, 'getTravels', null, null)
            .then(res => {
                dispatch(getTravels(res.data))
            })

    }

    console.log(state);

    return (
        <div>
            {state.isOpen ?

                <div className="d-flex justify-content-center align-items-center modal bg-dark bg-opacity-10" >

                    <div className="d-flex flex-column text-center border rounded bg-white" style={{ width: '600px', height: '300px' }}>
                        <div className="d-flex justify-content-between  ps-5 p-2 border-bottom">
                            <h3>Confirmacion</h3>
                            <button
                                onClick={() => action(false)}
                                className="btn border">X</button>
                        </div>

                        <div className="d-flex flex-column justify-content-center border h-50">
                            <p className="">{`Estas seguro de que desea ${state.validate ? "Actualizar" : "Borrar"}`}</p>
                            <p>{`El Viaje a ${state.name}`}</p>
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
                                    state.validate ?
                                        taskUpdate(state.item) :
                                        taskDelete(state.item)
                                    action(false)
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
