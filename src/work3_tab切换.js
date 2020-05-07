import React, { Component } from 'react'

export default class App extends Component {
  desc=[
    '一个男人和四个妖怪的故事','三个女人','一个男人和一群女人的故事'
  ]
  constructor(props) {
    super(props)
  
    this.state = {
       cur:0
    }
  }
  change(n){
    this.setState({cur:n})
  }
  render() {
    return (
      <div>
        <div>
          <button onClick={()=>{
            this.change(0)
          }}>西游记</button>
          <button onClick={()=>{
            this.change(1)
          }}>水浒传</button>
          <button onClick={()=>{
            this.change(2)
          }}>红楼梦</button>
        </div>
        <div>{this.desc[this.state.cur]}</div>
      </div>
    )
  }
}
