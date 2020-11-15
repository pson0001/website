import React, { useState, useEffect, useRef } from 'react'
import './home.scss'
import gsap from 'gsap'
import '@lottiefiles/lottie-player'
import { create } from '@lottiefiles/lottie-interactivity'

const Home = () => {
  const myRef = useRef()

  // Title Animation
  const tlTitle = gsap.timeline()
  useEffect(() => {
    tlTitle
      .from('.line p', 1, {
        y: 200,
        ease: 'power4.out',
        delay: 0.5,
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
      .from('.stairsContainer', 1, {
        opacity: 0,
        y: 200,
        ease: 'power4.out',
        delay: -2,

        stagger: { amount: 0.3 },
      })

    myRef.current.addEventListener('load', function (e) {
      // 4. configure the interactivity library
      create({
        player: '#firstLottie',
        mode: 'cursor',
        actions: [
          {
            position: { x: [0, 1], y: [-1, 2] },
            type: 'seek',
            frames: [0, 120],
          },
        ],
      })
    })
  }, [])

  return (
    <div>
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
              user-centered design process to optimize product life-cycle and
              elevate user experience.
            </p>
          </div>
        </div>
        <div className="stairsContainer">
          <div className="wall"></div>
          <lottie-player
            ref={myRef}
            id="firstLottie"
            mode="normal"
            src="https://assets8.lottiefiles.com/packages/lf20_jqg4pvou.json"
            style={{ width: '102%' }}
          ></lottie-player>
        </div>
        <div className="pageTransition"></div>
      </div>
    </div>
  )
}

export default Home
