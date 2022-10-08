import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import axios from 'axios'
const AuthButtons = () => {
  const { user, loginWithPopup, logout, isAuthenticated, isLoading } = useAuth0()

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
          </div>
      }
      {/*       <a href="/login" className="nav-list">Log In <i className="fas fa-user"></i></a>
      <a href="/signup" className="nav-list">Sing In <i className="fas fa-user-plus"></i></a> */}
    </div>
  )
}

export default AuthButtons