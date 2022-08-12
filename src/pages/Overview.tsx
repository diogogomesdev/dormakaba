import React, { useEffect } from "react";
import logo from '../images/logo.svg';

// Components
import { CardOverview } from "../components/CardOverview";

// Images
import vehiclesIMG from '../images/vehicle.jpg';
import planetsIMG from '../images/planets.jpeg';
import startshipsIMG from '../images/starships.jpg';
import filmsIMG from '../images/films.jpg';
import peopleIMG from '../images/people.jpg';
import speciesIMG from '../images/species.webp';

// React router dom
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

// Redux
import store from '../redux/store';

export const Overview: React.FC = () => {

    const history = useNavigate();

    useEffect(() => {
        if(Object.keys(store.getState()).length === 0)history('/');
    }, [store]);

    const logout = () => {
        store.dispatch({
            type: "logout"
        });
        history('/');
    }

    return(
        <div className="main">
            <img src={logo} alt="logo" className="logo"/>
            <p style={{color:"white"}} onClick={logout}>Logout</p>
            <Link to="/resource/films"><CardOverview type="Films" text="Find your favorite films within the Star Wars universe" img={filmsIMG}/></Link>
            <Link to="/resource/species"><CardOverview type="Species" text="Research the differente species within the Star Wars universe" img={speciesIMG}/></Link>
            <Link to="/resource/people"><CardOverview type="People" text="Search persons or characters within the Star Wars universe" img={peopleIMG}/></Link>
            <Link to="/resource/planets"><CardOverview type="Planets" text="Research all different planets within the Star Wars universe" img={planetsIMG}/></Link>
            <Link to="/resource/starships"><CardOverview type="Starships" text="Find different starships within the Star Wars universe" img={startshipsIMG}/></Link>
            <Link to="/resource/vehicles"><CardOverview type="Vehicles" text="Search for your favorite vehicles within the Star Wars universe" img={vehiclesIMG}/></Link>
        </div>
    )

};