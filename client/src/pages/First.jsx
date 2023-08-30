import React from 'react'

import {Route} from '../routing'

import Main from '../components/main/Main'
import Bar from '../components/bar/Bar'
import About from '../components/about/About'
import Service from '../components/services/Service'
import Protfolio from '../components/protfolio/Protfolio'
import Testimonial from '../components/Testimonials/Testimonial'
import Banner from '../components/banner/Banner'

function First() {
  console.log(window.location.hash)
 
 
   

    
   
  return (

    <>
    
   <Main/>
   <About/>  

       <Protfolio/>  
      <Service/>
       <Testimonial/> 
      {/* <Banner/>  */}
       
    
     
   
     
    </>
  )
}

export default First
