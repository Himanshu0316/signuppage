import React from 'react'
import { useState } from "react";
import { useContext } from 'react';
import { AuthContext } from './complex2/AuthProvider';

import "./Main.css";
const Signup = () => {
  
  const [form,setForm]=useState({});
  const { Signupform } = useContext(AuthContext);

  const handleChange=(e)=>{
      let input=e.target;

      setForm({ ...form,[input.name]:input.value});
  }

  const handleSubmit=(e)=>{
      e.preventDefault();
      Signupform(form);

  }
 
 
 
  return (
    <div className='Signup'>
        <div>
            <img className='imgSignup' src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw6f07f823/images/banners/create-account_d.png?yocs=s_" alt="" />
        </div>
        <div className='Bottamline'>
            <p>Create an Account</p>
        </div>
        <div>
        <form className='signupForm'  action=""  onSubmit={handleSubmit}>
      
        <div>
          <label> First Name : </label><br />
          <input
          className='ipt'
            type="text"
            name="FirstName"
            placeholder="Enter first name"
            
            required
          /><br /><br />
        </div>
        <div>
        <label>Last Name : </label><br />
          <input
          className='ipt'
            type="text"
            name="LastName"
            placeholder="Enter last name"
            
            required
          /><br /><br />
          
        </div>
        
        <div>
          <label>Email: </label><br />
          <input className='ipt' type="email" name="email" onChange={handleChange} /><br /><br />
        </div>
        <div>
        <label>Conform Email: </label><br />
        
          <input className='ipt' type="email" name="email"  /><br /><br />
        </div>
       
        <div>
          <label>ZipCode: </label><br />
          <input className='ipt' type="number" name="zip"  /><br /><br />
        </div>
        <div>
          <label>Phone No: </label><br />
          <input className='ipt' type="number" name="mobile"  /><br />
          <p>We'll use this to look up your Rewards account in stores.</p><br /><br />
        </div>
        <div>
          <label>Password: </label><br />
          <input className='ipt' type="password" name="pass" onChange={handleChange} /><br /><br />
        </div>
        
        <div>
          
          <input style={{margin: "auto",display: "flex",height: "30px",padding: "10px",color: "white",
    backgroundColor: "darkslategray",
    alignItems: "center",
    justifyContent: "center", }} value="Create Account" type="submit" />
        </div>
      </form>
        </div>
    </div>
  
  )
}

export default Signup