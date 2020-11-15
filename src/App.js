import React from 'react'
import './App.scss'
import Main from './components/Main'
import Navigation from './components/Navigation'
import { BrowserRouter as Router } from 'react-router-dom'
import gsap from 'gsap'

function App() {
  gsap.to('body', 0, { css: { visibility: 'visible' } })
  return (
    <Router>
      <div>
        <Navigation></Navigation>
        <Main></Main>
      </div>
    </Router>
  )
}

export default App
