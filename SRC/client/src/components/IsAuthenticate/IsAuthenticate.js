import React from 'react'
import { Link } from 'react-router-dom'
import { AuthNav } from '../AuthNav/AuthNav'
import { useAuth0 } from '@auth0/auth0-react'

export const IsAuthenticate = () => {

    const { loginWithPopup } = useAuth0()

    return (
        <div>
            <AuthNav />
            <div style={{ height: '90vh' }} className=' d-flex flex-column justify-content-center align-items-center'>
                <div className='d-flex flex-wrap justify-content-center align-items-center'>
                    <div className='border-end border-2 border-dark pe-2 '>
                        <h1>Error de Autorizacion</h1>
                    </div>
                    <div className='border p-2 rounded m-3'>
                        <p>Para poder acceder a esta Pagina debes Iniciar session</p>
                        <p>Vuelva al Home por favor</p>
                    </div>
                </div>
                <div className='mt-5'>
                    <Link className='btn btn-danger m-2' to={'/'}>Home</Link>
                    <button onClick={() => loginWithPopup()} className='btn btn-primary m-2'>Login</button>
                </div>
            </div>
        </div>
    )
}
