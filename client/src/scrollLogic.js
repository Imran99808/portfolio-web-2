
export function sCroll(path,value){

// console.log(value)
// const handler=()=>{
//     scroll('k',value);
//  console.log('jani')
//  window.removeEventListener('hashchange',handler)
// }
    


// if(window.location.hash===path){
//       window.addEventListener('hashchange',handler)

 
 
//   }
if(window.location.hash===path){
    scroll(0,value);
}
}