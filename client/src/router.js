import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import Home from './components/home.js'
import Login from './components/login.js'

import AddLocation from './components/addlocation.js'
import CheckInOut from './components/checkinout.js'
import UserProfile from './components/userprofile.js'

export default class Redirects extends Component {

  constructor(props){
    super(props)
    this.state = {
      addlocationdisplay: 'hide',
      checkindisplay: 'hide',
      checkoutdisplay: 'hide',
      lastclick: '',
      navdropdown: '',
      testvar: 'show'
    }
    this.displaySection = this.displaySection.bind(this)
    this.testclick = this.testclick.bind(this)
  }

  displaySection(btnClicked, curComp){
    let addloc
    let checkin
    let checkout
    switch(btnClicked){
      case 'addlocation':
        addloc = this.state.addlocationdisplay === 'hide' ? '' : 'hide'
        checkin = this.state.checkindisplay
        checkout = this.state.checkoutdisplay
        curComp = this.state.addlocationdisplay === 'hide' ? (<AddLocation display='show'/>) : (<AddLocation display='hide'/>)
        break;
      case 'checkin':
        addloc = this.state.addlocationdisplay
        checkin = this.state.checkindisplay === 'hide' ? '' : 'hide'
        checkout = this.state.checkoutdisplay
        curComp = this.state.checkindisplay === 'hide' ? (<CheckInOut display='show'/>) : (<AddLocation display='hide'/>)
        break;
      case 'checkout':
        addloc = this.state.addlocationdisplay
        checkin = this.state.checkindisplay
        checkout = this.state.checkoutdisplay === 'hide' ? '' : 'hide'
        curComp = this.state.checkoutdisplay === 'hide' ? (<CheckInOut display='show'/>) : (<AddLocation display='hide'/>)
        break;
      default:
        break;
    }
    this.setState({
      addlocationdisplay: addloc,
      checkindisplay: checkin,
      checkoutdisplay: checkout,
      lastclick: btnClicked,
      navdropdown: curComp
    })
  }

  testclick(){
    let testvar = this.state.testvar === 'hide' ? 'show' : 'hide'
    this.setState({
      testvar: testvar
    })
  }

  render(){
    return(
      <Router>
        <div className='container'>
          <div className='nav-container'>
            <div className='top-nav'>
              <Link to='/'><div className='link-btn current-page'>IMS v0.1</div></Link>
              <div className='link-btn' onClick={() => this.displaySection('addlocation')}>Add Location</div>
              <AddLocation display={this.state.addlocationdisplay}/>
              <div className='link-btn' onClick={() => this.displaySection('checkin', (<CheckInOut />))}>Check In</div>
              <CheckInOut display={this.state.checkindisplay}/>
              <div className='link-btn' onClick={() => this.displaySection('checkout', (<CheckInOut type='out'/>))}>Check Out</div>
              <CheckInOut display={this.state.checkoutdisplay}/>
            </div>
            <div className='bot-nav'>
              <Link to='/login'><div className='link-btn'>Login</div></Link>
              <Link to='/userprofile'><div className='link-btn'>User Profile</div></Link>
              <Link to='/help'><div className='link-btn'>Help</div></Link>
            </div>
          </div>
          <div className='main-content'>
            <div className='body'>
              <Route exact path='/' component={Home}/>
              <Route path='/login' component={Login}/>
              <Route path='/UserProfile' component={UserProfile}/>
            </div>
          </div>
        </div>
      </Router>
    )
  }
}
