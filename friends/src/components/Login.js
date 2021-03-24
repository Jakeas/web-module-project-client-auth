import React from 'react'
import axios from 'axios'

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    login = e => {
        e.preventDefault();
        console.log("here")
        axios
            .post('http://localhost:5000/api/login', { username: 'Lambda School', password: 'i<3Lambd4' } )
            .then(res => {
                console.log(res);
                localStorage.setItem("token", res.data.payload)
                this.props.history.push('/protected')
            })
            .catch(err => {
                console.log(err.response);
            })
    }


    render(){

        return (
            <div className="container">
                <form onSubmit={this.login}>
                    <label>username
                        <input 
                        type="text"
                        name="username"
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                        />
                    </label>
                    <label>password
                        <input 
                        type="password"
                        name="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                        />
                    </label>
                    <button>Login</button>
                </form>
            </div>
        )
    }
}

export default Login