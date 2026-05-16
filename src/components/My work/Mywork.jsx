import React from 'react'
import './Mywork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Mywork = () => {
  return (
    <div id='portfolio' className='mywork'>

      <div className="mywork-title">
        <h1>My Projects</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="mywork-container">

        {mywork_data.map((work, index) => {
          return (

            <div
              key={index}
              className='work-card'
              onClick={() => window.open(work.w_link, "_blank")}
            >

              <img src={work.w_img} alt="" />

              <div className="work-overlay">
                <h2>{work.w_name}</h2>
                <p>View Project</p>
              </div>

            </div>
          )
        })}

      </div>

      <div className="mywork-showmore">
        <p>More Projects Coming Soon</p>
        <img src={arrow_icon} alt="" />
      </div>

    </div>
  )
}

export default Mywork