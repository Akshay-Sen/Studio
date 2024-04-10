import React, { useState } from 'react'
import './style.scss'
import { GrClose } from "react-icons/gr";

import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpeg'
import img5 from '../../assets/img5.jpg'
import img6 from '../../assets/img6.jpg'
import img7 from '../../assets/c3c.jpg'
import img8 from '../../assets/p5.jpg'
import img9 from '../../assets/p6.jpg'
import img10 from '../../assets/p7.jpg'
import img11 from '../../assets/p8.webp'
import img12 from '../../assets/p9.jpg'
import img13 from '../../assets/p10.jpg'
import img14 from '../../assets/p11.jpg'
import img15 from '../../assets/p12.jpg'
import img16 from '../../assets/p13.jpg'
import img17 from '../../assets/p14.jpg'




function Gallery() {

  let data = [
    {
      id : 1,
      imgSrc : img1
    },
    {
      id : 2,
      imgSrc : img2
    },
    {
      id : 3,
      imgSrc : img3
    },
    {
      id : 4,
      imgSrc : img4
    },
    {
      id : 5,
      imgSrc : img5
    },
    {
      id : 6,
      imgSrc : img6
    },
    {
      id : 7,
      imgSrc : img7
    },
    {
      id : 8,
      imgSrc : img8
    },{
      id : 9,
      imgSrc : img9
    },
    {
      id : 10,
      imgSrc : img10
    },
    {
      id : 11,
      imgSrc : img11
    },
    {
      id : 12,
      imgSrc : img12
    },
    {
      id :13 ,
      imgSrc : img13
    },
    {
      id : 14,
      imgSrc : img14
    },
    {
      id : 15,
      imgSrc : img15
    },
    {
      id : 16,
      imgSrc : img16
    },
    {
      id : 17,
      imgSrc : img17
    },
  ]

  const [model, setModel] = useState(false)
  const [tempImg, setTempImg] = useState('')

  const getImg = (imgSrc) => {
    setTempImg (imgSrc);
    setModel(true);
  }

  return (
    <>

    <div className={model? "model open" : "model"}>
      <img src={tempImg} alt="" />
      <GrClose onClick={() => {setModel(false)}} />
    </div>

    <div className='container'>
    <h1>Image Gallery</h1>
    <div className='gallery'>
      {
        data.map((item, index) => {
          return (
            <div className="pics" key={index} onClick={()=> getImg(item.imgSrc)}>
              <img src={item.imgSrc} style={{width : '100%'}} />
            </div>
          )
        })
      }
    </div>
    </div>
    </>
  )
}


export default Gallery
