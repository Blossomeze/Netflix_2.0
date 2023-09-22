import React, { useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/counter/userSlice';
import Profile from './components/Profile';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //logged in
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
        console.log(userAuth)
      } else {
        //Logged out
        dispatch(logout())
      }
    })
    return unsubscribe;
  },[dispatch])

  return (
    <Router>
      {user ? (
        <div className="app">
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      ) : (
        <Login />
      )}
    </Router>
  );
}

export default App;
