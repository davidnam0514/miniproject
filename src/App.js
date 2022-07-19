import React, { useState } from 'react';
import Nav from './components/Nav.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import FoodList from './pages/FoodList';
import Title from './components/Title.js';
function App() {
  

  return (
    
      <Router>
        <Title title='냉장고를 부탁해' textColor='black' />
        <Nav/>
        <Routes>
          <Route path="/" element={<FoodList />} />
          <Route path="/Refidgerator" />
        </Routes>
      </Router>
    
  );
}

export default App;
