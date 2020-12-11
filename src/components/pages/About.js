import React, { useState, useEffect } from 'react'
import './about.scss'
import gsap from 'gsap'

const About = () => {
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
        .from('.aboutTitleLine p', 1, {
          y: 200,
          ease: 'power4.out',
          skewY: 7,
          stagger: { amount: 0.3 },
        })
        .from('.aboutLine p', 1, {
          y: 200,
          delay: -0.8,
          ease: 'power4.out',
          skewY: 7,
          stagger: { amount: 0.1 },
        })
        .from('.aboutDescLine p', 1, {
          y: 200,
          delay: -1,
          ease: 'power4.out',
          skewY: 7,
          stagger: { amount: 0.1 },
        })
    }
  }, [load])

  return (
    <div className="aboutContainer">
      {load ? (
        <div className="about">
          <div className="aboutIntro">
            <div className="aboutTitleLine">
              <p className="title reverse">Hello, I'm Ping</p>
            </div>
            <div className="aboutLine">
              <p className="subTitle">
                I’m a UX UI designer / Front-end developer
              </p>
            </div>
            <div className="aboutLine">
              <p className="subTitle">in Melbourne, Australia.</p>
            </div>
            <div className="aboutDescLine">
              <p className="paragraph">
                I am passionate about discovering insights, creativity, solving
                problems, interaction and motion design.
              </p>
            </div>
          </div>
          <div>
            <div className="process">
              <p className="processTitle">
                <span>My Process</span> <span>Iterative one 😉</span>
              </p>
            </div>
            <div>
              <div>img</div>
              <div>
                <div>Research</div>
                <div>
                  Gathering informations about the project and its goals.
                  Researching the industry and competitors.
                </div>
              </div>
            </div>
            <div>
              <div>img</div>
              <div>
                <div>Analyze</div>
                <div>
                  Turning the research into a solution thats will meet the goals
                  and will be efficient for the users.
                </div>
              </div>
            </div>
            <div>
              <div>img</div>
              <div>
                <div>Prototype</div>
                <div>
                  Turning the research into a solution thats will meet the goals
                  and will be efficient for the users.
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
export default About
