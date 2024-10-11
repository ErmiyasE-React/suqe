import React from "react";
import Paper from '@mui/material/Paper';
import './HomeCss/Logincard.css'; // Ensure the correct extension
import { useNavigate } from 'react-router-dom';

function LoginCard() {
  const navigate = useNavigate();
  const legza = () => {
    navigate('/Gebiya'); // Adjust the path according to your route setup
  };
  const leshit = () => {
    navigate('/Suqe'); // Adjust the path according to your route setup
  };
    return (
        <Paper elevation={0} className="login-card"> {/* Added className for styling */}
        <h2 className="title">Let's Start</h2>
        <div className="cardbtn">
            <div >
              <button className="btn" onClick={leshit}  >ልሽጥ / Sell</button>
            </div>
            <div className="separator">
                <div className="line"></div>
                <span className="text">or</span>
                <div className="line"></div>
            </div>
            <div >
              <button onClick={legza} className="btn2">ልግዛ / Buy</button>
            </div>
            </div>
            <div><br/><br/>Already a member <a>Login</a></div>
        </Paper>
    );
}

export default LoginCard;
