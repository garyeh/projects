import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  if (currentUser) {
    return (
      <nav>
        <h2>Hi, {currentUser.currentUser.username}!</h2>
        <button onClick={logout}>Log Out</button>
      </nav>
    );
  } else {
    return (
      <nav>
        <span><Link to="/login">Login</Link></span>
        <span><Link to="/signup">Sign up!</Link></span>
      </nav>
    );
  }
};

export default Greeting;
