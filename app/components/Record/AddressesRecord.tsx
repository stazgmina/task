import Record from './Record'
import ContextButton from '../Button/ContextButton'

const AddressesRecord = ({ user_id, address_type, valid_from, post_code, city, country_code, street, building_number }) => {

  return (
    <Record>
        <p>{address_type}</p>
        <p>{`${new Date(valid_from)}`}</p>
        <p>{post_code}</p>
        <p>{city}</p>
        <p>{country_code}</p>
        <p>{street}</p>
        <p>{building_number}</p>
        <ContextButton label='Edit' id={user_id}/>
    </Record>
  )
}

export default AddressesRecord