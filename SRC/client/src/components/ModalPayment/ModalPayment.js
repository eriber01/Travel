import React from "react";


export const ModalPayment = ({ open, action }) => {


    return (
        <div>
            {open ?

                <div className="d-flex justify-content-center align-items-center modal bg-dark bg-opacity-10" >

                    <div className="d-flex flex-column text-center border rounded bg-white" style={{ width: '600px', height: '300px' }}>
                        <div className="d-flex justify-content-between  ps-5 p-2 border-bottom">
                            <h3>Confirmar Pago</h3>
                            <button
                                onClick={() => action(false)}
                                className="btn border">X</button>
                        </div>

                        <div className="d-flex flex-column justify-content-center border h-50">
                            <p className="">Estas seguro de que deseas Confirmar el Pago</p>
                            <p>El monto total es de: 500</p>
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