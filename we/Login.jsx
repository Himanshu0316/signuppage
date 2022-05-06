import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { loginUser } from "./complex/action";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./Main.css";
import Signup from "./Signup";





const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isAuth, isLoading, isError } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };
const signupPage = ()=>{
  if (!isAuth) {
    // <Navigate to="/Signup" />;
    return <Signup/>
   // return "hii"
  }
}
  if (isAuth) {
    // <Navigate to="/Signup" />;
    return <Signup/>
   // return "hii"
  }
  return isLoading ? (
    <div className="loading">
      loading...
    </div>
  ) :(
    <>
    <div className="InUp">
      <div className="loginHead">
        <p className="Headp">Sign In or Sign Up</p>
      </div>
      <div className="FormDivs">
        <div className="FormDiv1">
          <h2>SIGN IN</h2>
          <p>If you already have an account with us, sign in below</p>
          <form onSubmit={handleSubmit}>
        <label className="label1" htmlFor="mail">Email</label>
        <br />
        <input
          id="mail"
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label className="label1" htmlFor="pass">Password</label>
        <br />
        <input
          id="pass"
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        
     
        <div className="Fp"><p>Forget Password</p> <div><input type="checkbox" /><p>Remember Me</p></div></div>
        <input style={{margin: "auto",display: "flex",height: "30px",padding: "10px",color: "white",
    backgroundColor: "darkslategray",
    alignItems: "center",
    justifyContent: "center", }} value="SIGN IN" type="submit" />
      </form>
        </div>
        <div className="FormDiv2">
        <div className="Round">OR</div>

        <div>
          <p>SIGN UP</p>
          <p>Create an account to access the best of your favorite store</p>
          <img className="img1" src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwf946a6ac/images/loyalty/July19/nonloyalty_5thmkt_signuptile_D.png?yocs=s_" alt="" />
           <button onClick={signupPage}>CREATE AN ACCOUNT</button>
        </div>
        </div>
      </div>
    </div>
    {isError ? (
        <h1>Error</h1>
      ) : (
        ""
      )}
    </>
  
  )
}
export default Login;