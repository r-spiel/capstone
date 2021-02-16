import './App.css';
import React, { useState, useRef } from 'react';
import localStorage from 'local-storage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import AddFromDatabase from './components/fromDB/AddFromDatabase';

// const API_URL_BASE = 'http://localhost:8080'
const API_URL_BASE = 'https://thawing-spire-97162.herokuapp.com/'

function App() {

  const [showLogin, setShowLogin] = useState(false);

  let buttonText = ""
  if (localStorage.get('user')) {
    buttonText = "Logout"
  } else {
    buttonText = "Login"
  }

  const [buttonLoginText, setButtonLoginText] = useState(buttonText)

  const topRef = useRef()

  const scrollToTop = () => {
    topRef.current.scrollIntoView({ behavior: 'smooth'})
  }

  const saveCurrentUser = (user) => {
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
      
        <header ref={topRef}>
          <nav className="navbar navbar-light">
          <a href="/capstone" className="title navbar-brand grow-title">Grow-Cal App</a>
            <ul className="navbar-nav">
              <li className="navbar-text">{ localStorage.get('user') ? "Logged in as " + localStorage.get('user') : null }
                <button onClick={ onLoginLogoutClick } className="nav-item" >{ buttonLoginText }</button></li>
                { showLogin ? <LoginForm url={API_URL_BASE} setCurrentUserCallback={saveCurrentUser} buttonTextCallback={changeButtonToLogout} /> : null }
            </ul>
            
          </nav>
        </header>
      
        <main className="container">
          <Switch>
            <Route exact path="/capstone" ><Home url={API_URL_BASE} /></Route>
            <Route path='/capstone/addFromDatabase'><AddFromDatabase scrollToTopCallback={scrollToTop} url={API_URL_BASE} /></Route>
          </Switch>
          
        </main>

        <footer className="bg-dark text-white text-center">
          <h6 className="p-2 m-3">
            © 2021 Richelle Spiel
          </h6>
        </footer>




    </Router>

  );
}

export default App;
