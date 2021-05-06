import React, { useState } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'

const initialState = {
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

  const onSubmit = e => {
    e.preventDefault()

    axiosWithAuth()
    .post('/api/friends', addFriend)

  }

  return (
    <div>
      <form onSubmit={onSubmit}>
      {/* <label> Id
        <input 
          type="text"
          name="id"
          value={addFriend.id}
          onChange={handleChange}
        /> */}
      {/* </label> */}
      <label> Name
        <input 
          type="text"
          name="name"
          value={addFriend.name}
          onChange={handleChange}
        />
      </label>
      <label> Age
        <input 
          type="text"
          name="age"
          value={addFriend.age}
          onChange={handleChange}
        />
      </label>
      <label> Email
        <input 
          type="email"
          name="email"
          value={addFriend.email}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add Friend</button>
      </form> 
    </div>
  )
}

export default AddFriendForm
