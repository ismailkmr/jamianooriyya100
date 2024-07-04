import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get('http://localhost:3001/getList')
      .then((response) => {
        setData(response.data);
        console.log(response.data)
      })
      .catch((error) => {
      });
      
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <ul className='menu'>
      <li><Link to="/">Logout</Link></li>
      </ul>
      <div className='bgWhite'>
      <h2>Dashboard</h2>
      <ul>
        {data && data.map((item) => (
          <li key={item.id}>{item.uname}: {item.pwd}</li>
        ))}
      </ul>
    </div></div>
  );
}

export default Dashboard;
