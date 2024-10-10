import React from "react";
import SettingsIcon from '@mui/icons-material/Settings';
import './GebiyacompCss/GNavbar.css';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import logo from '../../asset/suqelogo.png';

function GNavbar() {

  return (
    <>
      <div className="NavMain">
        <div className="Title">
          <img src={logo} alt="Logo" style={{maxWidth:"90px"}}/>
          <h2> Gebiya ገቢያ </h2>
        </div>
        <div className="Icon">
          <SettingsIcon />
        </div>
      </div>
      <div className="NavMain">
        <div className="Title">
          <CustomizedInputBase/>
        </div>
        <div className="Icon"  sx={{ p: '4px 4px',marginTop:'20px', display: 'flex' }}>
          <FilterAltIcon />
        </div>
      </div>

    </>
  );

}
export default GNavbar



 function CustomizedInputBase() {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 340 }}
    >
     
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search product / ምን ፈለጉ "
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
     
    </Paper>
  );
}