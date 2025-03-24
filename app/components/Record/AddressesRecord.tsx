import React from 'react'
import Record from './Record'

const AddressesRecord = ({ id, user_id, address_type, valid_from, post_code, city, country_code, street, building_number }) => {
  return (
    <Record id={id}>
        <p>{address_type}</p>
        <p>{`${new Date(valid_from)}`}</p>
        <p>{post_code}</p>
        <p>{city}</p>
        <p>{country_code}</p>
        <p>{street}</p>
        <p>{building_number}</p>
    </Record>
  )
}

export default AddressesRecord