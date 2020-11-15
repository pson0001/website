import React, { useState, useEffect } from 'react'
import './navigation.scss'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { ArrowLeft } from '../assets/Icon.js'
import { ArrowRight } from '../assets/Icon.js'
import gsap from 'gsap'

const Navigation = () => {
  const history = useHistory()
  const projectTransition = gsap.timeline()
  const navTransition = gsap.timeline()
  const backProjectTransition = gsap.timeline()
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/projects') {
      navTransition
        .to('.projects', 0.2, { opacity: 0 })
        .to('.about', 0.2, { opacity: 0 })
        .to('.projectBack', 0.2, { y: -22, opacity: 1 })
    }
    if (location.pathname === '/') {
      navTransition
        .to('.projects', 0.2, { opacity: 1 })
        .to('.about', 0.2, { opacity: 1 })
        .to('.projectBack', 0.2, { y: 0, opacity: 0 })
    }
  }, [location.pathname])

  // Handle project animation
  const ProjectHandler = (e) => {
    e.preventDefault()
    projectTransition
      .to('.stairsContainer', 1, {
        xPercent: 100,
        delay: 0.5,
        ease: 'power3.inOut',
      })
      .to('.pageTransition', 1, {
        xPercent: 100,
        delay: -1,
        ease: 'power3.inOut',
      })
      .to('.intro', 0.5, {
        opacity: 0,
        delay: -1.2,
        ease: 'power3.inOut',
      })
      .to('.projects', 0.5, {
        opacity: 0,
        delay: -1.2,
        ease: 'power3.inOut',
      })
      .to('.about', 0.2, { delay: -1.2, opacity: 0 })

    window.setTimeout(() => {
      history.push({
        pathname: '/projects',
        state: { detail: true },
      })
    }, 1500)
  }

  const backHandler = (e) => {
    e.preventDefault()
    backProjectTransition
      .to('.projectPageTransition', 1, {
        width: '100%',
        ease: 'power3.inOut',
      })
      .to('.projectBack', 0.2, { y: -22, opacity: 0, delay: -1 })
    window.setTimeout(() => {
      history.push({
        pathname: '/',
        state: { detail: true },
      })
    }, 1000)
  }

  return (
    <div className="nav">
      <ul>
        <li className="projectsNav">
          <Link
            to="/projects"
            onClick={(e) => ProjectHandler(e)}
            className="projects"
          >
            <ArrowLeft></ArrowLeft>
            <span>Projects</span>
          </Link>
          <Link
            to="/home"
            className="aboutBack"
            onClick={(e) => backHandler(e)}
          >
            Back to Home
          </Link>
        </li>
        <li className="home">
          <Link to="/">
            <div className="homeP">
              <span>P</span>
            </div>
          </Link>
        </li>
        <li className="aboutNav">
          <Link to="/about" className="about">
            <span> About</span> <ArrowRight></ArrowRight>
          </Link>
          <Link
            to="/home"
            className="projectBack"
            onClick={(e) => backHandler(e)}
          >
            <span>Back to Home</span>
            <ArrowRight></ArrowRight>
          </Link>
        </li>
      </ul>
    </div>
  )
}
export default Navigation
