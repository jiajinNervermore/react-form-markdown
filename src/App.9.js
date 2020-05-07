import React, { Component } from 'react'

export default class App extends Component {
  names = ['迪丽热巴','古力娜扎','马尔扎哈']
  show(){
    return  this.names.map((item,i)=>{
    return <li key={i}>{item}</li>
    })  
  }
  render() {
    return (
      <div>
        <ul>
          {this.show()}
        </ul>
    <ul>{this.names.map((item,i)=>{
      return <li key={i}>{item}</li>
    })}</ul>
      </div>
    )
  }
}
