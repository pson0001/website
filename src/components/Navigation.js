import React, { useState, useEffect } from 'react'
import './navigation.scss'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { ArrowLeft } from '../assets/Icon.js'
import { ArrowRight } from '../assets/Icon.js'
import gsap from 'gsap'

const Navigation = (props) => {
  const [load, setLoad] = useState(false)
  const history = useHistory()

  const tlNav = gsap.timeline()
  const projectTransition = gsap.timeline()
  const location = useLocation()

  useEffect(() => {
    setTimeout(() => {
      setLoad(true)
    }, 1000)
  }, [])

  useEffect(() => {
    if (load) {
      tlNav.from('.nav', 1, {
        y: 20,
        ease: 'power4.out',
        opacity: 0,
        stagger: { amount: 0.3 },
      })
    }
  }, [load])

  useEffect(() => {
    props.pathnameHandler(location.pathname)
  }, [location.pathname])
  useEffect(() => {
    if (location.pathname === '/about' && load) {
      projectTransition
        .to('.bgCircle', 1.2, {
          xPercent: -100,
          ease: 'power3.inOut',
        })
        .to('.intro', 1.2, {
          delay: -1.2,
          xPercent: -100,
          ease: 'power3.inOut',
        })
        .to('.aboutTransition', 0.8, {
          delay: -1.2,
          width: '100%',
          ease: 'power3.inOut',
        })
    }
  }, [location, load])

  useEffect(() => {
    props.pathnameHandler(location.pathname)
  }, [location.pathname])

  useEffect(() => {
    if (location.pathname === '/projects' && load) {
      projectTransition
        .to('.intro', 1.2, {
          xPercent: 100,
          ease: 'power3.inOut',
        })
        .to('.bgCircle', 1.2, {
          delay: -1.1,
          xPercent: 100,
          ease: 'power3.inOut',
        })
        .to('.projectsLink', 0.3, {
          delay: -1.3,
          opacity: 0,
          ease: 'power3.inOut',
        })
        .to('.aboutLink', 0.3, {
          delay: -1.3,
          opacity: 0,
          ease: 'power3.inOut',
        })
    }
  }, [location, load])

  // Handle project animation
  const projectHandler = (e) => {
    e.preventDefault()
    projectTransition
      .to('.intro', 1.2, {
        xPercent: 100,
        ease: 'power3.inOut',
      })
      .to('.bgCircle', 1.2, {
        delay: -1.1,
        xPercent: 100,
        ease: 'power3.inOut',
      })
      .to('.projectsLink', 0.3, {
        delay: -1.3,
        opacity: 0,
        ease: 'power3.inOut',
      })
      .to('.aboutLink', 0.3, {
        delay: -1.3,
        opacity: 0,
        ease: 'power3.inOut',
      })

    window.setTimeout(() => {
      history.push({
        pathname: '/projects',
        state: { detail: true },
      })
    }, 1300)
  }

  const projectBackHandler = (e) => {
    e.preventDefault()

    window.setTimeout(() => {
      history.push({
        pathname: '/',
        state: { detail: true },
      })
    }, 600)

    projectTransition
      .to('.bgCircle', 1.2, {
        xPercent: 0,
        ease: 'power3.inOut',
      })
      .to('.intro', 1.2, { delay: -1.2, xPercent: 0, ease: 'power3.inOut' })
  }

  // Handle about behaviour
  const aboutHandler = (e) => {
    e.preventDefault()

    projectTransition
      .to('.bgCircle', 1.2, {
        xPercent: -100,
        ease: 'power3.inOut',
      })
      .to('.intro', 1.2, { delay: -1.2, xPercent: -100, ease: 'power3.inOut' })
      .to('.aboutTransition', 0.8, {
        delay: -1.2,
        width: '100%',
        ease: 'power3.inOut',
      })
      .to('.projectsLink', 0.3, {
        delay: -1.3,
        opacity: 0,
        ease: 'power3.inOut',
      })
      .to('.aboutLink', 0.3, {
        delay: -1.3,
        opacity: 0,
        ease: 'power3.inOut',
      })

    window.setTimeout(() => {
      history.push({
        pathname: '/about',
        state: { detail: true },
      })
    }, 1500)
  }

  const aboutBackHandler = (e) => {
    e.preventDefault()

    window.setTimeout(() => {
      history.push({
        pathname: '/',
        state: { detail: true },
      })
    }, 600)

    projectTransition
      .to('.bgCircle', 1.2, {
        xPercent: 0,
        ease: 'power3.inOut',
      })
      .to('.intro', 1.2, { delay: -1.2, xPercent: 0, ease: 'power3.inOut' })
      .to('.aboutTransition', 0.8, {
        delay: -0.8,
        width: '0%',
        ease: 'power3.inOut',
      })
  }

  return (
    <div>
      {load ? (
        <div className="nav">
          <ul>
            <li className="projectsNav">
              {location.pathname === '/' ? (
                <div>
                  <Link
                    to="/projects"
                    className="projectsLink"
                    onClick={(e) => projectHandler(e)}
                  >
                    <ArrowLeft></ArrowLeft>
                    <span>Projects</span>
                  </Link>
                </div>
              ) : null}

              {location.pathname === '/about' ? (
                <div>
                  <Link
                    to="/"
                    className="aboutBackLink"
                    onClick={(e) => aboutBackHandler(e)}
                  >
                    <ArrowLeft></ArrowLeft>
                    <span>Back to Home</span>
                  </Link>
                </div>
              ) : null}
            </li>
            <li className="homeNav">
              <Link to="/">
                <div className="homeLink">
                  <span>P</span>
                </div>
              </Link>
            </li>
            <li className="aboutNav">
              {location.pathname === '/' ? (
                <div>
                  <Link
                    to="/about"
                    className="aboutLink"
                    onClick={(e) => aboutHandler(e)}
                  >
                    <span> About</span> <ArrowRight></ArrowRight>
                  </Link>
                </div>
              ) : null}
              {location.pathname === '/projects' ? (
                <Link
                  to="/"
                  className="projectBackLink"
                  onClick={(e) => projectBackHandler(e)}
                >
                  <span>Back to Home</span>
                  <ArrowRight></ArrowRight>
                </Link>
              ) : null}
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  )
}
export default Navigation
