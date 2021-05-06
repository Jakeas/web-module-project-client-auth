import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'

import Login from './components/Login'
import FriendsList from './components/FriendsList'
import AddFriendForm from './components/AddFriendForm';


function App(props) {
  const logout = () => {
    localStorage.removeItem('token')
  }

  return (
  <Router>  
    <div className="header">
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link onClick={logout}>Logout</Link>
        </li>
        <li>
          <Link to="/protected">Friends List</Link>
        </li>
        <li>
          <Link to="/addfriend">Add Friend</Link>
        </li>
      </ul>

      <Switch>

        <PrivateRoute exact path="/protected" component={FriendsList}/>

        <Route path="/login" component={Login} />

        <Route path="/addfriend" component={AddFriendForm} />
      
      </Switch>

    </div>
  </Router>
  );
}

export default App;
