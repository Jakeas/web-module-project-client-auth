import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axiosWithAuth from '../utils/axiosWithAuth'


const FriendsList = () => {
  const [friends, setFriends] = useState([])
  const { id } = useParams()
  
  // console.log(props)

  useEffect(()=>{
      axiosWithAuth()
        .get('/api/friends')
        .then(res => {
          setFriends(res.data)
        })
        .catch(err =>{
        })
  }, []) 

  const handleDelete= (e, id) => {
    e.preventDefault()
    console.log({id})

  // useEffect(()=>{

    axiosWithAuth()
    .delete(`/api/friends/${id}`)
    .then(res => {
      console.log("delete res:", res)
      setFriends(res.data)
      
      const deleteFriend = () => {   
        (friends.filter(friend=>(friend.id !== Number(id))))};
        (deleteFriend())
      })  
      .catch(err => {
        console.log("delete err:", err)
      })
    // }, [])
  }
    //try useParams in App.js

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
                      <button onClick={(e)=>handleDelete(e, friend.id)}>Delete</button>
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
