import React from 'react'

const User = ( { username } ) => {
  return (
    <li>
      <b>Username:</b> {username.username}: 
      <span style={{margin: '0 10px'}}><b>ID:</b> {username.id}</span>
    </li>
  )
}

export default User