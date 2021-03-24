import axios from 'axios'
import React from 'react'

import { axiosWithAuth } from './../Utils/axiosWithAuth'

class FriendsList extends React.Component {
    state = {
        friends: []
    }

    handleChange = e => {
        this.setState({
            friends: [
                // ...this.state.friends, [e.target.name]: e.target.value
            ]
        })
    }

    componentDidMount(){
        this.getData()
    }

    getData = () => {
        axiosWithAuth()
        .get('/api/friends')
        .then(res => {
            console.log({res})
            this.setState({
                friends: [res.data]
            })
        })
        .catch(err => {
            console.log(err.response)
        })
    }
    componentDidUpdate(){
        this.addFriend()
    }

    addFriend = e => {
        // e.preventDefault();

        axiosWithAuth()
        .post('/api/friends', this.state.friends)
        .then(res =>{
            console.log(res)
            this.setState({
                friends: [res.data]
            })       
        })
        .catch(err =>{
            console.log(err.response)
        })
    }

    render() {
        return(
            <div>
                <form onSubmit={(e)=> this.addFriend(e) }>
                    <label> Id
                        <input 
                            type="text"
                            name="id"
                            onChange={this.handleChange}
                            value={this.state.friends.id}
                        />
                    </label>
                    <label> Name
                        <input 
                            type="text"
                            name="name"
                            onChange={this.handleChange}
                            value={this.state.friends.name}
                        />
                    </label>
                    <label> Age
                        <input 
                            type="text"
                            name="age"
                            onChange={this.handleChange}
                            value={this.state.friends.age}
                        />
                    </label>
                    <label> Email
                        <input 
                            type="email"
                            name="email"
                            onChange={this.handleChange}
                            value={this.state.friends.email}
                        />
                    </label>
                    <button type="submit">Add Friend</button>
                </form>
                <div>
                    {this.state.friends.map(friend => {
                        <div key={friend.id}>
                            <p>{friend.name}</p>
                            <p>{friend.age}</p>
                            <p>{friend.email}</p>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

export default FriendsList