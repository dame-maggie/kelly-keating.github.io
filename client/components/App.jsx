import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Nav from './Nav'
import Title from './Title'
import Projects from './Projects'
import Footer from './Footer'

const App = () => (
  <Router>
    <div className='app-container'>
      <Nav />
      <Route exact path='/' component={Title} />
      <Route exact path='/' component={Projects} />
      <Footer />
    </div>
  </Router>
)

export default App
