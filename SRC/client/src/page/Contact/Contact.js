import React from "react";
import { useDispatch } from "react-redux";
import { sendEmail } from "../../store/slices/email/emailSlice";
// import { toast } from "react-toastify";
import { ManageForm } from "../../services/manageForm";

export const Contact = () => {

    const { state, handleState, reset } = ManageForm()

    const dispatch = useDispatch()



    const handleForm = (e) => {
        e.preventDefault()
        
        e.target.name.value = ''
        e.target.email.value = ''
        e.target.asunto.value = ''
        e.target.mensaje.value = ''
        dispatch(sendEmail(state))
        reset()
    }
    return (

        <div className="container-fluid pt-3 d-flex justify-content-center mt-5" id="contact" style={{ height: '100vh' }}>
            <form onSubmit={(e) => {
                handleForm(e)
            }}
                className="border rounded d-flex flex-column align-items-center" style={{ width: '400px', height: '600px', backgroundColor: '#00d0ffa4' }}>

                <div className="text-center w-75 m-3 mt-5">
                    <h3 className="text-white bg-dark p-2 rounded">Contactenos</h3>
                </div>

                <div className="d-flex flex-column mt-3 w-75">
                    <label htmlFor="name">Nombre Completo</label>
                    <input className="form-control" type="text" name="name" placeholder="Nombre Completo" required
                        value={state.name}
                        onChange={({ target: { value } }) => handleState({ target: 'name', value: value })}
                    />
                </div>

                <div className="d-flex flex-column mt-3 w-75">
                    <label htmlFor="email">Email</label>
                    <input className="form-control" type="email" name="email" placeholder="Email" required
                        value={state.email}
                        onChange={({ target: { value } }) => handleState({ target: 'email', value: value })}
                    />
                </div>

                <div className="d-flex flex-column mt-3 w-75">
                    <label htmlFor="asunto">Asunto</label>
                    <input className="form-control" type="text" name="asunto" placeholder="Asunto" required
                        value={state.asunto}
                        onChange={({ target: { value } }) => handleState({ target: 'asunto', value: value })}
                    />
                </div>

                <div className="d-flex flex-column mt-3 w-75">
                    <label htmlFor="asunto">Escriba su mensaje por favor</label>
                    <textarea className="form-control" name="mensaje" cols="10" rows="3" placeholder="Escriba su mensaje por favor" required
                        value={state.mensaje}
                        onChange={({ target: { value } }) => handleState({ target: 'mensaje', value: value })}
                    ></textarea>
                </div>

                <div className="form-group d-flex justify-content-center flex-column w-25">
                    <button className="mt-5 btn btn-primary"
                    // onClick={(e) => {
                    //     fn(e)
                    //     dispatch(sendEmail(state))
                    //     reset()
                    // }}
                    >Enviar</button>
                </div>
            </form>
        </div>
    )
}