import React from 'react'

const Record = ({ children }) => {
  return (
      <div className='flex gap-4 justify-evenly border'>
        {children}
      </div>
  )
}

export default Record