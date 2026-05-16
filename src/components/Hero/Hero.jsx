import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpeg'

const Hero = () => {
  return (
    <div id='home' className='hero'>

      <div className="hero-image">
        <img src={profile_img} alt="Shubham Kumar" />
      </div>

      <h1>
        <span>Hi, I'm Shubham Kumar</span>
        <br />
        Java Full Stack Developer
      </h1>

      <p>
        Passionate Java Full Stack Developer with strong knowledge of Core Java,
        JDBC, Servlets, Spring Boot, SQL, React.js, and REST APIs.

        Skilled in building scalable and responsive web applications with clean
        and efficient code. Enthusiastic about solving real-world problems,
        learning modern technologies, and continuously improving problem-solving
        skills through Data Structures & Algorithms.
      </p>

      <div className='hero-action'>

        <div className='hero-connect'>
          <a href="#contact">Hire Me</a>
        </div>

        <a
  href="/Shubham_Resume.pdf"
  download
  className='hero-resume'
>
  Download Resume
</a>

      </div>

    </div>
  )
}

export default Hero