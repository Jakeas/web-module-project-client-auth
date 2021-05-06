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
      .post('http://localhost:5000/api/login', credentials)
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
    <div>
      <form onSubmit={onLogin}>
        <label> Username
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />
        </label>   
        <label> Password
          <input
            type="text"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Log in</button>   
      </form> 
    </div>
  )
}

export default Login
