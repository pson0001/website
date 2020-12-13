import React, { useState, useEffect } from 'react'
import './App.scss'
import Main from './components/Main'
import Navigation from './components/Navigation'
import { BrowserRouter as Router } from 'react-router-dom'
import gsap from 'gsap'

const App = () => {
  gsap.to('body', 0, { css: { visibility: 'visible' } })

  const [load, setLoad] = useState(false)
  // const location = useLocation()

  useEffect(() => {
    setTimeout(() => {
      setLoad(true)
    }, 600)
  }, [])

  const tlTitle = gsap.timeline()

  useEffect(() => {
    if (load) {
      tlTitle
        .from('.bgCircle', 1, {
          left: '100vw',
          top: '100vh',
          height: '1000px',
          width: '1000px',
          ease: 'power3.inOut',
        })
        .from('.line p', 1, {
          y: 200,
          ease: 'power4.out',

          skewY: 7,
          stagger: { amount: 0.3 },
        })
        .from('.line .bubble', 1, {
          y: 200,
          ease: 'power4.out',
          delay: -0.5,
          skewY: 7,
          stagger: { amount: 0.3 },
        })
    }
  }, [load])

  const [pathName, setPathName] = useState('')
  const pathnameHandler = (pathname) => {
    setPathName(pathname)
  }

  return (
    <Router>
      <div className="contentContainer">
        <Navigation pathnameHandler={pathnameHandler}></Navigation>

        <Main></Main>
      </div>

      <div>
        {load ? (
          <div className="introContainer">
            <div className="intro">
              <div className="line">
                <p className="subTitle">I'm Ping Song</p>
              </div>
              <div className="line">
                <p className="title">I'm a Designer,</p>
              </div>
              <div className="line">
                <p className="title">
                  Who <span className="reverse">Draws</span> and{' '}
                  <span className="reverse">Codes</span>
                </p>
              </div>
              <div className="line offest">
                <div className="bubble one">UX/UI</div>
              </div>
              <div className="line offest">
                <div className="bubble two">
                  <span> Front </span>
                  <span> -end</span>
                </div>
              </div>
              <div className="line space">
                <p className="desc">
                  I collaborate with cross-functional teams throughout the
                  user-centered design process to optimize product life-cycle
                  and elevate user experience.
                </p>
              </div>
            </div>

            <div className="bgCircle"></div>
            {/* <div className="pageTransition"></div> */}
            <div className="aboutTransition"></div>
          </div>
        ) : null}
      </div>
    </Router>
  )
}

export default App
