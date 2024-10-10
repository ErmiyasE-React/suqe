import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Home from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';

import './GebiyacompCss/GFooter.css';

export default function GFooter() {
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

  return (
    <div className='footer'>
      <BottomNavigation sx={{ width: 425 }} value={value} onChange={handleChange}>
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
    </div>
  );
}
