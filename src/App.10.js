import React, { Component } from 'react'

export default class App extends Component {
  content = ['javascript', 'html', 'css', 'php', '张兵', '博客', '搞笑', '娱乐', 'mysql']
  show() {
    return this.content.map((item, i) => {
      return (<span key={i}>{item}</span>)
    })

  }
  render() {
    return (
      <div>
        <div className="d1">
          <div className="header">热门标签</div>
          {this.show()}
        </div>
      </div >
    )
  }
}
