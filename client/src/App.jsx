import React, { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// export const theme=React.createContext();
 import {Rerender,Route} from  './routing';
import './App.css'
import Nav from './components/header/Nav'
import First from './pages/First'
import Fullinfo from "./components/about/Fullinfo";
import Contact from './components/contact/Contact'
import Protfolio from "./components/protfolio/Protfolio";
import Footer from './components/footer/Footer'
import Banner from "./components/banner/Banner";



function App() {
 
 console.log(window.location.pathname)
 return(
  <>
 
 <Rerender> 
 
 <Nav/> 

 <Route path={'/'}><First/> <Banner/> <Footer/> </Route>  

<Route path={'/contact'}><Contact/></Route>  
<Route path={'/about'}>
<Fullinfo/> 
<Banner/>
 <Footer/>
</Route>

 
  </Rerender> 




  </>
  )
}

export default App
