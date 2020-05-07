import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       word:'注销'
    }
  }
  doChange(event){
    let newValue = event.target.value;
    this.setState({word:newValue})
  }
  render() {
    return (
      <div>
        <h3>双向数据绑定</h3>
        <input type="text" value={this.state.word} readOnly/>
        <input type="text" value={this.state.word} onChange={this.doChange.bind(this)}/>
      </div>
    )
  }
}
