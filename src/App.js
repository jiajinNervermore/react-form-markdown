import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Forms from './pages/Forms'
import Markdown from './pages/Markdown'
export default class App extends Component {
  render() {
    return (
      <Router>
         <ul>
          <li><Link to="/forms">Forms</Link></li>
          <li><Link to="/markdown">Markdown</Link></li>
        </ul>
        <div>
        <Route path="/forms" component={Forms}/>
        <Route path="/markdown" component={Markdown}/>
        </div>
      </Router>
    )
  }
}
