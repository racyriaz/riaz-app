import React from 'react'
import {
  Switch,
  Route,
  Link,
  BrowserRouter as Router,
} from 'react-router-dom';

import Home from "../views/Home";
import About from "../views/About";
import Connect from "../views/Connect";
import '../views/stylesheet.css';
import '../../public/grey_logo.svg';

function NavBar() {
  return (

    <Router>
      <div>
        <nav className="flex-container-row">
          <Link to="/"><img className="nav-logo" src="grey_logo.svg" alt="logo" /></Link>
          <ul className="nav-container">
            <li>
              <Link className="nav-item" to="/">Home</Link>
            </li>
            <li>
              <Link className="nav-item" to="/about">About</Link>
            </li>
            <li>
              <Link className="nav-item" to="/connect">Connect</Link>
            </li>
          </ul>
        </nav>
      </div>


      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/connect">
          <Connect />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default NavBar
