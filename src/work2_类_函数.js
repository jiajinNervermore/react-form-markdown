import React, { Component } from 'react'
import './App.css';
function Photo(props) {
  return (<div className="item">
    <img src={props.src} alt="" />
    <div>{props.title}</div>
  </div>)
}
class PhotoC extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (<div className="item">
      <img src={this.props.src} alt="" />
      <div>{this.props.title}</div>
    </div>)
  }
}
export default class App extends Component {

  render() {
    return (
      <div>
        <Photo src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1584757745&di=a260f961a37976635b42561fd90ed943&src=http://5b0988e595225.cdn.sohucs.com/q_70,c_zoom,w_640/images/20180709/84ade42a4785477982a950fdb136ac5f.jpeg" title="张韶涵传黑色风衣" />
        <PhotoC src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1584757745&di=a260f961a37976635b42561fd90ed943&src=http://5b0988e595225.cdn.sohucs.com/q_70,c_zoom,w_640/images/20180709/84ade42a4785477982a950fdb136ac5f.jpeg" title="张韶涵传黑色风衣" />
      </div>

    )
  }
}
