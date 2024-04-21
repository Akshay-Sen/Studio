import React from 'react'
import './style.scss'
import photographer from '../../assets/photographer.jpg'
// import studio from '../../assets/photographer1.jpg'

function About() {
  return (
    <>
      <div className='about'>
        <div className='img'>
          <img src={photographer} alt="" />
        </div>
        <div className='bio '>
          <div className="text right">
          <h2>About <span>Me</span> </h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium sint cum, quos voluptates quaerat dolorem saepe ad laudantium cupiditate dolor! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi necessitatibus est provident dignissimos, esse laborum fugiat non velit autem et labore sapiente veritatis quidem architecto cupiditate. </p>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates labore nemo et itaque. Dolorum numquam ad laboriosam commodi perspiciatis odio.
            </span> <br />
            <button>Learn more </button>
           
          </div>
        </div>
      </div>

      <div className="studio">
        <div className='bio '>
          <div className="text left">
          <h2>Our <span>Studio</span> </h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium sint cum, quos voluptates quaerat dolorem saepe ad laudantium cupiditate dolor! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi necessitatibus est provident dignissimos, esse laborum fugiat non velit autem et labore sapiente veritatis quidem architecto cupiditate. </p>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates labore nemo et itaque. Dolorum numquam ad laboriosam commodi perspiciatis odio.
            </span> <br />
            <button>Learn more </button>
          </div>
        </div>
        <div className='img'>
          <img src={photographer} alt="" />
        </div>
      </div>
    </>
  )
}

export default About
