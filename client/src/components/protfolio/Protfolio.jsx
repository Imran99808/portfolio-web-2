import React, { useEffect, useRef } from 'react'
import {sCroll} from '../../scrollLogic'

import './Protfolio.css'
import {data} from './data'
import {loop} from '../../loop'
import Move  from './../../dragable/Move'
let  show;
function Protfolio() {
   // const [show,setShow]
  
      if(window.screen.width<=800){
         window.screen.width<=800&&600<=window.screen.width?show=2:show=1;
      }
  
   console.log(show)
  
    const settings={
     
      
        //  dots:1,
        iShow:show?show:3,
        // circle:true,
       //  prevArrow:<PrevArrow/>,
       //  NextArrow:<NextArrow/>
       
       
 
    }
// ......................................

const element=useRef();
useEffect(()=>{
 
   console.log(element.current.offsetTop)
    sCroll('#protfolio',element.current.offsetTop)
   
 })
 
    
  return (
     <section className="protfolio" id='protfolio'  ref={element}>
        <div className="container pContainer  inner-container">
          <div className="pHeader">
      
            <div className="title">My Amazing Work</div>
           
           

          </div>
          <div className="items">
          <Move {...settings} >
                {loop(data.all,(value)=>{

                    return(
                        
                        <div className="p-item">
                              <div className="p-cover">
                                 <img src={`/${value}`}alt="" />
                                 </div>
                                 <div className="info">
                                    <span>Email increase</span>
                                    <p>Lorem ipsum dolor sit amet consectetur loedm adj wkwd sssdkk kdo sksldkwqjqei djhw fwef csdffbfr rerkls cdgwlc cdes sx saldh,,dqeo swqkwd xaldk dvjdfghv dkeewjdj xjdjjqw dkqwjdnb kqjk sqkwjdnmq kqjjq wjefwl lqjdw dlqwlwekjdhqkwjd kwjdb.cdgwlc cdes sx saldh,,dqeo swqkwd xaldk dvjdfghv dkeewjdj xjdjjqw dkqwjdnb kqjk sqkwjdnmq kqjjq wjefwl lqjdw dlqwlwekjdhqkwjd kwjdb!</p>
                                 </div>
                         </div>        
                    )
                })}
            
            </Move>
          </div>
        </div>
     </section>
  )
}

export default Protfolio
