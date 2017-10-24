import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import Home from './components/home.js'
import Login from './components/login.js'

import AddLocation from './components/addlocation.js'
import CheckInOut from './components/checkinout.js'

export default class Redirects extends Component {

  constructor(props){
    super(props)
    this.state = {
      displaySecondary: 'scaleY(0)',
      addlocationdisplay: 'hide',
      checkindisplay: 'hide',
      checkoutdisplay: 'hide',
      lastclick: '',
      navdropdown: ''
    }
    this.displaySection = this.displaySection.bind(this)
  }

  displaySection(btnClicked, curComp){
    let addloc
    let checkin
    let checkout
    let secnavdis
    switch(btnClicked){
      case 'addlocation':
        addloc = this.state.addlocationdisplay === 'hide' ? 'show' : 'hide'
        checkin = 'hide'
        checkout = 'hide'
        secnavdis = this.state.addlocationdisplay === 'hide' ? 'show' : 'hide'
        curComp = this.state.addlocationdisplay === 'hide' ? (<AddLocation display='show'/>) : (<AddLocation display='hide'/>)
        break;
      case 'checkin':
        addloc = 'hide'
        checkin = this.state.checkindisplay === 'hide' ? 'show' : 'hide'
        checkout = 'hide'
        secnavdis = this.state.checkindisplay === 'hide' ? 'show' : 'hide'
        curComp = this.state.checkindisplay === 'hide' ? (<CheckInOut display='show'/>) : (<AddLocation display='hide'/>)
        break;
      case 'checkout':
        addloc = 'hide'
        checkin = 'hide'
        checkout = this.state.checkoutdisplay === 'hide' ? 'show' : 'hide'
        secnavdis = this.state.checkoutdisplay === 'hide' ? 'show' : 'hide'
        curComp = this.state.checkoutdisplay === 'hide' ? (<CheckInOut display='show'/>) : (<AddLocation display='hide'/>)
        break;
      default:
        break;
    }
    this.setState({
      displaySecondary: secnavdis,
      addlocationdisplay: addloc,
      checkindisplay: checkin,
      checkoutdisplay: checkout,
      lastclick: btnClicked,
      navdropdown: curComp
    })
  }

  render(){
    return(
      <Router>
        <div className='container'>
          <div className='nav-container'>
            <div className='left-nav'>
              <Link to='/'><div className='link-btn current-page'>IMS v0.1</div></Link>
              <div className='link-btn' onClick={() => this.displaySection('addlocation')}>Add Location</div>
              <div className='link-btn' onClick={() => this.displaySection('checkin', (<CheckInOut />))}>Check In</div>
              <div className='link-btn' onClick={() => this.displaySection('checkout', (<CheckInOut type='out'/>))}>Check Out</div>
            </div>
            <div className='right-nav'>
              <Link to='/login'><div className='link-btn'>Login</div></Link>
              <Link to='/help'><div className='link-btn'>Help</div></Link>
            </div>
          </div>
          <div className={'secondary-nav '}>
            {/* {this.state.navdropdown} */}
            <AddLocation display={this.state.displaySecondary}/>
          </div>
          <div className='main-content'>
            <div className='body'>
              <Route exact path='/' component={Home}/>
              <Route path='/login' component={Login}/>
            </div>
          </div>
          <footer>
            This is a footer!
          </footer>
        </div>
      </Router>
    )
  }
}
