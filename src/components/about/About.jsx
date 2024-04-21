import React from 'react'
import './style.scss'
import photographer from '../../assets/photographer.jpg'

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
            <p>You need to use when you have to, such as when it’s raining. Or, when you just feel like it. Sometimes you wear it because you need to get the sun out of your eyes. Think about flash in the same way. Don’t use it all the time, but also don’t shy away from it. If it’s dark outside, use flash. If you know there’s time, and you have a good idea, and your clients will love it, then go for it. </p>
            <span>
            Photography is a way of feeling, of touching, of loving. What you have caught on film is captured forever… It remembers little things, long after you have forgotten everything.
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
