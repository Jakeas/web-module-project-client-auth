import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axiosWithAuth from '../utils/axiosWithAuth'

const initialState = {
  id: '',
  name:'',
  age: '',
  email: '',
}
const AddFriendForm = () => {
  const [addFriend, setAddFriend] = useState(initialState)

  const handleChange = e => {
    setAddFriend({
      ...addFriend, 
      [e.target.name]: e.target.value})
  }

  let history = useHistory()

  const onSubmit = e => {
    e.preventDefault()

    axiosWithAuth()
    .post('/api/friends', addFriend)
    history.push('/protected')
  }

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
      <label>
        <input 
          type="text"
          name="name"
          value={addFriend.name}
          onChange={handleChange}
          placeholder="Name"
        />
      </label>
      <label>
        <input 
          type="text"
          name="age"
          value={addFriend.age}
          onChange={handleChange}
          placeholder="Age"
        />
      </label>
      <label>
        <input 
          type="email"
          name="email"
          value={addFriend.email}
          onChange={handleChange}
          placeholder="Email"
        />
      </label>
      <button type="submit">Add Friend</button>
      </form> 
    </div>
  )
}

export default AddFriendForm
