import React from 'react'
import './Contact.css'
import From from './From'
function Contact() {
  return (
    <section className='contact ' >
      <div className="cbanner page">
        <div className="ctitle container">
        
        Let’s discuss <br />
        Your great project
        </div>
     </div>
      <div className="cinfo container">
        <div className="map">
     <iframe src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29218.663153398826!2d90.39770761432791!3d23.73550557140813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85c366afdaf%3A0x63cbcd8b4dfb9d3c!2sMotijheel%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1688911706388!5m2!1sen!2sbd"} width="100%" height="100%"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> 
     </div>

      <From/> 
     </div>
    </section>
  )
}

export default Contact
