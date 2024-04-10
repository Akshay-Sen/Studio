import React, { useState } from 'react'
import "./style.scss"
import { Link, NavLink } from 'react-router-dom'
import project1 from '../../assets/pre-img2.jpg'
import project2 from '../../assets/prewedding2.jpg'
import project3 from '../../assets/pre-img6.jpg'
import project4 from '../../assets/pre-img4.avif'
import project5 from '../../assets/pre-img5.jpg'
import project6 from '../../assets/pre-img9.jpg'

// Wedding images 
import img1 from '../../assets/wed-img1.webp'
import img2 from '../../assets/wed-img6.jpg'
import img3 from '../../assets/wed-img3.jpg'
import img4 from '../../assets/wed-img4.jpeg'
import img5 from '../../assets/wed-img5.webp'
import img6 from '../../assets/wed-img10.jpeg'

import video from '../../assets/video-clip.mp4'




function Wedding() {

    return (
        <>
            {/* Pre-wedding projects  */}
            <div className='pre-wedding'>
                <div className="banner-img prewed">
                    <h4>Pre-Wedding</h4>
                </div>

                <div className="projects part-1">
                    <div className="work">
                        <Link to='/project/sonu-ravi/' target='_top' >
                            <img src={project1} alt="" />
                            <span>Sonu & Ravi</span>
                        </Link>
                    </div>
                    <div className="work ">
                        <Link to='/project/neelu-piyush/' target='_top' >
                            <img src={project2} alt="" />
                            <span>Neelu & Piyush</span>
                        </Link>
                    </div>
                    <div className="work">
                    <Link to='/project/preety-hemant/' target='_top' >
                        <img src={project3} alt="" />
                        <span>Prity & Hemant</span>
                        </Link>
                    </div>
                </div>

                <div className="projects part-2">
                    <div className="work">
                    <Link to='/project/tina-anil/' target='_top' >
                        <img src={project4} alt="" />
                        <span>Tina & Anil</span>
                        </Link>
                    </div>
                    <div className="work">
                    <Link to='/project/payal-pawan/' target='_top' >
                        <img src={project5} alt="" />
                        <span>Payal & Pawan</span>
                        </Link>
                    </div>
                    <div className="work">
                    <Link to='/project/arpita-ashutosh/' target='_top' >
                        <img src={project6} alt="" />
                        <span>Ashu & Arpita</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Wedding Projects  */}
            <div className='wedding'>
                <div className="banner-img wed">
                    <h4>Wedding</h4>
                </div>

                <div className="projects part-1">
                    <div className="work">
                        <img src={img1} alt="" />
                        <span>Sonu & Ravi</span>
                    </div>
                    <div className="work">
                        <img src={img2} alt="" />
                        <span>Neelu & Piyush</span>
                    </div>
                    <div className="work">
                        <img src={img3} alt="" />
                        <span>Prity & Hemant</span>
                    </div>
                </div>

                <div className="projects part-2">
                    <div className="work">
                        <img src={img4} alt="" />
                        <span>Tina & Anil</span>
                    </div>
                    <div className="work">
                        <img src={img5} alt="" />
                        <span>Payal & Pawan</span>
                    </div>
                    <div className="work">
                        <img src={img6} alt="" />
                        <span>Ashu & Arpita</span>
                    </div>
                </div>
            </div>

            {/* Films  */}
            <div className='video-films'>
                <div className="films">
                    <video autoPlay loop muted >
                        <source type='video/mp4' src={video} alt="Films" />
                    </video>
                    <h4>Films</h4>
                </div>

                <div className="videos part-1">
                    <div className="video">
                        <iframe src="https://www.youtube.com/embed/7pVpquui3Rc?si=cWGUFO9JyW7MwDqb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div className="video">
                        <iframe src="https://www.youtube.com/embed/8DZ-HUCHUxk?si=aUQXRzPM9E2TLhld" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>

                </div>

                <div className="videos part-2">
                    <div className="video">
                        <iframe src="https://www.youtube.com/embed/DENYdf0n9wo?si=kN7zjwAT0CTANJQs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div className="video">
                        <iframe src="https://www.youtube.com/embed/N6f0e-EO2P4?si=IWC7-BQ8V8HZhdKu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>

            </div>


        </>
    )
}

export default Wedding