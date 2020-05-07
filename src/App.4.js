import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      num: 1
    }
  }
  doAdd() {
    this.setState({ num: this.state.num ++ })
    this.setState({num:this.state.num})
    console.log(this.state.num)
  }
  render() {
    return (
      <div>
        <button onClick={this.doAdd.bind(this)}>{this.state.num}</button>
      </div>
    )
  }
}
