import React, { useEffect, useState } from "react";
import logo from '../images/logo.svg';

// react router dom
import {useParams} from "react-router-dom";
import { People } from "./detailPages/People";
import { Specie } from "./detailPages/Specie";
import { Starship } from "./detailPages/Starship";
import { Vehicle } from "./detailPages/Vehicle";
import { Film } from "./detailPages/Film";
import { Planet } from "./detailPages/Planet";

// Material UI
import CircularProgress from '@mui/material/CircularProgress';

export const ResourceDetail: React.FC = () => {

    var param = useParams();
    const url = "https://swapi.dev/api/" + param.id + "/" + param.idItem + "/";

    const [data,setData] = useState<any>();

    // send request
    const sendRequest = async (url:string) => {
        try{
            const response = await fetch(url, {
                method: 'GET'
            });
            const responseData = await response.json();
            setData(responseData);
            console.log(responseData);
        } catch(err){
            console.log(err);
        }
    };

    useEffect(() => {
        sendRequest(url);
    }, [url]);

    if(data){
        if(param.id === "people") return <People data={data}/>
        else if(param.id === "films") return <Film data={data}/>
        else if(param.id === "vehicles") return <Vehicle data={data}/>
        else if(param.id === "planets") return <Planet data={data}/>
        else if(param.id === "starships") return <Starship data={data}/>
        else return <Specie data={data}/>
    }else{
        return(
            <div className="main">
                <img src={logo} alt="logo" className="logo"/>
                <h1 style={{color:"white"}}>LOADING...</h1>
                <CircularProgress disableShrink />
            </div>
        )
    }

};