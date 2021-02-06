import './App.css';
import "react-big-calendar/lib/css/react-big-calendar.css";
import React, { useState } from 'react';
import localStorage from 'local-storage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from 'react-router-dom';
import axios from 'axios';
import LoginForm from './components/LoginForm';
import SplashPage from './components/SplashPage';
import Home from './components/Home';
import AddNewPlantForm from './components/AddNewPlantForm';
import addFromDatabase from './components/AddFromDatabase';

const API_URL_BASE = 'http://localhost:8080'

function App() {
  // const [authenticated, setAuthenticated] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  let buttonText = ""
  if (localStorage.get('user')) {
    buttonText = "Logout"
  } else {
    buttonText = "Login"
  }

  const [buttonLoginText, setButtonLoginText] = useState(buttonText)

  const saveCurrentUser = (user) => {
    // setCurrentUser(user)
    localStorage.set('user', user.userName)
    localStorage.set('id', user.id)
    console.log(localStorage.get('user'))
    console.log(localStorage.get('id'))
  }

  const changeButtonToLogout = () => {
    setButtonLoginText("Logout")
    setShowLogin(false)
  }

  const onLoginLogoutClick = () => {
    if (!localStorage.get('user')) {
      // if not logged in, show/hide the login form on button click
      setButtonLoginText("Login")
      setShowLogin(!showLogin)
     } else {
      // if a user is logged in, and clicks, log them out
      localStorage.clear()
      setButtonLoginText("Login")
      setShowLogin(false)
    }
  }

  const addFromDatabase = () => {
    return (
      <addFromDatabase />
    )
  }

  return (
    <Router>
      <body>

        <header>
          <nav className="navbar navbar-light">
          <a href="/" className="title navbar-brand">Grow-Cal App</a>
            <ul className="navbar-nav">
              <li className="nav-item">About</li>
              <li className="navbar-text">{ localStorage.get('user') ? "Logged in as " + localStorage.get('user') : null }
                <button onClick={ onLoginLogoutClick } className="nav-item" >{ buttonLoginText }</button></li>
                { showLogin ? <LoginForm url={API_URL_BASE} setCurrentUserCallback={saveCurrentUser} buttonTextCallback={changeButtonToLogout} /> : null }
            </ul>
            
          </nav>
        </header>
      
        <main className="container">
          { !localStorage.get('user') ? <SplashPage /> : <Home url={API_URL_BASE} /> }
        </main>

        <footer><p>Footer</p></footer>

        <Switch>
          <Route path='/addFromDatabase' component={addFromDatabase} />
        </Switch>

      </body>
    </Router>

  );
}

export default App;
