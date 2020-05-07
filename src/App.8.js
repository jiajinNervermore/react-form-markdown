import React, { Component } from 'react'

export default class App extends Component {
  data = [{ name: '云龙', age: '30', sex: '男' }, { name: '秀琴', age: '30', sex: '女' }, { name: '楚云飞', age: '30', sex: '男' }]
  show1() {
    let arr = [];
    this.data.map((item, i) => {
      let li = <li key={i}>{item.name}--{item.age}--{item.sex}</li>
      arr.push(li)
    })
    return arr
  }
  show2() {
    let arr = [];
    this.data.map((item, i) => {
      let tr = (<tbody key={i}><tr><td>{i + 1}</td><td>{item.name}</td><td>{item.age}</td><td>{item.sex}</td></tr></tbody>)
      arr.push(tr)
    })

    return arr
  }
  render() {
    return (
      <div>
        <ul>
          {this.show1()}
        </ul>
        {/* {this.show2} */}
        <table>
          <thead>
            <tr>
              <th>序号</th>
              <th>姓名</th>
              <th>年龄</th>
              <th>性别</th>
            </tr>
          </thead>
          {this.show2()}
        </table>
      </div>
    )
  }
}
