import React from 'react'
import { Link } from '../../routing'
import './Banner.css'

function Banner() {
  return (
    <section className="banner">
        <div className="container baContainer">
            <div className="batitle">
                <span>See the impact of good, conversion-oriented design on your business.</span>
            </div>
           
            <Link to={'contact'}><button className="btn">Hire Me</button></Link>
            
        </div>
    </section>
  )
}

export default Banner
