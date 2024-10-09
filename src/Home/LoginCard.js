import React from "react";
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './HomeCss/Logincard.css'; // Ensure the correct extension

function LoginCard() {
    return (
        <Paper elevation={0} className="login-card"> {/* Added className for styling */}
        <h2 className="title">Let's Start</h2>
        <div className="cardbtn">
            <div >
              <button className="btn" >ልሽጥ / Sell</button>
            </div>
            <div className="separator">
                <div className="line"></div>
                <span className="text">or</span>
                <div className="line"></div>
            </div>
            <div >
              <button className="btn2">ልግዛ / Buy</button>
            </div>
            </div>
            <div><br/><br/>Already a member <a>Login</a></div>
        </Paper>
    );
}

export default LoginCard;
