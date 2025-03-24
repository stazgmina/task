import React from 'react'
import ContextButton from '../Button/ContextButton'

const Record = ({id, children}) => {
  return (
      <div className='flex gap-4 justify-evenly border'>
        {children}
        <ContextButton label='Edit'/>
        <ContextButton label='Delete'/>
      </div>
  )
}

export default Record