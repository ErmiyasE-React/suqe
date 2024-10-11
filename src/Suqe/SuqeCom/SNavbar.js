import React from "react";
import './SuqecomCss/SNavbar.css';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import logo from '../../asset/suqelogo.png';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Home from '@mui/icons-material/Home';


import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
function SNavbar() {

  return (
    <>
      <div className="NavMain">
        <div className="Title">
          <TemporaryDrawer/>
        
          <h2> Suqe / ሱቄ</h2>
        </div>
       <div className="Icon">
       <img src={logo} alt="Logo" style={{maxWidth:"90px"}}/>
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
export default SNavbar



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



 function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const navigate = useNavigate();
  const [value, setValue] = React.useState('Home'); // Initialize state for value

  const handleChange = (event, newValue) => {
    setValue(newValue); // Update the value state
    if (newValue === 'favorites') {
      navigate('/Gebiya/Favorites'); // Adjust the path according to your route setup
    }  if (newValue === 'Home') {
      navigate('/Gebiya'); // Adjust the path according to your route setup
    }else if (newValue === 'Profile') {
      navigate('/Gebiya/Profile'); // Adjust the path according to your route setup
    }
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <Avatar  sx={{ width: 90,height:90,display:'flex', flexDirection:"column",margin:'20px',marginLeft:'60px'}} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <Divider />
      <List>
      <BottomNavigation sx={{ width: 425,display:'flex', flexDirection:"column",marginTop:'50px',marginLeft:'5px'}} value={value} onChange={handleChange}>
        <h5>{value}</h5>
        <BottomNavigationAction
          label="Home"
          value="Home"
          icon={<Home />}
        />
        <BottomNavigationAction
          label="Favorites"
          value="favorites"
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          label="Profile"
          value="Profile"
          icon={<PersonPinIcon />}
        />
       
      </BottomNavigation>
      </List>
 
      <List>
       
      </List>
    </Box>
  );
 
  return (
    <div>
      <Button onClick={toggleDrawer(true)}><MenuOpenIcon sx={{ p: '4px 4px',marginTop:'20px', display: 'flex' }}/></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
