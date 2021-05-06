import React, { useEffect, useState } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'
const FriendsList = () => {
  const [friends, setFriends] = useState([])
  
  useEffect(()=>{
      axiosWithAuth()
        .get('/api/friends')
        .then(res => {
          console.log("get res:", res)
          // setFriends{
            // friends: res.data
          // }
        })
        .catch(err =>{
          console.log("get err:", err)
        })
  }, [])

  return (
    <div>
            
    </div>
    )
}

export default FriendsList
