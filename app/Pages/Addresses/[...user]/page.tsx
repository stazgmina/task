import { getAddressesByUserId } from '@/app/api/addresses/route'
import CreateButton from '@/app/components/Button/CreateButton'
import List from '@/app/components/List/List'
import Modal from '@/app/components/Modal/Modal'
import AddressesRecord from '@/app/components/Record/AddressesRecord'
import React from 'react'

const Addresses = async ({params}) => {
  const { user } = await params
  const id = user[1]
  const addresses = await getAddressesByUserId(parseInt(id))
console.log(addresses)
  return (
    <List label={`Addresses of ${user}`}>
      <CreateButton label='Create new Address'/>
      {addresses.map(address => (
        <AddressesRecord key={address.user_id} {...address}/>
      ))}
      <Modal/>
    </List>
  )
}

export default Addresses