import React, { useEffect, useRef, useState} from 'react'

import './move.css'
// {children,dots,iShow,circle}
let btCount=0;
function Move({children,dots,iShow,circle,prevArrow,NextArrow}) {
  // const{children,dots,iShow,circle}=props;
  
  let length;
   circle?length=children.length+(2*parseInt(iShow)):length=children.length;
     
     const iWidth=100;
    const element=useRef();
    const parentElement=useRef();
    const[first,setFirst]=useState()
    const[innerWidth,setInner]=useState(window.innerWidth)
     const[itemWidth,setItem]=useState()
    
    const[position,setPosition]=useState(0);
    const[width,setWidth]=useState(0);
    const[position2,setPosition2]=useState();
   const[sPosition,setSposition]=useState();
   const[side,setSide]=useState(false);
   const [clicked,setClicked]=useState(false);
   const[smoth,setSmoth]=useState(false);
    
   

 useEffect(()=>{
   
  if(circle){
  setPosition(-itemWidth*iShow);
 setFirst(itemWidth*iShow)
  setWidth(itemWidth*iShow);
  }
  else{
    setPosition(0);
    setFirst(0)
     setWidth(0);
  }
 
 },[itemWidth,circle])


   function click(e){
   
    setPosition(-e.target.id);
    setWidth( parseInt(e.target.id));
    setSmoth(true);
   
  
   }
    function downHandaler(e){
     
      e.preventDefault();
        setClicked(true);
        
        setPosition2(position);
        setSposition((e.nativeEvent.clientX)-position);
        setSmoth(false);
        console.log(position)
        // console.log(sPosition);-parentElement.current.offsetLeft this is a child box left count
      
      
    }

    function moveHandaler(e){
        if(clicked){
             e.preventDefault();
             
            setPosition((e.nativeEvent.clientX)-sPosition);
          
           
        //  circle?((position<=0&&position>=-(itemWidth*children.length+2*iShow)-itemWidth*iShow)&&setSide(position-position2<-itemWidth/4||position-position2>itemWidth/4)):((position<=0&&position>=-itemWidth*children.length)&&setSide(position-position2<-itemWidth/4||position-position2>itemWidth/4))


        // this logic hel side touch decide work not work
         (position<=0&&position>=-(itemWidth*length-itemWidth*iShow))&&setSide(position-position2<-itemWidth/4||position-position2>itemWidth/4)
          // position>=0==false&& setSide(position-position2<-itemWidth/4||position-position2>itemWidth/4)
       
         if(((position2-position<=-itemWidth||position2-position>=itemWidth)&&(position<=0&&position>=-(itemWidth*length-itemWidth*iShow)))&&iShow!==1){
         
           position2<=position? setPosition2(position2+itemWidth):setPosition2(position2-itemWidth);
          }

         
            }
    }

   

    function positioncheck(){
      
        setClicked(false);
        setSmoth(true);
        if(!side){
          setPosition(position2);
         
        }
        else{
        
               position2<=position? setPosition(position2+itemWidth):setPosition(position2-itemWidth);
              
             
               position2<=position? setWidth(width-itemWidth):setWidth(width+itemWidth);
              
           
           
             setSide(false)
           
        }
      
    } 
    
      
        
      
            

    

      useEffect(()=>{
        
      
        
        setItem(parseInt( parentElement.current.offsetWidth/iShow));
        
         const handaleResize=()=> setItem(parseInt( parentElement.current.offsetWidth/iShow));
          window.addEventListener("resize",handaleResize);
    
         return ()=>window.removeEventListener('resize',handaleResize)
     },[iShow])
    

   function box(value){
    
    const arr=[];
    let arr2=[];
    let count;
    for(let i=0;i<length;i++){

    (circle&&i<parseInt(iShow))?count=children[(children.length-parseInt(iShow))+i]:circle?count=children[i-parseInt(iShow)]:count=children[i];
    (circle&&i>=children.length+parseInt(iShow))&&(count=children[i-(children.length+parseInt(iShow))]);
      
      arr.push(<div key={i} id={i}  aria-hidden={itemWidth*i!=width&&"true"} style={{width:itemWidth===undefined?`${iWidth/iShow}%`:`${itemWidth}px`}}  >{count}</div>);
        i<children.length&& arr2.push( <li key={i}><button className='btn ' id={itemWidth==undefined?i:itemWidth*(i+1)} onClick={click} style={{opacity:(itemWidth*(i+1)==width)||((width==0&&i==children.length-iShow)||(width==itemWidth*(children.length+iShow)&&i==0))?'1':''}} ></button></li>)
    }
    
 
  if(value=="card"){
    return arr;
  }else{
   return arr2;
  }
}

  return (

<div className='slider'>
{prevArrow&&React.cloneElement(prevArrow,btCount==0&&{
  
  onClick:(e)=>{
     setPosition(position+itemWidth);
     btCount++;
     setWidth(width-itemWidth)
     setSmoth(true);
     
 
   
}


 
 })}

   <div className='slide'
       
      onMouseDown={downHandaler}
      onMouseUp={()=>{
        // setClicked(false);
         positioncheck();
      }}
      onMouseMove={moveHandaler}
      onMouseLeave={()=>{
        clicked&&positioncheck();
     }}
     ref={parentElement}
      >


      
    <div className={`slider-container ${smoth&&'smoth'}`} style={{width:itemWidth===undefined?`${(iWidth*length/iShow)}%`:`${(itemWidth*length)}px`, transform: `translate(${ position}px)`}} onTransitionEnd={()=>{
       setSmoth(false) 
       btCount=0;
          if((position==0|| position==-itemWidth*(children.length+iShow))&&circle){
            
           
              setPosition(position==0?-itemWidth*children.length: -first)
               setWidth(position==0?itemWidth*children.length: first)
                  }

               
          //  circleItem();     

    }} ref={element}>
       {box('card')} 
      
    </div>
  
    </div>



{/* rigth button */}
{NextArrow&&React.cloneElement(NextArrow,btCount==0&&{
     
     onClick:()=>{
      setPosition(position-itemWidth);
      setWidth(width+itemWidth)
      btCount++;
    
      setSmoth(true);
    },
})}





    <ul style={{display:dots==1?'':'none'}}>
    
   
   {box('dot')} 
    </ul>


    </div>
  )
}

export default Move
