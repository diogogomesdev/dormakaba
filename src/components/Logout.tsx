import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import store from "../redux/store";

interface Props {
    type: string;
    url?: string;
}

export const Logout: React.FC<Props> = ({type, url}) => {

    const history = useNavigate();

    // Managing authentication - if logout redirect to login page  process.env.
    useEffect(() => {
        var authData = JSON.parse( localStorage.getItem('authData') || '{}');
        if(authData.user === process.env.REACT_APP_USERNAME && authData.pass === process.env.REACT_APP_PASSWORD){
            store.dispatch({
                type: "login",
                payload: process.env.REACT_APP_USERNAME
            });
        }
        if(Object.keys(store.getState()).length === 0)history('/');
    }, [history]);

    // Go back function
    const goBack = () => {
        history("/" + url);
    };

    // Logout function
    const logout = () => {
        // remove item from local storage
        localStorage.removeItem('authData');
        store.dispatch({
            type: "logout"
        });
        history('/');
    }

    if(type === "complete"){
        return(
            <div style={{width: "100%", height:"35px", marginBottom: "10px"}}>
                <button style={{float:"left"}} onClick={goBack} className="logout_button">Back</button>
                <button style={{float:"right"}} onClick={logout} className="logout_button">Logout</button>
            </div>
        )
    }else{
        return(
            <div style={{width: "100%", height:"35px", marginBottom: "10px"}}>
                <button style={{float:"right"}} onClick={logout} className="logout_button">Logout</button>
            </div>
        )
    }
};