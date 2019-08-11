import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
   <nav className="NavBar-Wrapper">
     <div>
       <Link to="/" className="NavBar-Link">
       <h3 className="NavBar-Title">MERN CRUD</h3>
       </Link>
     </div>
     <div className="NavBar-Links">
      <Link to="/" className="NavBar-Link">StudentList</Link>
      <Link to="/add" className="NavBar-Link">Add</Link>
     </div>
   </nav>
  );
};

export default Home;