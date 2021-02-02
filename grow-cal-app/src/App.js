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

function App() {
  // const [authenticated, setAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  

  return (
    <Router>
      <body>
        <header>
          <nav>
            <ul>
              <li className="title">Grow-Cal App</li>
              <li>About</li>
              <li><button>Login</button></li>
            </ul>
            
          </nav>
        </header>
      
        <main>
          <p>Main body</p>
        </main>
        <footer><p>Footer</p></footer>
      </body>
    </Router>

  );
}

export default App;
