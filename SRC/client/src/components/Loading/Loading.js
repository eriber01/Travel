import React from 'react'

export const Loading = () => {
  return (
    <div style={{ height: '90vh' }} className='d-flex justify-content-center align-items-center'>
      <div className='spinner-border text-dark' style={{ width: '3rem', height: '3rem' }}>
        <span className='sr-only'>Loading...</span>
      </div>
    </div>
  )
}
