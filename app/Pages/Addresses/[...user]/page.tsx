import { getAddressesByUserId } from '@/app/api/addresses/route'
import CreateButton from '@/app/components/Button/CreateButton'
import List from '@/app/components/List/List'
import AddressesRecord from '@/app/components/Record/AddressesRecord'
import React from 'react'

const Addresses = async ({params}) => {
  const { user } = await params
  const id = user[1]
  const addresses = await getAddressesByUserId(id)

  return (
    <List label='Addresses'>
      <CreateButton label='Create new Address'/>
      {addresses.map(address => (
        <AddressesRecord key={address.user_id} {...address}/>
      ))}
    </List>
  )
}

export default Addresses