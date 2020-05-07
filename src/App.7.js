import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       ok:['云龙', 'monic', '小小', '刚被'],
       str:''
    }
  }
  
  names = ['云龙', 'monic', '小小', '刚被'];
  showOk=()=>{
    let html = '</li><li>'
    let arrs = this.state.ok.join(html)
    this.setState({str:arrs})
    console.log(arrs)
  }
  show = () => {
    let arr = []
    this.names.forEach((item, index) => {
      console.log(item, index)
      let html = <li key={index}>{item}</li>
      arr.push(html)
    })
    return arr
  }
  render() {
    return (
      <div>
        <div>最丑的英雄</div>
        <ul>
          {/* react:会直接依次显示数组中的内容 */}
          <li>{this.names}</li>
          {this.show()}
    <li>{this.state.str}</li>
        </ul>
        <button onClick={this.show}>显示</button>
        <button onClick={this.showOk}>strxian</button>
      </div>
    )
  }
}
