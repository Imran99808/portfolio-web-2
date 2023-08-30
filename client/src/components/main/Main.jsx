import React, { useEffect, useRef } from 'react'
import './Main.css'


// import mPng from '../../assets/pngegg.png'
import Bar from '../bar/Bar'
import { Link } from '../../routing'

function Main() {
 
    
  return (
    <main className='main page'>
         <div className="social">
        <a href="https://www.facebook.com/Shafik672462?mibextid=ZbWKwL"><i class="fa-brands fa-facebook-f  "></i></a>
        <a href="https://twitter.com/Shafiqu42287393?t=mNZ9bD5m1EsKspgNQiM1Rw&s=07"><i class="fa-brands fa-twitter"></i></a>
        <a href="https://www.linkedin.com/in/shafikul-islam-8b6690258"><i class="fa-brands fa-linkedin-in "></i></a>
        <a href="https://instagram.com/shafiqul757?igshid=MzNlNGNkZWQ4Mg=="><i class="fa-brands fa-instagram"></i></a>

        </div> 
        <section className='container mainContainer'>
        <div className="mleft">
               <span>Hi, I am</span>
               <div className="name">Safiqul Islam</div>
               <span>Digital Marketer</span>
               <p >Passionate digital marketer driving results through data-driven strategies. Transforming brands, connecting audiences, and optimizing experiences. Constantly evolving, always innovating.</p>

               <div className="button">
                <button className="btn" id="btn1">Dwonload cv</button>
                <Link to={'contact'}>   <button className="btn" id="btn2">Contact me</button> </Link>
               </div>
        </div>
        <div className="mright">
         {/* <img src={mPng} alt="" /> <img src="/pngegg.png" alt="" /> */}
        </div>
       
        </section>
         <Bar/>  
    </main>
  )
}

export default Main
