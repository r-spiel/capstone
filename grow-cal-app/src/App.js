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
    setShowLogin(false)
  }

  // const showLoginForm = () => {
  //   if (currentUser !== null ) {
  //     // log out
  //     setCurrentUser(null)
  //   } else {
  //     return (
  //       <LoginForm url={localAPI} setCurrentUserCallback={saveCurrentUser} />
  //     )
  //   }
  // }


  return (
    <Router>
      <body>

        <header>
          <nav>
            <ul>
              <li className="title">Grow-Cal App</li>
              <li>About</li>
              <li>{ currentUser !== null ? "Logged in as " + currentUser.userName : null }
                <button onClick={ () => setShowLogin(!showLogin) } >{ currentUser === null ? "Login" : "Logout" }</button></li>
                { showLogin ? <LoginForm url={localAPI} setCurrentUserCallback={saveCurrentUser} /> : null }
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
