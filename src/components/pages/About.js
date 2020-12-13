import React, { useState, useEffect } from 'react'
import './about.scss'
import gsap from 'gsap'
import ResearchImg from './../../assets/research.svg'
import AnalyseImg from './../../assets/analyse.svg'
import PrototypeImg from './../../assets/prototype.svg'
import UIDesignImg from './../../assets/uidesign.svg'
import BuildImg from './../../assets/build.svg'
import Email from './../../assets/email.svg'

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

          <div className="process">
            <p className="processTitle">
              <span>My Process</span> <span>Iterative one 😉</span>
            </p>

            <div className="processSteps">
              <div className="processImg">
                <img src={ResearchImg} alt="research"></img>
              </div>
              <div className="processDesc">
                <p>Research</p>
                <p>Gathering informations about the project and its goals.</p>
                <p>Researching the industry and competitors.</p>
              </div>
            </div>
            <div className="processSteps">
              <div className="processImg">
                <img src={AnalyseImg} alt="research"></img>
              </div>
              <div className="processDesc">
                <p>Analyse</p>
                <p>
                  Turning the research into a solution thats will meet the goals
                  and will be efficient for the users.
                </p>
              </div>
            </div>
            <div className="processSteps">
              <div className="processImg">
                <img src={PrototypeImg} alt="research"></img>
              </div>
              <div className="processDesc">
                <p>Prototype</p>
                <p>
                  Turning the research into a solution thats will meet the goals
                  and will be efficient for the users.
                </p>
              </div>
            </div>
            <div className="processSteps">
              <div className="processImg">
                <img src={UIDesignImg} alt="research"></img>
              </div>
              <div className="processDesc">
                <p>UI Design</p>
                <p>
                  Combining the form and the function to make sure your user
                  have a delightful experience.
                </p>
              </div>
            </div>
            <div className="processSteps">
              <div className="processImg">
                <img src={BuildImg} alt="research"></img>
              </div>
              <div className="processDesc">
                <p>Build</p>
                <p>
                  Following along the developpment to ensure that nothing was
                  left on the side.
                </p>
              </div>
            </div>
          </div>

          <div className="working">
            <p className="workingTitle">
              <span>Working Experience</span>
            </p>
            <div className="timeline">
              <p>Jan 2019 - Present</p>
              <p>
                UX UI Designer/Front-end Developer, Monash University eSolutions
              </p>
            </div>
            <div className="timeline">
              <p>Oct 2018 - Jan 2019</p>
              <p>UX UI Designer/Front-end Developer, Ledgerium</p>
            </div>
            <div className="timeline">
              <p>Dec 2017 - Feb 2018</p>
              <p>Summer Research Scholarship, Monash University SensiLab</p>
            </div>
            <div className="timeline">
              <p>Jan 2015 - Dec 2017</p>
              <p>Branding Designer, 314 Design Studio</p>
            </div>
          </div>

          <div className="contact">
            <p className="contactTitle">
              <span>Contact</span>
            </p>
            <p className="contactSubTitle">I’d love to hear from you.</p>
            <p className="contactDesc">
              If you are interested in my experience, you can pay a visit to my{' '}
              <a
                href="https://www.linkedin.com/in/ping-song-pson0001/"
                target="_blank"
                rel="noreferrer"
              >
                Linkedin
              </a>{' '}
              profile.
            </p>
            <p className="contactDesc">Thank you for stopping by!</p>
            <div
              className="email"
              onClick={() => {
                navigator.clipboard.writeText('pingsong0001@gmail.com')
              }}
            >
              <div className="icon">
                <img src={Email} alt="email"></img>
              </div>
              <div className="emailSpan">
                <div>pingsong0001@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
export default About
