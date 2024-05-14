// src/components/BottomNavigation.js
import React from 'react';
import { Link } from 'react-router-dom';

const BottomNavigation = () => (
  <div className="bottom-navigation">
    <Link to="/">Home</Link>
    <Link to="/page2">Page2</Link>
    <Link to="/page3">Page3</Link>
    <Link to="/page4">Page4</Link>
  </div>
);

export default BottomNavigation;
