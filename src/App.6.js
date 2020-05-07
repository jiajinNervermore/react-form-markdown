import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
  //做一条绳子，拴在子元素上，就可以掌控子元素了
  this.nameRef = React.createRef()
  this.pwdRef = React.createRef()
    this.state = {
       
    }
  }
  
  login = ()=>{
    console.log(this.nameRef)
    // let name = this.nameRef.current.value;
    // let pwd = this.pwdRef.current.value;
    // console.log(name,pwd)
  }
  render() {
    return (
      <div>
        <div>
          <input type="text" ref={this.nameRef} placeholder="请输入姓名..."/>
        </div>
        <div>
          <input type="text" ref={this.nameRef} placeholder="请输入密码..." />
        </div>
        <button onClick={this.login}>登录</button>
      </div>
    )
  }
}
