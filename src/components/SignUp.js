import React, { useRef } from 'react';
import './SignUp.css';
import { auth } from '../firebase';

function SignUp() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser) => {
      console.log(authUser);
    }).catch((error) => {
      alert(error.message);
    });
  };

  const signIn = (e) => {
    e.preventDefault();
    // Implement sign-in logic here if needed
    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser) => {
      console.log(authUser);
    }).catch((error) => alert(error.message));
  };

  return (
    <div className='signup'>
      <form>
        <h1>Sign Up</h1>
        <input ref={emailRef} placeholder='Email' type="email" />
        <input ref={passwordRef} placeholder='Password' type="password" />
        <button type='submit' onClick={register}>Sign Up</button>
        <span><h4>Already have an account?</h4><p className='signinbtn' onClick={signIn}>Sign in now.</p></span>
      </form>
    </div>
  );
}

export default SignUp;
