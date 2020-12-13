import React from 'react'
import './projects.scss'
import Peerview from './../../assets/peerview.png'

const Projects = (props) => {
  console.log(props)
  return (
    <div className="projectsContainer">
      <div className="projects">
        <div className="projectContainer">
          <div className="projectTitle">
            <span>PeerView</span>
          </div>
          <div>
            <span>01</span>
            <img src={Peerview} alt="Peer View" className="projectImg"></img>
          </div>
          <div>
            <span>
              This product is designed and developed for academic staff to
              request reviews from their peers. It digitizes the experience of
              the review process.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Projects
