import React, { Component } from 'react'

export default class UserProfile extends Component {

  constructor(props){
    super(props)
    this.state = {
      user: 'default...',
      testuser: 'tbwilson',
      contentEditText: ''
    }
    this.testclick = this.testclick.bind(this)
  }

  testclick(){
    var text = this.refs.textarea.innerText
    console.log(text)
    let url = '/api/userlookup?' + this.state.testuser
    return fetch('/api/userlookup?' + text)
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
        <div className='user-lookup' contentEditable='true' ref='textarea'></div>
        <div><button onClick={this.testclick}>TestMe!</button></div>
        <div>Current User: {this.state.user}</div>
        <div>Content Edited: {this.state.contentEditText}</div>
      </div>
    )
  }
}
