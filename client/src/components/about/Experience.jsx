import React, { useState } from 'react'
import {data} from './data'
import { loop } from '../../loop'

function Experience() {
   const[key,setK]=useState('education');

   const handler=(e)=>{
      setK(e.target.getAttribute('value'))
   }
   
  return (
    <div className="ex">
        <div className="e-head">
          <button className="btn" value='education' style={{background:key==='education'?'#f9f9f9':'#fff'}} onClick={handler}>Education</button>
          <button className="btn" value='experience' style={{background:key==='experience'?'#f9f9f9':'#fff'}} onClick={handler}>Experience</button>
        </div>

{loop(data[key],(value,i)=>{
   
   return(
    <div className="e-body" key={i}>
    <div className="e-b-left">
    <span>{value.date}</span>
    </div>
    <div className="e-b-right">
       <div className="e-b-r-header">{value.title}</div>
       <span>{value.sort}</span>
       <p>{value.des}</p>
    </div>
</div>
   )
})}
        
    </div>
  )
}

export default Experience
