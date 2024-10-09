import './App.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './Home/Home';
import LoginCard from './Home/LoginCard';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} >
          <Route index element={<LoginCard />} /> 
        </Route>
      </Routes>
    </div>
  );
}

export default App;
