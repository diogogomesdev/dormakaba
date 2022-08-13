import React, { useEffect, useState } from "react";
import logo from '../images/logo.svg';

// Components
import { CardResource } from "../components/CardResource";
import { Logout } from "../components/Logout";

// React router
import { useParams} from "react-router-dom";

// Material UI
import TextField from '@mui/material/TextField';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

// Material UI folder
import { BootstrapButton } from '../customMaterialUI/Button';
import CircularProgress from '@mui/material/CircularProgress';

export const Resource: React.FC = () => {

    // Find URL
    var param = useParams();
    var url:string = "";
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

    // Search functions    
    const [searchQuery,setSearchQuery] = useState('');

    const changeSearchQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const search = () => {
        var urlPagination = url + "?search=" + searchQuery;
        sendRequest(urlPagination);
    }

    // Pagination
    const [pages,setPages] = useState(0);
    const [loading,setLoading] = useState(true);

    // Loading function
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setLoading(true);
        var urlPagination = url + "?page=" + value;
        sendRequest(urlPagination);
      };

    // Request function to fetch data
    const [data, setData] = useState<any[]>();
    const sendRequest = async (url:string) => {
        try{
            const response = await fetch(url, {
                method: 'GET'
            });
            const responseData = await response.json();
            setLoading(false);
            setData(responseData.results);

            //pagination
            if(responseData.count%10 !== 0){
                var pags:number = Math.floor(responseData.count/10) + 1;
                setPages(pags);
            }
        } catch(err){
            console.log(err);
        }
    };

    useEffect(() => {
        sendRequest(url);
    }, [url]);
    
        return(
            <div className="main">
                <Logout type="complete" url="overview"/>
                <img src={logo} alt="logo" className="logo"/>
                <h1 style={{color:"white", fontSize:"50px", marginBottom:"5px", marginTop:"10px"}}>{title}</h1>
                <div className="div_search">
                    <TextField id="standard-search" label="Search" type="search" variant="standard" className="textField_resource" size="small" onChange={changeSearchQuery}/>
                    <BootstrapButton variant="contained" color="primary" className="botrf" onClick={search}>Search</BootstrapButton>
                </div>
                {loading === false && data ? 
                    data.map((p) => (
                        title !== 'Films' ? <CardResource type={p.name} url={p.url} resource={title.toLowerCase()}/> : 
                        <CardResource type={p.title} url={p.url} resource={title.toLowerCase()}/>
                    ))              
                :    
                    <div>
                        <h1 style={{color:"white"}}>LOADING...</h1>
                        <CircularProgress disableShrink />
                    </div>
                }
                <div className="pagination">
                    <Stack alignItems="center">
                        <Pagination count={pages} variant="outlined" shape="rounded" color="secondary" size="small" onChange={handleChange}/>
                    </Stack>
                </div>
            </div>
        )
};