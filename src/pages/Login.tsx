import React, { useEffect, useState } from "react";
import logo from '../images/logo.svg';

// React router
import { useNavigate } from 'react-router-dom';

// Redux
import store from '../redux/store';

// Material UI
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const Login: React.FC = () => {

    const history = useNavigate();

    // Managing error
    const [error,setError] = useState(false);

    // Username
    const [username,setUsername] = useState('');
    const usernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    // Password
    const [password,setPassword] = useState('');
    const passwordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    // Login function
    const login = () => {
        if(username === process.env.REACT_APP_USERNAME && password === process.env.REACT_APP_PASSWORD){
            localStorage.setItem(
                'authData', 
                JSON.stringify({user: username, pass: password})
            );
            store.dispatch({
                type: "login",
                payload: process.env.REACT_APP_USERNAME
            });
            history('/overview');
        }else{
            setError(true);
        }
    }

    // Auto login
    useEffect(() => {
        var authData = JSON.parse( localStorage.getItem('authData') || '{}');
        if(authData.user === process.env.REACT_APP_USERNAME && authData.pass === process.env.REACT_APP_PASSWORD){
            history('/overview');
        }
    },[history]);

    return(
        <div className="main">
            <img src={logo} alt="logo" className="logo"/>
            <div className="login">
            <TextField label="Username" className="textField" margin="normal" size="small" value={username} onChange={usernameChange}/>
            <TextField label="Password" className="textField" margin="normal" size="small" type="password" value={password} onChange={passwordChange}/>
            <Button variant="contained" color="success" onClick={login}  sx={{ marginTop: "10px" }}>Login</Button>
            {error ? <p style={{  color: "red", marginTop: "5px"}}>Wrong username or password</p> : <span></span>}
            </div>
        </div>
    )
};