import React, { useEffect, useRef } from 'react'
// import { Pagination } from 'swiper'
// import 'swiper/css/pagination'
// import { Swiper,SwiperSlide } from 'swiper/react'
// import 'swiper/css'
import {sCroll} from '../../scrollLogic'

import {data} from'./data.js'
import Move from '../../dragable/Move';
import {loop} from '../../loop'

import './Testimonial.css'
function Testimonial() {

  const settings={
     
      
       dots:1,
       iShow:1,
       circle:true
      
      

   }
   
//  console.log(data) 

// ................................
const element=useRef();
  

useEffect(()=>{

  console.log(element.current.offsetTop)
   sCroll('#testimonial',element.current.offsetTop)
  
})




  return (
    <section  id='testimonial'>
    <div className="t-wrapper container inner-container"  ref={element}>
        <div className="t-heading">
            <span>Clients always get </span>
            <span>Exceptional Work </span>
            <span>from me...</span>
            <div className="blur t-blur1" style={{background:'var(--purple)'}}></div>
             <div className="blur t-blur2" style={{background:'#ABF1FF94'}}></div> 
        </div>
        <Move {...settings}  >
          {loop(data,(item)=>{
            return(

               <div className="testimonial">
               <img src={item.img} alt="" />
               <span>{item.review}</span>
            </div>
            )

          }) }
        </Move>   
    </div>
    </section>
  )
         }

export default Testimonial
