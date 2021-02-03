import './App.css';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from 'react-router-dom';
import axios from 'axios';
import LoginForm from './components/LoginForm';

function App() {
  // const [authenticated, setAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [buttonLoginText, setButtonLoginText] = useState("Login")

  //user object: {
  //   "id": 1,
  //   "userName": "user1",
  //   "name": "Test User1",
  //   "email": "user1@abc.com",
  //   "userPlantList": [
  //   ]
  // }

  const localAPI = "http://localhost:8080"

  const saveCurrentUser = (user) => {
    setCurrentUser(user)
    // setShowLogin(false)
  }

  const changeButtonToLogout = () => {
    setButtonLoginText("Logout")
    setShowLogin(false)
  }

  // const changeButtonText = () => {
  //   if (currentUser === null) {
  //     setButtonLoginText("Login")
  //   } else {
  //     // there is a user logged in
  //     setButtonLoginText("Logout")
  //     setShowLogin(false)
  //   }
  // }

  const onLoginLogoutClick = () => {
    if (currentUser === null) {
      // if not logged in, show/hide the login form on button click
      setButtonLoginText("Login")
      setShowLogin(!showLogin)
     } else {
      // if a user is logged in, and clicks, log them out
      setCurrentUser(null)
      setButtonLoginText("Login")
      setShowLogin(false)
    }
    
  }

  return (
    <Router>
      <body>

        <header>
          <nav>
            <ul>
              <li className="title">Grow-Cal App</li>
              <li>About</li>
              <li>{ currentUser !== null ? "Logged in as " + currentUser.userName : null }
                <button onClick={ onLoginLogoutClick } >{ buttonLoginText }</button></li>
                { showLogin ? <LoginForm url={localAPI} setCurrentUserCallback={saveCurrentUser} buttonTextCallback={changeButtonToLogout} /> : null }
            </ul>
            
          </nav>
        </header>
      
        <main className="container">
          <p>Main body</p>
          {/* <LoginForm url={localAPI} setCurrentUserCallback={saveCurrentUser} /> */}
        </main>

        <footer><p>Footer</p></footer>

      </body>
    </Router>

  );
}

export default App;
