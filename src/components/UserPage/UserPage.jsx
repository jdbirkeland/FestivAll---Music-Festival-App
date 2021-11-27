import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './UserPage.css';


function UserPage() {
  const history = useHistory();
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <h2 className="welcome">Welcome, {user.username}!</h2>
      {/* <p>Your ID is: {user.id}</p>
      <LogOutButton className="btn" /> */}
      <br />
      <div>
        {/* <p>This is the HOME PAGE</p> */}

        <button className="btn" onClick={() => {
          history.push('/userfriday');
        }}>Friday - Day 1</button>
        <br />
        <button className="btn" onClick={() => {
          history.push('/usersaturday');
        }}>Saturday - Day 2</button>
        <br />
        <button className="btn" onClick={() => {
          history.push('/usersunday');
        }}>Sunday - Day 3</button>
        <br />
        <button className="btn" onClick={() => {
          history.push('/favorites');
        }}>Favorites Page</button>
        <br />
      </div>
      <br />
      {/* <p>Your ID is: {user.id}</p> */}
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
