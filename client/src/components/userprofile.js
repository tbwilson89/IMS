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
    this.onSignIn = this.onSignIn.bind(this)
  }

  testclick(){
    var text = this.refs.textarea.innerText
    console.log(text)
    let url = '/api/userlookup?' + text
    return fetch(url)
      .then(res => res.json())
      .then((data) => {
        console.log(data)
        this.setState({
          user: data.user
        })
      })
  }
  onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }
  signOut(){
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('user signed out.')
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
        <div className="g-signin2" data-onsuccess='onSignIn'></div>
        <button onClick={this.onSignIn}>GOOGLE!</button>
        <a href="#" onclick="signOut();">Sign out</a>
      </div>
    )
  }
}
