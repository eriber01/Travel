import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { isAuthorized } from '../../services/isAuthorized'
const AuthButtons = ({ isCMS }) => {
  const { user, loginWithPopup, logout, isAuthenticated, isLoading } = useAuth0()
  console.log(isAuthorized(user?.sub));
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
              <button className='btn btn-dark' onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>
            </div>

            {isAuthorized(user?.sub) && !isCMS ?
              <div className='mx-3'>
                <Link className='btn btn-light border' to={'manejadorCMS'}>DashBoard</Link>
              </div> : null
            }
          </div>
      }
    </div>
  )
}

export default AuthButtons