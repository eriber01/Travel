import React from 'react'
import { Link } from 'react-router-dom'
import { AuthNav } from '../AuthNav/AuthNav'

export const Page404 = () => {
  return (
    <div className=''>
      <AuthNav />
      <div style={{ height: '90vh' }} className=' d-flex flex-column justify-content-center align-items-center'>
        <div className='d-flex flex-wrap justify-content-center align-items-center'>
          <div className='border-end border-2 border-dark pe-2 '>
            <h1>Error 404</h1>
          </div>
          <div className='border p-2 rounded m-3'>
            <p>Esta pagina no fue Encontrada</p>
            <p>Es posible que este Error sea porque puso algo erroneo en la Ruta</p>
            <p>Vuelva al Home por favor</p>
          </div>
        </div>
        <Link className='btn btn-danger mt-5' to={'/'}>Home</Link>
      </div>
    </div>
  )
}
