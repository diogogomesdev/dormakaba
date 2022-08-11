import React, { useEffect, useState } from "react";
import logo from '../images/logo.svg';

import { CardResource } from "../components/CardResource";
import {useParams} from "react-router-dom";

// Material UI
import TextField from '@mui/material/TextField';

// Material UI folder
import { BootstrapButton } from '../customMaterialUI/personalized';

export const Resource: React.FC = () => {

    // Find URL and data
    var param = useParams();
    var url:string;
    var title:string = "";
    switch(param.id){
        case 'people':{
            url = "https://swapi.dev/api/people/";
            title = "People";
            break;
        }
        case 'films':{
            url = "https://swapi.dev/api/films/";
            title = "Films";
            break;
        }
        case 'starships':{
            url = "https://swapi.dev/api/starships/";
            title = "Starships";
            break;
        }
        case 'vehicles':{
            url = "https://swapi.dev/api/vehicles/";
            title = "Vehicles";
            break;
        }
        case 'species':{
            url = "https://swapi.dev/api/species/";
            title = "Species";
            break;
        }
        case 'planets':{
            url = "https://swapi.dev/api/planets/";
            title = "Planets";
            break;
        }
    }

    // Fetch data
    const [loadedData, setLoadedData] = useState<any[]>([]);
    useEffect(() => {
        const sendRequest = async () => {
            try{
                const response = await fetch(url, {
                    method: 'GET'
                });
                const responseData = await response.json();
                setLoadedData(responseData.results);
            } catch(err){
                console.log(err);
            }
        };
        sendRequest();
    }, []);
    
    if(loadedData){
        return(
            <div className="main">
                <img src={logo} alt="logo" className="logo"/>
                <h1 style={{color:"white", fontSize:"50px", marginBottom:"5px", marginTop:"10px"}}>{title}</h1>
                <div className="div_search">
                    <TextField id="standard-search" label="Search" type="search" variant="standard" className="textField_resource" size="small"/>
                    <BootstrapButton variant="contained" color="primary" className="botrf">Search</BootstrapButton>
                </div>
                {loadedData.map((p) => (
                    title !== 'Films' ? <CardResource type={p.name}/> : 
                    <CardResource type={p.title}/>
                ))}
            </div>
        )
    }else{
        return(
            <div className="main">
                <h1 style={{color:"white"}}>LOADING..</h1>
            </div>
        )
    }
};