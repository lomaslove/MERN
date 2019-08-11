import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
   <nav className="NavBar-Wrapper">
     <div>
       <Link to="/" className="NavBar-Link">
       <h3 className="NavBar-Title">MERN Teacher</h3></Link>
     </div>
     <div className="NavBar-Links">
      <Link to="/" className="NavBar-Link">Students</Link>
      <Link to="/add" className="NavBar-Link">Add Student</Link>
     </div>
   </nav>
  );
};

export default Home;