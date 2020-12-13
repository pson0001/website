import React from 'react'
import './projects.scss'
import Peerview from './../../assets/peerview.png'
import Checkin from './../../assets/checkin.png'

const Projects = (props) => {
  console.log(props)
  return (
    <div className="projectsContainer">
      <div className="projects">
        <div className="projectRight">
          <div className="projectTitle">
            <span>PeerView</span>
          </div>
          <div className="projectNumber">
            <span>01</span>

            <img src={Peerview} alt="Peer View" className="projectImg"></img>
          </div>
          <div className="projectDesc">
            <span>
              This product is designed and developed for academic staff to
              request reviews from their peers. It digitizes the experience of
              the review process.
            </span>
          </div>
        </div>
        <div className="projectLeft">
          <div className="projectTitle">
            <span>Check in. Keep Safe.</span>
          </div>
          <div className="projectNumber">
            <img src={Checkin} alt="Check In" className="projectImg"></img>
            <span>02</span>
          </div>
          <div className="projectDesc">
            <span>
              As COVID-19 began to accelerate its spread in Spring 2020, this
              app was born to support Monash University community to return to
              campus safely.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Projects
