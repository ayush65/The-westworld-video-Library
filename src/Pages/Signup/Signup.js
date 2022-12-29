/** @format */

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/Authcontext";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [setError] = useState("");
  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      navigate("/");
    } catch (e) {
      setError(e.message);
    }
  };

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const str = localStorage.getItem("user");

  //   // convert string to valid object
  //   const parsedObj = JSON.parse(str);

  //   setData(parsedObj);

  // }, [data]);

  return (
    <div className='login-container'>
      <div className='login-content-container'>
        <h2>Sign up for a free account</h2>

        <form onSubmit={handleSubmit} className='form-signup'>
          <div>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className='login-input'
              type='email'
              placeholder='Username'
            />
          </div>
          <div>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className='login-input'
              type='password'
              placeholder='Password'
            />
          </div>
          <button className='login-button'>Sign Up</button>
        </form>
        <div>
          <p className='login-text'>
            Already have an account yet?{" "}
            <Link to='/' className='link-login-signup'>
              Sign in.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
