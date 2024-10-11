import React from 'react';
import { Outlet } from "react-router-dom";
import SNavbar from './SuqeCom/SNavbar';

function  Suqe() {
  return (
    <div style={{position:'absolute', display: 'flex', flexDirection: 'column', minHeight: '100vh' }} className="gebiya-container">
      <SNavbar />
      <div style={{ flex: 1, overflowY: 'auto', padding: '20px' }} className="content">
        <Outlet />
      </div>
     
    </div>
  );
}

export default Suqe;
