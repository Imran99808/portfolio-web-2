import React, { useEffect, useRef, useState } from 'react'
import './About.css'
import about from '../../assets/about.png'
import {loop} from '../../loop'
import {sCroll} from '../../scrollLogic'
import {Link} from '../../routing'

const informations={
     skills:[
        {
          title:'Ui/Ux',
          des:'Company product design'
        },
        {
            title:'Seo',
            des:'Business sites ranking for'
          },
          {
            title:'Digital Marketing',
            des:'Market analyger'
          },
     ],

     experience:[
        {
          title:'2021-current',
          des:'wok digital marketing professionally'
        },
        {
            title:'2019-2021',
            des:'internse hig pofessional agencey or job freelace work'
          },
          {
            title:'2018-2019',
            des:'team work and personal prjec work '
          },
          {
            title:'2015-2017',
            des:'learn digitL market and increse knowledge'
          }
     ],
     education:[
        {
          title:'2021-current',
          des:'studdy runnig marketing or digital marketing'
        },
        {
            title:'2020-2021',
            des:'start general marketing '
          },
          {
            title:'2015-2020',
            des:'digitak market is my patient work '
          },
     ]

}
function About() {
    const[key,setKey]=useState('skills')

    const handler=(e)=>{
        console.log(e.target.getAttribute('value'))
        setKey(e.target.getAttribute('value'))
    };
  ///.........................
  const element=useRef();
  
console.log('about')
  useEffect(()=>{
    console.log(element.current.offsetTop)
    sCroll('#about',element.current.offsetTop)
  })
  
 





  return (
   <section className='about' id='about'
   ref={element}
   >
    <div className="container aContainer inner-container">
        <div className="cover">
      <img src={about} alt="" />  
        </div>
        <div className="details">
           <div className="title">Abbout ME</div>
           <p>As a driven digital marketer, I wield creativity and data analytics to craft effective campaigns that elevate brand presence and generate tangible results. Passionate about the digital landscape, I thrive on evolving strategies and driving impactful growth for businesses.</p>
            <Link to={'/about'}>Learn more</Link>
            <div className="experience">
                <li className={`${key==='skills'&&'alive'}`} value='skills' onClick={handler}>Skills</li>
                <li className={`${key==='experience'&&'alive'}`} value='experience' onClick={handler}>Experience</li>
                <li className={`${key==='education'&&'alive'}`} value='education' onClick={handler}>Education</li>
            </div>
            <hr />
            <div className="eDetails">
                 
                 {loop(informations[key],(data)=>{

                     return(
                          
                <div className="i">
                <li>
                    {data.title}
                    </li>
                <span>{data.des}</span>
                </div>
                     )
                 })}
              
           
           </div>
           
        </div>
    </div>

   </section>
  )
}

export default About
