import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cur: 0,
      ml: {transition:"1s all linear"}
    }
  }

  imgs = ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584790047232&di=abc83f1389eddd24edde55783aa084fb&imgtype=0&src=http%3A%2F%2Fimg3.doubanio.com%2Fview%2Fphoto%2Fl%2Fpublic%2Fp2218057850.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584790047405&di=2716114eaa99d25e378226d439ac072c&imgtype=0&src=http%3A%2F%2Fww3.sinaimg.cn%2Flarge%2F6b7c5633jw1ex6sfeuad6j20xc0hqdj3.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584790047403&di=aa918e3f10f2cbd465784bd78d97872d&imgtype=0&src=http%3A%2F%2Fimg1.gtimg.com%2Fent%2Fpics%2Fhv1%2F55%2F177%2F2009%2F130680415.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584790047397&di=00ec996b8eb62a650f1335bf1024c724&imgtype=0&src=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2018%2F10%2F15%2F110517.81470952.jpg']
  change(n) {
    let that = this
    that.setState({ cur: that.state.cur += n })
    if (that.state.cur === -1) {
      that.setState({ cur: that.imgs.length - 1 })
    }
    if (that.state.cur === that.imgs.length) {
      that.setState({ cur: 0 })
    }
  }
  doPrev() {

    let p = this.state.cur - 1;
    if (p == -1) p = this.imgs.length - 1;
    this.setState({ cur: p });
  }
  jiantou = ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584790239754&di=f02df76c2dd9a1727cdbbc8189cc9ade&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic2%2Fcover%2F00%2F33%2F40%2F5811211c2c990_610.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584790219692&di=f0ac9c52f0dc1a61c6abc26f627ee1fb&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic2%2Fcover%2F00%2F32%2F76%2F581104977c10f_610.jpg']
  showImg() {

    return <img src={this.imgs[this.state.cur]} className={this.state.ml} alt="" />

  }

  showY() {
    return (
      this.imgs.map((item, i) => {
        return <li key={i} className={this.state.cur == i ? 'active' : ''} onClick={() => {
          this.setState({ cur: i })
        }} alt=""></li>
      })
    )
  }
  render() {
    return (
      <div>
        <div className="carousel">
          <img src={this.jiantou[0]} alt="" className="left" onClick={() => { this.change(-1) }} />
          <img src={this.jiantou[1]} alt="" className="right" onClick={() => {
            this.change(1)
          }} />
          <div className="car-item">
            {this.showImg()}
          </div>
          <ul className="yuandian">{this.showY()}</ul>

        </div>
      </div>
    )
  }
}

// let p = this.state.cur + 1;
// if (p == this.imgs.length) p = 0;
// this.setState({ cur: p });