import React, { useEffect, useRef } from 'react'
import  './service.css'
import {sCroll} from '../../scrollLogic'

function Service() {


  const element=useRef();
  

  useEffect(()=>{
 
    console.log(element.current.offsetTop)
     sCroll('#services',element.current.offsetTop)
    
  })
  


  return (
    <section className="service" id='services'
    ref={element}
    >
        <div className="container sContainer inner-container">
           <div className="head">
            <span>Our Service</span>
           

            
           </div>
           <div className="items">
            <div className="item">
            <i aria-hidden="true" class="fas fa-search"></i>
            <span>Search Engine Optimization (International SEO)</span>
            <p>SEO targets unpaid traffic rather than direct traffic or paid traffic.</p>
            </div>

            <div className="item">
            <i aria-hidden="true" class="fas fa-users"></i>
            <span>Social Media Marketing (SMM)</span>
            <p>To build a company’s brand, increase sales, and drive website traffic.</p>
            </div>


            <div className="item">
            <i aria-hidden="true" class="fas fa-search-location"></i>
            <span>Local SEO</span>
            <p>Be top on organic local search results on Google, Grow Your local business.</p>
            </div>

            <div className="item">
            <i aria-hidden="true" class="fab fa-google"></i>
            <span>Google Ads</span>
            <p>PPC ads through Google Ads are one of the easiest ways to get more leads for your business.</p>
            </div>




            <div className="item">
            <i aria-hidden="true" class="fab fa-youtube"></i>
            <span>YouTube Marketing and SEO</span>
            <p>Are you tired of having no audience on your YouTube Channel? Don’t worry! We will support you with all your services.</p>
            </div>
           </div>
        </div>
    </section>
  )
}

export default Service
