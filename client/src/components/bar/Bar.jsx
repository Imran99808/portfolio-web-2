import React from 'react'
import './Bar.css'
function Bar() {
  return (
    <div className='container bContainer'>
      <div className="bInfo">
        <div className="icon">
        <i class="fa-brands fa-searchengin"></i>
        </div>
    
      <span>Seo Optimiztion</span>
      </div>
      <div className="bInfo">
      <div className="icon">
      <i class="fa-solid fa-paper-plane"></i>
        </div>
      <span>Marketing Research</span>
      </div>
      <div className="bInfo">
      <div className="icon">
      <i class="fa-solid fa-user"></i>
        </div>
      <span>Customer Research</span>
      </div>
      <div className="bInfo">
      <div className="icon">
      <i aria-hidden="true" class="fas fa-users"></i>
        </div>
      <span>Social Media Marketing</span>
      </div>
    </div>
  )
}

export default Bar
