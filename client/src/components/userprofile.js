import React, { Component } from 'react'

export default class UserProfile extends Component {

  constructor(props){
    super(props)
    this.state = {
      user: 'default...'
    }
    this.testclick = this.testclick.bind(this)
  }

  testclick(){
    return fetch('/api/userlookup')
      .then(res => res.json())
      .then((data) => {
        console.log(data)
        this.setState({
          user: data.user
        })
      })
  }

  render(){
    return(
      <div className='user-profile-container'>
        <div>This is a test of the user profile...</div>
        <div><button onClick={this.testclick}>TestMe!</button></div>
        <div>Current User: {this.state.user}</div>
      </div>
    )
  }
}
