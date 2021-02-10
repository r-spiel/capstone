import './App.css';
// import "react-big-calendar/lib/css/react-big-calendar.css";
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
import Home from './components/Home';
import AddFromDatabase from './components/fromDB/AddFromDatabase';

const API_URL_BASE = 'http://localhost:8080'
// const API_URL_BASE = 'https://thawing-spire-97162.herokuapp.com/'

function App() {

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

  return (
    <Router>
   

        <header>
          <nav className="navbar navbar-light">
          <a href="/" className="title navbar-brand">Grow-Cal App</a>
            <ul className="navbar-nav">
              <li className="navbar-text">{ localStorage.get('user') ? "Logged in as " + localStorage.get('user') : null }
                <button onClick={ onLoginLogoutClick } className="nav-item" >{ buttonLoginText }</button></li>
                { showLogin ? <LoginForm url={API_URL_BASE} setCurrentUserCallback={saveCurrentUser} buttonTextCallback={changeButtonToLogout} /> : null }
            </ul>
            
          </nav>
        </header>
      
        <main className="container">
          <Switch>
            <Route exact path="/" ><Home url={API_URL_BASE} /></Route>
            <Route path='/addFromDatabase'><AddFromDatabase url={API_URL_BASE} /></Route>
          </Switch>
          
        </main>

        <footer><p>Footer</p></footer>




    </Router>

  );
}

export default App;
