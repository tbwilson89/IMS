import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import Home from './components/home.js'
import Login from './components/login.js'

export default class Redirects extends Component {
  render(){
    return(
      <Router>
        <div className='container'>
          <div className='nav-container'>
            <Link to='/'><div className='link-btn current-page'>IMS v0.1</div></Link>
            <div className='right-nav'>
              <Link to='/login'><div className='link-btn'>Login</div></Link>
              <Link to='/help'><div className='link-btn'>Help</div></Link>
            </div>
          </div>
          <div className='secondary-nav'>
            <Link to='/'><div className='link-btn'>Testing...</div></Link>
          </div>
          <div className='body-container'>
            <div className='body'>
              <Route exact path='/' component={Home}/>
              <Route path='/login' component={Login}/>
            </div>
          </div>
        </div>
      </Router>
    )
  }
}
