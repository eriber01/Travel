import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'
import { isAuthorized } from '../../services/isAuthorized'
import CartButton from '../cartButton/cartButton'
const AuthButtons = ({ isCMS }) => {
  const { user, loginWithPopup, logout, isAuthenticated } = useAuth0()

  return (
    <div>
      {
        !isAuthenticated ?
          <button className='btn btn-dark' onClick={() => loginWithPopup()}>Login</button>
          :
          <div className='d-flex flex-wrap me-4'>
            <div className='d-flex flex-wrap align-items-center' style={{ Width: '25%' }}>
              <span className='text-white me-4'>{user.name}</span>
              <img className='rounded-circle opacity-100' style={{ width: '15%' }} referrerPolicy='no-referrer' src={user.picture} alt="" />
            </div>
            <div>
              <button className='btn btn-dark mx-3' onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>
            </div>
            
            {isAuthorized(user?.sub) && !isCMS ?
              <div className='mx-3'>
              <Link className='btn btn-light border' to={'manejadorCMS'}>DashBoard</Link>
              </div> : null
            }
            <CartButton />
          </div>
      }
    </div>
  )
}

export default AuthButtons