import React from "react";

// Components
import { CardOverview } from "../components/CardOverview";
import { Logout } from "../components/Logout";
import { LogoImage } from "../components/LogoImage";

// Images
import vehiclesIMG from '../images/vehicle.jpg';
import planetsIMG from '../images/planets.jpeg';
import startshipsIMG from '../images/starships.jpg';
import filmsIMG from '../images/films.jpg';
import peopleIMG from '../images/people.jpg';
import speciesIMG from '../images/species.webp';

// React router dom
import { Link } from "react-router-dom";

export const Overview: React.FC = () => {

    return(
        <div className="main">
            <Logout type="notComplete" />
            <LogoImage />
            <h1 style={{color:"white", fontSize:"50px", marginBottom:"20px", marginTop:"10px"}}>Overview</h1>
            <Link to="/resource/films">
                <CardOverview type="Films" text="Find your favorite films within the Star Wars universe" img={filmsIMG}/>
            </Link>
            <Link to="/resource/species">
                <CardOverview type="Species" text="Research the differente species within the Star Wars universe" img={speciesIMG}/>
            </Link>
            <Link to="/resource/people">
                <CardOverview type="People" text="Search persons or characters within the Star Wars universe" img={peopleIMG}/>
            </Link>
            <Link to="/resource/planets">
                <CardOverview type="Planets" text="Research all different planets within the Star Wars universe" img={planetsIMG}/>
            </Link>
            <Link to="/resource/starships">
                <CardOverview type="Starships" text="Find different starships within the Star Wars universe" img={startshipsIMG}/>
            </Link>
            <Link to="/resource/vehicles">
                <CardOverview type="Vehicles" text="Search for your favorite vehicles within the Star Wars universe" img={vehiclesIMG}/>
            </Link>
        </div>
    )
};