import React, { useState } from 'react'
import logo from '../assets/Logo.png'
import './Login.css'
import SignUp from './SignUp';

function Login() {
    const [signIn, setSignIn] = useState(false);
  return (
    <div className="login">
      <div className='background'>
        <div className='nav'>
            <img className='login_logo' src={ logo } alt="Netflix logo"/>
            <button onClick={() => setSignIn(true)} className='login_button'>Sign In</button>
        </div>
        <div className='login_content'>
            {signIn ? (<SignUp />) : (
                <>
                    <h1>Unlimited movies, TV shows, and more</h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                    <div className='input'>
                        <form>
                            <input className='login_input' type="email" placeholder='Email address' />
                            <buttton onClick={() => setSignIn(true)}className="login_startButton">Get Started</buttton>
                        </form>
                    </div>
                </>
            )}        
        </div>
      </div>
    </div>
  )
}

export default Login
