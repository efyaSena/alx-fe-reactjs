import React, { useContext } from 'react'
import UserContext from './UserContext'

function UserProfile() {
   const {userData} = useContext(UserContext)}
  return (
    <div>UserProfile</div>
  )
}

export default UserProfile