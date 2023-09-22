import React from 'react';
import './Profile.css';
import Header from './Header';
import { selectUser } from '../features/counter/userSlice';
import avatar from '../assets/avatar.png';
import { useSelector } from 'react-redux';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

function Profile() {
  const user = useSelector(selectUser);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log('Signed out successfully');
      })
      .catch((error) => {
        // An error happened.
      });
  };

  // Check if the user object exists before rendering
  if (!user) {
    return null; // or display a loading indicator
  }

  return (
    <div className='profile'>
      <Header />
      <div className='profile_contents'>
        <h1>Edit Profile</h1>
        <div className='wrap'>
            <div className='info'>
          <img src={avatar} alt='avatar' />
            </div>
            <div className='details'>
                <h2>{user.email}</h2>
                <div className='plans'>
                    <h3>Plans</h3>
                    <button onClick={handleLogout} className='profile_button'>
                    Sign Out
                    </button>
                </div>
            </div>
        </div>
        
      </div>
    </div>
  );
}

export default Profile;
