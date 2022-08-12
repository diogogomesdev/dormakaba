import React, { useState } from "react";
import logo from '../images/logo.svg';

import { useNavigate } from 'react-router-dom';

// Redux
import store from '../redux/store';

// Material UI
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const Login: React.FC = () => {

    // Redux
    /*
    store.dispatch({
        type: "login",
        payload: "diogo"
    })
    store.dispatch({
        type: "logout"
    })
    console.log(store.getState());
    store.dispatch({
        type: "login",
        payload: "diogo"
    })
    console.log(store.getState());
    */

    const history = useNavigate();

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState(false);

    const usernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const passwordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const login = () => {
        if(username === 'luke' && password === 'skywalker'){
            store.dispatch({
                type: "login",
                payload: "luke"
            });
            history('/overview');
        }else{
            setError(true);
        }
    }

    return(
        <div className="main">
            <img src={logo} alt="logo" className="logo"/>
            <div className="login">
            <TextField label="Username" className="textField" margin="normal" size="small" value={username} onChange={usernameChange}/>
            <TextField label="Password" className="textField" margin="normal" size="small" type="password" value={password} onChange={passwordChange}/>
            <Button variant="contained" color="success" onClick={login}>Login</Button>
            {error ? <p>Wrong username or password</p> : <span></span>}
            </div>
        </div>
    )

};