import React from 'react'
import Record from './Record'
import Link from 'next/link'

const UsersRecord = ({ id ,first_name, last_name, initials, email, status }) => {
  return (
    <Link href={`/Pages/Addresses/${first_name}_${last_name}/${id}`}>
      <Record>
          <p>{`${first_name}  ${last_name}`}</p>
          <p>{initials}</p>
          <p>{email}</p>
          <p className={status === "ACTIVE" ? 'text-green-500' : 'text-red-500'}>{status}</p>
      </Record>
    </Link>
  )
}

export default UsersRecord