import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import './login.css'

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // Login
  const login = (e) => {
    e.preventDefault();
    // Login logic here
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in, Redirect to Home page
        const user = userCredential.user;
        console.log(user);
        // ...
        navigate('/')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`Error code-> ${errorCode}, Error message-> ${errorMessage}`);
      });
  }
  // Register new users
  const register = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        // ...
        navigate('/')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`Error code-> ${errorCode}, Error message-> ${errorMessage}`);
        // ..
      });
  }

  return (
    <div className='login'>
      <Link to="/">
        <img className='loginImg' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/440px-Amazon_logo.svg.png" alt="" />
      </Link>
      <div className='loginContainer'>
        <h1 className='loginHead'>Sign in</h1>
        <form className='loginForm'>
          {/* Email Section */}
          <h5 className='loginInputHead'>Email</h5>
          <input value={email} onChange={(event) => setEmail(event.target.value)} className='loginInput' type="email" />
          {/* Password Section */}
          <h5 className='loginInputHead'>Password</h5>
          <input value={password} onChange={(event) => setPassword(event.target.value)} className='loginInput' type="text" />
          {/* Sign in Button */}
          <button type='submit' className='loginBtn' onClick={login}>Sign In</button>
        </form>
        <p className='loginPara'>By continuing, you agree to Amazon's <span className='loginParablue'>Conditions of Use</span> and <span className='loginParablue'>Privacy Notice</span>.</p>
        <div className='loginLine'><span className='loginLineText'>New to Amazon?</span></div>
        {/* Register new user button */}
        <button className='loginBtn loginBtnNewAcc' onClick={register}>Create your Amazon Account</button>
      </div>
    </div>
  )
}

export default Login