import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <div>
        <p>This is the HOME PAGE</p>
        <button>Go to Friday - Day 1</button>
        <button>Go to Saturday - Day 2</button>
        <button>Go to Sunday - Day 3</button>
        <button>Go to Favorites Page</button>
      </div>
      
    
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
