// App.js

import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';

function App() {
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
    <Router>
      <div className="App container ">
        <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/jamianooriyya" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route component={NotFound} /> {/* This route will match any other route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
