import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import AddLocation from '../addlocation.js'
import CheckInOut from '../checkinout.js'

export default class SideNav extends Component {



  render(){
    return(
      <div className='nav-container'>
        <div className='top-nav'>
          <Link to='/'><div className='link-btn current-page'>IMS v0.1</div></Link>
          <div className='link-btn' onClick={() => this.props.onClick('addlocation')}>Add Location</div>
          <AddLocation display={this.props.addLocDis}/>
          <div className='link-btn' onClick={() => this.props.onClick('checkin')}>Check In</div>
          <CheckInOut display={this.props.checkInDis}/>
          <div className='link-btn' onClick={() => this.props.onClick('checkout')}>Check Out</div>
          <CheckInOut display={this.props.checkOutDis}/>
        </div>
        <div className='bot-nav'>
          <Link to='/login'><div className='link-btn'>Login</div></Link>
          <Link to='/userprofile'><div className='link-btn'>User Profile</div></Link>
          <Link to='/help'><div className='link-btn'>Help</div></Link>
        </div>
      </div>
    )
  }
}
