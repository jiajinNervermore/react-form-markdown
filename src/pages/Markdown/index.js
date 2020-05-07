import React, { Component } from 'react'
import '../../assets/css/markdown/iconfont.css'
import './style.scss'
import marked from 'marked'
import 'github-markdown-css'
import IconButton from '../../components/IconButton'
import { createRef } from 'react'
export default class index extends Component {
  constructor(props) {
    super(props)
    this.textareaRef = React.createRef()
    this.state = {
      markdown: ''
    }
  }
  // 生命周期 constructor-->render-->componentDidMount
  componentDidMount() {
    var markdown = localStorage.getItem('markdownEditorValue');
    if (markdown) this.setState({ markdown });
    console.log(this.textareaRef.current)
  }
  // 当在输入区域内容变化时，赋值给右边的markdown区域，并且将它存入到localstorage
  onFileChange(name, e) {
    let _self = e.target.value
    this.setState({ [name]: _self })
    localStorage.setItem('markdownEditorValue', _self)
  }
  // 点击加粗
  BoldClick(e) {
    var text = this.textareaRef.current
    var start = text.selectionStart
    var end = text.selectionEnd
    console.log(start, end)
    var md = this.state.markdown
    md = md.substring(0, start) + '**' + md.substring(start, end) + '**' + md.substring(end)
    // 当有选中内容时
    if (start && end) {
      this.setState({ markdown: md })
    }
  }
  render() {
    var html = marked(this.state.markdown)
    return (
      <div className="markdowns columns">
        <div className="inputarea column">
          <div className="icons">
            <IconButton icon="icon-cuti" onClick={e => this.BoldClick(e)} />
            <IconButton icon="icon-xieti" />
            <IconButton icon="icon-Underline" />
            <IconButton icon="icon-fenlei" />
          </div>
          <textarea ref={this.textareaRef} value={this.state.markdown} onChange={e => this.onFileChange('markdown', e)} className="textarea"></textarea>
        </div>
        <div className="textview column markdown-body" dangerouslySetInnerHTML={{ __html: html }}>

        </div>
      </div>
    )
  }
}
