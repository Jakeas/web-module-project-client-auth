import e from 'cors'
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import axiosWithAuth from '../utils/axiosWithAuth'


const FriendsList = (props) => {
  const [friends, setFriends] = useState([])
  const { id } = useParams()
  const { push } = useHistory

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

  const handleDelete= (e) => {
    e.preventDefault()
    axiosWithAuth()
        .delete(`/api/friends/${id}`)
        .then(res => {
            console.log("delete res:", res)

       const deleteFriend = friends.filter(friend=>(friend.id !== id));
          setFriends(deleteFriend(id))
          push('/protected')
        })  
        .catch(err => {
            console.log("delete err:", err)
        })
}

  return (
    <div className="topFriend"> 
      <h1>Friends List</h1>
      <div className="friendContainer">
        {friends.map(friend => (
          <div className="info">
            <div key={friend.id}>
              <div className="name">
                {friend.name}
                <div className="email">
                  {friend.email}
                  <div className="age">
                    Age: {friend.age}
                    <div className="buttons">
                      <button>Edit</button>
                      <button onClick={handleDelete}>Delete</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <button onClick={handleEdit}>Edit</button> */}
      
     </div>  
    )
}

export default FriendsList
