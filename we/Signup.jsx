import React from 'react'
import { useState ,useEffect} from "react";
import { useSelector } from 'react-redux';
import Login from './Login';
import "./Main.css";
const Signup = () => {
  const [formData, setFormData] = useState({
    
  });
  const { isAuth, isLoading, isError } = useSelector((state) => state.auth);

  //Handle CLick
  const handleChange = (e) => {
    let type = e.target.type;
    let name = e.target.name;
    console.log(type);

    if (type === "text" || type === "number" ) {
      setFormData({ ...formData, [name]: e.target.value, });
    } else if (type === "textarea") {
      setFormData({ ...formData, [name]: e.target.value });
    } else if (type === "select-one") {
      setFormData({ ...formData, [name]: e.target.value });
    } else {
      setFormData({ ...formData, [name]: e.target.checked });
    }
  };

  //Post data
  const postData = async () => {
    try {
      let res = await fetch("http://localhost:8080/Register", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(formData),
      });

      let data = await res.json();
      console.log(data)
      setFormData([...formData, data]);
      
    } catch (err) {
      console.log(err);
    }
  };

 
  //Form Submit

  const hanldeSubmit = (e) => {
    e.preventDefault();
    postData();
    

  };
  return (
    <div className='Signup'>
        <div>
            <img className='imgSignup' src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw6f07f823/images/banners/create-account_d.png?yocs=s_" alt="" />
        </div>
        <div className='Bottamline'>
            <p>Create an Account</p>
        </div>
        <div>
        <form className='signupForm'  action=""  onSubmit={hanldeSubmit}>
        
        <div>
          <label> First Name : </label><br />
          <input
          className='ipt'
            type="text"
            name="FirstName"
            placeholder="Enter first name"
            onChange={handleChange}
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
            onChange={handleChange}
            required
          /><br /><br />
          
        </div>
        
        <div>
          <label>Email: </label><br />
          <input className='ipt' type="email" name="email" onChange={handleChange} /><br /><br />
        </div>
        <div>
        <label>Conform Email: </label><br />
        
          <input className='ipt' type="email" name="email" onChange={handleChange} /><br /><br />
        </div>
       
        <div>
          <label>ZipCode: </label><br />
          <input className='ipt' type="number" name="zip" onChange={handleChange} /><br /><br />
        </div>
        <div>
          <label>Phone No: </label><br />
          <input className='ipt' type="number" name="mobile" onChange={handleChange} /><br />
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