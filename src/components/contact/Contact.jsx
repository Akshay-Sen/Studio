import React from 'react'
import "./style.scss"
// import contact_img from '../../assets/contact3.jpg'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <div>

      <div className="back-img">
        <span>Contact Us</span>
      </div>

      <div className="contact">
        <div className="contact-info">
          <div className="info">
            <div className="icon">
              <FaLocationDot />
            </div>
            <div className="text">
              <h3>Address</h3>
              <p>4671 Sugar camp road, <br /> Ratlam,Madhya Pradesh, <br /> 457339 </p>
            </div>
          </div>

          <div className="info">
            <div className="icon">
              <FaPhoneAlt />
            </div>
            <div className="text">
              <h3>Phone</h3>
              {/* <p>700-072-7819</p> */}
              <a href="tel:+91 888 9715 148">+91 888 9715 148</a>
            </div>
          </div>

          <div className="info">
            <div className="icon">
              <MdEmail />
            </div>
            <div className="text">
              <h3>Email</h3>
              {/* <p>kelwastudio@gmail.com</p> */}
              <a href="mailto:akshaysen6150@gmail.com">kelwastudio@gmail.com</a>
            </div>
          </div>
        </div>

        <div className="form">
          <form action="https://formspree.io/f/mpzvynqe" method="POST">
          <input type="text" name="Name" placeholder='Enter your name' />
          <input type="text" name="Number" placeholder='Contact Number' />
          <input type="email" name="Email" placeholder='Enter your email' />
          <textarea name="Message" id="" cols="30" rows="5" placeholder='Message'></textarea>
          <button type='submit' className='btn'>Send</button>
          </form>
        </div>

      </div>

    </div>
  )
}

export default Contact
