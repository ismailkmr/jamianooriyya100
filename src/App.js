// App.js

import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <div className="App container">
        <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route component={NotFound} /> {/* This route will match any other route */}
        </Routes>
        <Home></Home>
      </div>
    </Router>
  );
}

export default App;
