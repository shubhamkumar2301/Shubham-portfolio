import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.jpeg'

const About = () => {
  return (
    <div id='about' className='about'>

      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="about-sections">

        <div className="about-left">
          <img src={profile_img} alt="Shubham Kumar" />
        </div>

        <div className="about-right">

          <div className="about-para">
            <p>
              Passionate Java Full Stack Developer with hands-on experience in
              Core Java, JDBC, Servlets, Spring Boot, SQL, React.js, and REST APIs.
            </p>

            <p>
              I enjoy building scalable web applications and solving real-world
              problems through clean and efficient code.
            </p>

            <p>
              Currently focused on improving Data Structures & Algorithms and
              backend development skills while building practical projects.
            </p>
          </div>

          <div className="about-skills">

            <div className="about-skill">
              <p>Core Java</p>
              <hr style={{ width: "85%" }} />
            </div>

            <div className="about-skill">
              <p>Spring Boot</p>
              <hr style={{ width: "75%" }} />
            </div>

            <div className="about-skill">
              <p>REST API</p>
              <hr style={{ width: "70%" }} />
            </div>

            <div className="about-skill">
              <p>React.js</p>
              <hr style={{ width: "72%" }} />
            </div>

            <div className="about-skill">
              <p>Git & GitHub</p>
              <hr style={{ width: "80%" }} />
            </div>

          </div>

        </div>
      </div>

      <div className="about-achievements">

        <div className="about-achievement">
          <h1>3+</h1>
          <p>Projects Completed</p>
        </div>

        <div className="about-achievement">
          <h1>1</h1>
          <p>GFG Hackfest Certificate</p>
        </div>

        <div className="about-achievement">
          <h1>1</h1>
          <p>Internship Certificate</p>
        </div>

      </div>

    </div>
  )
}

export default About