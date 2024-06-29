import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <Navbar></Navbar>
      <ul className='menu'>
      <li><Link to="/">Logout</Link></li>
      </ul>
      <h2>Dashboard</h2>
    </div>
  );
}

export default Dashboard;
