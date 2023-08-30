import React, { useState } from 'react'

function from() {

const[data,setData]=useState({
                              name:'',
                              mail:'',
                              comment:''
                              })
  const changeHandler=(e)=>{
    console.log(e.target.value)
    let name=e.target.name;
    setData({...data,[name]:e.target.value})
    
  };


  const subHandler=async(e)=>{
    e.preventDefault();
    setData({
      name:'',
      mail:'',
      comment:''
    })
    const res=await fetch('http://localhost:5000/contact',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    });
    console.log(res)
  };
  console.log(data)
  return (
    <div className='box'>
      <div className="b-left">
        <div className="contact">
          <div className="cbox">
            <span >Phone:</span>
            <span>+8801617300405</span>
          </div>
          <div className="cbox">
            <span >Mail:</span>
            <span>shafikul34405@gmail.com</span>
          </div>
          <div className="cbox">
            <span >Adress:</span>
            <span>Manikganj, Dhaka, Bangladesh</span>
          </div>
        </div>
        <div className="follow">
          <div className="ftitle">Follow Me</div>

          <div className="media">
          <a href="https://www.facebook.com/Shafik672462?mibextid=ZbWKwL"><i class="fa-brands fa-facebook-f  "></i></a>
        <a href="https://twitter.com/Shafiqu42287393?t=mNZ9bD5m1EsKspgNQiM1Rw&s=07"><i class="fa-brands fa-twitter"></i></a>
        <a href="https://www.linkedin.com/in/shafikul-islam-8b6690258"><i class="fa-brands fa-linkedin-in "></i></a>
        <a href="https://instagram.com/shafiqul757?igshid=MzNlNGNkZWQ4Mg=="><i class="fa-brands fa-instagram"></i></a>

          </div>
        </div>
      </div>
      <div className="b-right">
        <div className="r-tag">
          <span>||</span>
          <span>Get In Touch</span>
        </div>
        <div className="r-heading">If you hav any project or need help . Contact me</div>
        <p>As a skilled problem solver, I provide valuable assistance in project management, leveraging my expertise to overcome challenges and achieve successful outcomes.</p>


        <form action="" id='form' onSubmit={subHandler}>
          <div className="input name">
            <input type="text" name="name" placeholder='Name' value={data.name} onChange={changeHandler}/>
          </div>
          <div className="input email">
            <input type="text" name="mail" placeholder='Email' value={data.mail}  onChange={changeHandler}/>
          </div>
          <div className="comment">
            <textarea name="comment"  cols="30" rows="10" placeholder='Comment' value={data.comment}  onChange={changeHandler}></textarea>
          </div>
          <div className="submit">
            <input type="submit" />
          </div>
        </form>
      </div>

    </div>
  )
}

export default from
