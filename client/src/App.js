import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Routes,
} from 'react-router-dom'

import Home from './components/Home'
import QATensor from './components/QATensor'
//import Codingport from './components/Codingport'
//import Writingport from './components/Writingport'
import resume from './assets/TyrelleBeltran.pdf'

function App() {

  return (
    <Router>
        <nav>
          <ul className="menu-container">
          <li className="menu-items">
              <Link className="menu-item " to="/">
              Tyrelle Beltran
              </Link>
            </li>

            <li className="menu-items">
              <Link className="menu-item " to="/">
                Home
              </Link>
            </li>

            <li className="menu-items">
              <Link className="menu-item" to="/codingport">
              Coding Projects
              </Link>
            </li>

            <li className="menu-items">
              <Link className="menu-item" to="/writingport">
              Technical Writing Projects
              </Link>
            </li>

            <li className="menu-items">
              <Link className="menu-item" to={resume} target="_blank" rel="noopener noreferrer">
                Download My Resume
              </Link>
            </li>

          </ul>
        </nav>

        <div>
          <Routes>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
          </Routes>
        </div>

    </Router>    
    
  );
}

export default App;
