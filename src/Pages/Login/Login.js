/** @format */

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/Authcontext";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [setError] = useState("");
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      navigate("/homepage");
      window.location.reload(false);
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div className='login-container'>
      <div className='login-content-container'>
        <h2>Sign in to your account</h2>

        <form>
          <div className=''>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className='login-input'
              value={email}
              type='email'
              placeholder='username'
            />
          </div>
          <div className=''>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className='login-input'
              value={password}
              type='password'
              placeholder='passsword'
            />
          </div>
          <button className='login-button' onClick={handleSubmit}>
            Sign In
          </button>
        </form>
        <div>
          <button
            className='login-button-test'
            onClick={() => {
              setEmail("ayush@gmail.com");
              setPassword("314912");
            }}>
            Login with test credentials
          </button>
        </div>
        <div>
          <p className='login-text'>
            Don't have an account yet?{" "}
            <Link to='/signup' className='link-login-signup'>
              Sign up.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
