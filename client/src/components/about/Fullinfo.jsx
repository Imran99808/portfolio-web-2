import React from 'react'
import first from '../../assets/about.png'
import Experience from './Experience'

function Fullinfo() {
  return (
   <section className='info page'>
    <div className="a-banner">
        <div className="container b-title">
            <span>About me</span>
            <span></span>
            <p>A Passionate Digital Marketer</p>
           
        </div>
    </div>

    <div className="i-container container">
        <div className="info1">
            <div className="f-cover">
            <img src={first} alt="" />  
            </div>
            <div className="f-details">
                  <span>My Story</span>
                  <div className="f-d-title">
                    Journey of Digital marketing
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, eos? Laborum, corporis porro velit eveniet aut dolorem amet dignissimos iste illo ut recusandae aliquid eaque! Quisquam obcaecati optio tempore. Odio!</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, eos? Laborum, corporis porro velit eveniet aut dolorem amet dignissimos iste illo ut recusandae aliquid eaque! Quisquam obcaecati optio tempore. Odio!</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, eos? Laborum, corporis porro velit eveniet aut dolorem amet dignissimos iste illo ut recusandae aliquid eaque! Quisquam obcaecati optio tempore. Odio!</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, eos? Laborum, corporis porro velit eveniet aut dolorem amet dignissimos iste illo ut recusandae aliquid eaque! Quisquam obcaecati optio tempore. Odio!</p>
          
          
            </div>
        </div>
        <div className="info2">
            <div className="f-details">
            <span>My Approach​</span>
                  <div className="f-d-title">
                  I know that the user is at the center of every business. ​
                  </div>
                  <p>My focus every day is on clients, what they need, and what will bring them one more step closer to their overall goal. My mission is to empower clients with the tools and skills necessary to create a consistent and loyal client base. I also teach businesses how to market themselves properly on the internet. With my expertise, clients can achieve the consistent Search engine and Social Media traffic that they have been seeking.</p>
         
            </div>
            <div className="f-cover">
            <img src='../../../public/m.png' alt="" />  
            </div>
        </div>
        <Experience/>
    </div>
   </section>
  )
}

export default Fullinfo
