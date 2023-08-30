import React, { memo, useEffect, useRef, useState } from 'react'
import { Link } from '../../routing'
import './Nav.css'
const style={

position:'fixed',
// background
}
function Nav() {
  const [toggole, setToggle] = useState(false);
  const [nav,setnav]=useState(false);


  const hamBurger = () => {
    setToggle(!toggole)
  }
// ..................................

const element=useRef();
  

  useEffect(()=>{
 
    const shandler= () => {

      setnav(window.pageYOffset>=max)

    }
    let max=element.current.offsetHeight+element.current.offsetTop
    window.addEventListener("scroll",shandler)
   return ()=>window.removeEventListener('scroll',shandler)
  })

  console.log('sod')
  return (
    <header className='navBar' ref={element}  style={nav ? style : null}  >
      <div className="container">
      <nav className='nav'>
        <div className="logo">
          s
        </div>
        <ul className='items' style={{ right: toggole ? '' : '-490px' }}>
          <li ><Link to={'/'}> Home</Link></li>
          <li ><Link to={'#about'}>My info</Link> </li>

          <li><Link to={'#services'}>Services</Link> </li>
          <li><Link to={'#protfolio'}>Protfolio</Link> </li>
          
          <li><Link to={'#testimonial'}>Testimonial</Link></li>
          <li ><Link to={'/blogs'}>Blog</Link></li>

          <i class="fa-solid fa-x" onClick={hamBurger}></i>
        </ul>
        <i class="fa-solid fa-bars" onClick={hamBurger}></i>

      </nav>
      </div>
    </header>
  )
}

export default Nav
