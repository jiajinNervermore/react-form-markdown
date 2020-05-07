import React, { Component } from 'react'

export default class App extends Component {
  name = '朱朱侠';
  age = 16;
  isMarried = false
  names = ['朱朱侠', '席校长', '云龙']
  boss = { name: '小新' }
  render() {
    return (
      <div>
        <h2>{'{}'}能够输入那些代码</h2>
        <p>普通变量</p>
        <p>{this.name}</p>
        <p>{this.age}</p>
        <p>{this.isMarried}:bool类型没有输出</p>
        <p>{this.names}</p>
        {/* <p>{this.boss} :对象类型不能向外输出</p> */}
        <p>{this.names[0]}：数组通过下标取值</p>
        <p>{this.boss.name}:对象通过.属性名访问</p>
        <p>运算符</p>
        <p>{5 + 4 + 2 - 5 * 2 + 10 / 2}</p>
        <p>{5 > 4 ? 'true' : 'false'}</p>
        <p>{5 > 4 && '没毛病'}</p>
        <p>{5 < 4 || "怎么可能"}</p>
        <p>{14 & 1&&'ok'}</p>
        <p>{14 & 1?'ok':'no'}</p>
      </div>
    )
  }
}
