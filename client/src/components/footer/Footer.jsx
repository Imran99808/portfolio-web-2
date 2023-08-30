import React from 'react'
import { Link } from '../../routing'
import './Footer.css'
function Footer() {
  return (
   <footer className='footer'>
    <div className="fcontainer">
        <div className="fleft">
            
           <div className="c">
            <span>Navigation</span>
            <li><Link to={'/'}> Home</Link></li>
            <li><Link to={'#about'}>About</Link></li>
            <li><Link to={'#protfolio'}>Experience</Link></li>
            <li><Link to={'#services'}>website Service</Link></li>
            <li>Blogs</li>
            
           </div>

           <div className="c">
           <span>Service</span>
            <li>Brandig</li>
            <li>Social Marketing</li>
            <li>Product Design</li>
            <li>SEO</li>
            <li>Writing</li>
           </div>

           <div className="c">
           <span>Social Media</span>
            <li><a href="https://www.facebook.com/Shafik672462?mibextid=ZbWKwL">Facebook</a></li>
            <li><a href="https://twitter.com/Shafiqu42287393?t=mNZ9bD5m1EsKspgNQiM1Rw&s=07">Twiter</a></li>
            <li><a href="https://www.linkedin.com/in/shafikul-islam-8b6690258">Linkdin</a></li>
            <li><a href="https://instagram.com/shafiqul757?igshid=MzNlNGNkZWQ4Mg==">Instagram</a></li>
           </div>
           <div className="c">
           <span>Information</span>
            <li>shafikul34405@gmail.com</li>
            <li>Dhaka, Bangladesh</li>
            <li>(+880)1617300405</li>
            
           </div>
       
        </div>
        <div className="fright">
          <div className="title">
            <span>Be Creative,</span>
               <span> Be Solutive</span>
          </div>
          <div className="input">
          <i class="fa-solid fa-arrow-right"></i>
            <input type="text" placeholder='Enter your email' />
            
          </div>
        </div>
    </div>

   </footer>
  )
}

export default Footer
