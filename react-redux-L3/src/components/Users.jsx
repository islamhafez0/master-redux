import React, { useEffect } from 'react'
import { fetchUsers } from '../store/users/usersReducer'
import { useDispatch, useSelector } from 'react-redux'
import User from './User';


const Users = () => {
    const {users, loading, error} = useSelector(state => state.users);
    const dispatch = useDispatch();

    
    useEffect(() => {
      dispatch(fetchUsers())
    }, [])

  return (
    <div>
      {loading && <p>Loading....</p>}
      {error && <p>{error}</p>}
      <ul>
        {users && users.map(user => (
          <User key={user.id} username={user}/>
        ))}
      </ul>
    </div>
  )
}

export default Users