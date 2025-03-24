import React from 'react'

const CreateButton = ({label}) => {
  return (
    <button className='p-2 border rounded-md bg-purple-500'>
        {label}
    </button>
  )
}

export default CreateButton