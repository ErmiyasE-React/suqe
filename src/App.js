import './App.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './Home/Home';
import LoginCard from './Home/LoginCard';
import Gebiya from './Gebiya/Gebiya';
import GBody from './Gebiya/GebiyaComp/GBody';
import Profile from './Gebiya/GebiyaPage/Profile';
import Favorites from './Gebiya/GebiyaPage/Favorites';
import Suqe from './Suqe/Suqe';
import SBody from './Suqe/SuqeCom/SBody';
import OpenSuqe from './Suqe/SuqePage/yeneSuqe/OpenSuqe';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} >
          <Route index element={<LoginCard />} /> 
        </Route>
        <Route path="/Gebiya" element={<Gebiya />}>
          <Route path="" element ={<GBody />} />  {/* Default content for Admin */}
          <Route path="Favorites" element={<Favorites />} /> {/* This will render Teacher inside Admin_main's Outlet */}
          <Route path="Profile" element={<Profile />} />
        </Route>
        <Route path="/Suqe" element={<Suqe />}>
          <Route path="" element ={<SBody />} />  {/* Default content for Admin */}
          <Route path="Favorites" element={<Favorites />} /> {/* This will render Teacher inside Admin_main's Outlet */}
          <Route path="OpenSuqe" element={<OpenSuqe />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
