import React,{useState,useContext, useEffect} from "react";
export const theme=React.createContext();
let click =0;


// route for
export function Route({path,children,component}) {
 const[toggole,setToggole]=useContext(theme);
  
    console.log('pagol')

    return window.location.pathname===path?children:null;
  }
  
// link for
export function Link({className,to,children}) {
   const[toggole,setToggole]=useContext(theme);
 
  console.log('link')
 function handaleClick(e){
 
  const pLen=window.location.pathname;
  console.log(typeof( pLen.length ))  
  if(to.charAt(0)==='#') {
    
    pLen.length>1&&window.history.pushState({},"","/")
  //  window.history.replaceState(a," ",to)
      //  window.location.hash="";
    
       window.location.hash=to;

      //  click=1;
   
   
  
  } else{
   console.log(to)
   window.history.pushState({}," ",to)
   
   setToggole(!toggole);
   scroll(0,0)
  
  } 

 
 
   
    console.log('link2')
   

   }
  
   console.log(window.location.pathname===to)
  return <a className={className}  onClick={handaleClick}  style={{color:window.location.pathname===to?'#9ae79a':''}}>{children}</a>
}







export function Rerender({children}){
   
  const [toggole,setToggole]=useState(true);
    window.onpopstate = function (event) {
      console.log('okk') 
      console.log(click)
       setToggole(!toggole);
      click=0;
      

   };
   console.log('th',click)
 console.log(toggole)  
console.log('emo')
   return(
    <>
     <theme.Provider value={[toggole,setToggole]}> {children}</theme.Provider>  
  
 
   
    </>
   )

}



























































































// // old logic code not better 
// import React,{useState,useContext, useEffect} from "react";

// export const theme=React.createContext();
// export const theme2=React.createContext();
// let a=0;
// const navigationEvent = new PopStateEvent("navigate");
// // route for
// export function Route({path,children,component}) {
//     const [toggle,setToggle]=useContext(theme);
//   // const[inpath,setPath]=useState(window.location.pathname)
//     console.log('pagol')
// //     useEffect(()=>{
// //      function nhandler(){
// // console.log('custom')
// // setPath(window.location.pathname);

// //      }
// //     window.addEventListener("navigate", nhandler);

// //     return () => window.removeEventListener('navigate',nhandler)
// // },[])
//     return window.location.pathname===path?children:null;
//   }
  
// // link for
// export function Link({className,to,children}) {
//    const [toggle,setToggle]=useContext(theme);
//   // const[path,setPath]=useState(window.location.pathname)
//   console.log('Link')
//  function handaleClick(e){
//   a=1;
//   const pLen=window.location.pathname;
//   console.log(typeof( pLen.length ))  
//   if(to.charAt(0)==='#') {
    
//    pLen.length>1&&window.history.pushState({},"","/")
//   //  window.history.replaceState(a," ",to)
//       //  window.location.hash="";
    
//        window.location.hash=to;

 
   
   
  
//   } else{
//    console.log(to)
//    window.history.pushState({}," ",to)
//   // setToggle(!toggle)
//   // window.dispatchEvent(navigationEvent);
//   } 
//   document.title=to;
//       setToggle(!toggle)
//     console.log('link2')
   
 
//    }
  
   
//   return <a className={className}  onClick={handaleClick}  style={{color:window.location.pathname===to?'#9ae79a':''}}>{children}</a>
// }



// export function StateChange({children}){
//   // const[t,setT]=useState(true);
//   const [toggle,setToggle]=useContext(theme);
 
//   window.onpopstate = function (event) {
//     console.log('okk') 
//     //  setT(!t);
//     setToggle(!toggle)
//   };
// console.log('pagol2')
//   return <>{children}</>;
// }





// export function Rerender({children}){
   
//     const[toggle,setToggle]=useState(true)
//   console.log(toggle)
//   console.log(children)
//     window.onpopstate = function (event) {
//       console.log('okk') 
//       console.log(a) 
//       // window.dispatchEvent(navigationEvent);
//       a==0&&  setToggle(!toggle);
     
   
//    };
//    a=0;
// console.log('emo')
//    return(
//     <theme.Provider value={[toggle,setToggle]}>
      
//    {children}
 
   
//     </theme.Provider>
//    )

// }