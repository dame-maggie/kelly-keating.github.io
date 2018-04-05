import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Nav from './Nav'
import Title from './Title'
import Projects from './Projects'

const App = () => (
  <Router>
    <div id='app-container'>
      <Nav />
      <Route exact path='/' component={Title} />
      <Route exact path='/' component={Projects} />
      <Route exact path='/projects' component={Projects} />
    </div>
  </Router>
)

export default App
