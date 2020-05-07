import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: ''
    }

  }
  likeMo(name) {
    this.setState({ name })
  }
  likeDo = name => { this.setState({ name }) }
  render() {
    return (
      <div>
        <h1>作业1</h1>
        <h3>你觉得朱朱侠喜欢谁</h3>
        {/**注释快捷键 */}
        <b style={{ color: '#ff0033', fontSize: '20px' }}>猜猜我是谁：{this.state.name}</b>
        <div>
          <button onClick={() => {
            this.setState({ name: '小小mo' })
          }}>小小mo</button>
          <button onClick={() => {
            this.setState({ name: '张云龙' })
          }}>张云龙</button>
          <button onClick={() => {
            this.setState({ name: '朱嘿嘿' })
          }}>朱嘿嘿</button>
          {/* es6之前的写法 */}
          <button onClick={this.likeMo.bind(this, '恩恩额')}>恩恩额</button>
          <button onClick={()=>{
            this.likeDo('嘟嘟嘟')
          }}>嘟嘟嘟</button>
        </div>
      </div>
    )
  }
}
