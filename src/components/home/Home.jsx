import React from 'react'
import "./style.scss"
import whatsapp_logo from '../../assets/whatsapp.webp'
import Services from '../services/Services'
import Wedding from '../wedding/Wedding'
import Gallery from '../gallery/Gallery'
// import corousel1 from "../../assets/c3.webp"
// import corousel2 from "../../assets/w2.jpg"
// import corousel3 from "../../assets/c4.jpg"



function Home() {
  return (
    <>
    <div className='home'>

    <div className="whatsapp">
      <a href="https://wa.me/918889715148" target='_blank'>
        <img src={whatsapp_logo} alt="" />
      </a>
    </div>

    <div id="carouselExampleFade" className="carousel slide carousel-fade " data-bs-ride="carousel" >
  <div className="carousel-inner ">
    <div className="carousel-item corousel-img  bg-img1 active ">
      {/* <img src={corousel1} className="d-block w-100  " alt="..."/> */}
    </div>
    <div className="carousel-item corousel-img bg-img2 ">
      {/* <img src={corousel2} className="d-block w-100  " alt="..."/> */}
    </div>
    <div className="carousel-item corousel-img bg-img3">
      {/* <img src={corousel3} className="d-block w-100  " alt="..."/> */}
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>

    <Services />
    <Wedding />
    <Gallery />
    </>
  )
}

export default Home
