import React, { Component } from 'react'

export default class AddLocation extends Component {

  constructor(props){
    super(props)
    this.state = {
      display: 'hide'
    }
  }

  render(){
    return(
      <div className={'drop-down-nav ' + this.props.display}>
        <form>
          <input type='text'></input>
        </form>
      </div>
    )
  }
}
