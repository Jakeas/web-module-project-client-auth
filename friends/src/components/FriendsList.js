import React, { useEffect, useState } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'
const FriendsList = (props) => {
  const [friends, setFriends] = useState([])
  
  useEffect(()=>{
      axiosWithAuth()
        .get('/api/friends')
        .then(res => {
          console.log("get res:", res)
          setFriends(res.data)
        })
        .catch(err =>{
          console.log("get err:", err)
        })
  }, [])

  return (
    <div>
      <h1>Friends</h1>
      {friends.map(friend => (
        <div key={friend.id}>
          <div className="name">
            {friend.name}
            <div className="email">
              {friend.email}
              <div className="age">
                Age: {friend.age}
              </div>
            </div>
          </div>
        </div>

      ))}
    </div>
    )
}

export default FriendsList
