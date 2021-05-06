import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
// import axiosWithAuth from '../utils/axiosWithAuth'
import axios from 'axios'

const initialState = {
  username: '',
  password: ''
}

const Login = () => {
const [credentials, setCredentials] = useState(initialState)
// const [isLoading, setIsLoading] = useState(false)

  const handleChange = e => {
    setCredentials({
      ...credentials, [e.target.name]: e.target.value
    })
  }
let history = useHistory()

  const onLogin = e => {
    e.preventDefault()
    axios
      .post('http://localhost:5000/api/login', { username: 'Lambda School', password: 'i<3Lambd4' })
      .then(res => {
        console.log({res})
        localStorage.setItem("token", res.data.payload)
        history.push("/protected")
      })
      .catch(err => {
        console.log({err})
      })  
  }
  
  return (
    <div className="container">
      <form onSubmit={onLogin}>
        <label> 
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            placeholder="Username"
          />
        </label>   
        <label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            placeholder="Password"
          />
        </label>
        <button type="submit">Login</button>   
      </form> 
    </div>
  )
}

export default Login
