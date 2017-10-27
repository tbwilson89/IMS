import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import Home from './components/home.js'
import Login from './components/login.js'

import SideNav from './components/sidenav/sidenav.js'
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
  // componentDidMount(){
  //   gapi.load('auth2', function() {
  //     gapi.auth2.init()
  //   })
  // }

  displaySection(btnClicked){
    let addloc
    let checkin
    let checkout
    switch(btnClicked){
      case 'addlocation':
        addloc = this.state.addlocationdisplay === 'hide' ? '' : 'hide'
        checkin = this.state.checkindisplay
        checkout = this.state.checkoutdisplay
        break;
      case 'checkin':
        addloc = this.state.addlocationdisplay
        checkin = this.state.checkindisplay === 'hide' ? '' : 'hide'
        checkout = this.state.checkoutdisplay
        break;
      case 'checkout':
        addloc = this.state.addlocationdisplay
        checkin = this.state.checkindisplay
        checkout = this.state.checkoutdisplay === 'hide' ? '' : 'hide'
        break;
      default:
        break;
    }
    this.setState({
      addlocationdisplay: addloc,
      checkindisplay: checkin,
      checkoutdisplay: checkout,
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
          <SideNav
            onClick={this.displaySection}
            addLocDis={this.state.addlocationdisplay}
            checkInDis={this.state.checkindisplay}
            checkOutDis={this.state.checkoutdisplay}
          />
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
