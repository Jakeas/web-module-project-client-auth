import React from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'

const DeleteUser = () => {


    const handleDelete= (e) => {
        e.preventDefault()
        axiosWithAuth()
            .delete(`/api/friends/${id}`)
            .then(res => {
                console.log("delete res:", res)
    
           const deleteFriend = friends.filter(friend=>(friend.id !== id));
              setFriends(deleteFriend(id))
            })  
            .catch(err => {
                console.log("delete err:", err)
            })
    }
    return (
        <div>
            
        </div>
    )
}

export default DeleteUser
