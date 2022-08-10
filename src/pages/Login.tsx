import React from "react";
import logo from '../images/logo.svg';

import { useNavigate } from 'react-router-dom';


// Material UI
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const Login: React.FC = () => {

    const history = useNavigate();


    function gotohere(){
        history('/overview');
    }

    return(
        <div className="main">
            <img src={logo} alt="logo" className="logo"/>
            <div className="login">
            <TextField id="outlined-name" label="Username" className="textField" margin="normal" size="small" />
            <TextField id="outlined-name" label="Password" className="textField" margin="normal" size="small" type="password"/>
            <Button variant="contained" color="success" onClick={gotohere}>Login</Button>
            </div>
        </div>
    )

};