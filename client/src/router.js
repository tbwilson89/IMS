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
    // let addlocation
    // let checkin
    // let checkout
    // switch(btnClicked){
    //   case 'addlocation':
    //     addlocation = this.state.addlocationdisplay === 'scaleY(0)' ? 'scaleY(1)' : 'scaleY(0)'
    //     break;
    //   case 'checkin':
    //     checkin = this.state.checkindisplay === 'scaleY(0)' ? 'scaleY(1)' : 'scaleY(0)'
    //     break;
    //   case 'checkout':
    //     checkout = this.state.checkoutdisplay === 'scaleY(0)' ? 'scaleY(1)' : 'scaleY(0)'
    //     break;
    //   default:
    //     break;
    // }
    // this.setState({
    //   addlocationdisplay: addlocation,
    //   checkindisplay: checkin,
    //   checkoutdisplay: checkout,
    //   navdropdown: curComp
    // })
    // console.log(curComp)
    let addloc
    let checkin
    let checkout
    let secnavdis
    switch(btnClicked){
      case 'addlocation':
        addloc = this.state.addlocationdisplay === 'hide' ? 'show' : 'hide'
        checkin = 'hide'
        checkout = 'hide'
        secnavdis = this.state.addlocationdisplay === 'hide' ? 'scaleY(1)' : 'scaleY(0)'
        curComp = this.state.addlocationdisplay === 'hide' ? (<AddLocation display='show'/>) : (<AddLocation display='hide'/>)
        break;
      case 'checkin':
        addloc = 'hide'
        checkin = this.state.checkindisplay === 'hide' ? 'show' : 'hide'
        checkout = 'hide'
        break;
      case 'checkout':
        addloc = 'hide'
        checkin = 'hide'
        checkout = this.state.checkoutdisplay === 'hide' ? 'show' : 'hide'
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
              <div className='link-btn' onClick={() => this.displaySection('addlocation', (<AddLocation display={this.state.addlocationdisplay}/>))}>Add Location</div>
              <div className='link-btn' onClick={() => this.displaySection('checkin', (<CheckInOut />))}>Check In</div>
              <div className='link-btn' onClick={() => this.displaySection('checkout', (<CheckInOut type='out'/>))}>Check Out</div>
            </div>
            <div className='right-nav'>
              <Link to='/login'><div className='link-btn'>Login</div></Link>
              <Link to='/help'><div className='link-btn'>Help</div></Link>
            </div>
          </div>
          <div className='secondary-nav' style={{transform:this.state.displaySecondary}}>
            {this.state.navdropdown}
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
