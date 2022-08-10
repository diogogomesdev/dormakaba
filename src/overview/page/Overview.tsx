import React from "react";
import logo from '../../images/logo.svg';
import { CardOverview } from "../components/CardOverview";

// Images
import vehiclesIMG from '../../images/vehicle.jpg';
import planetsIMG from '../../images/planets.jpeg';
import startshipsIMG from '../../images/starships.jpg';
import filmsIMG from '../../images/films.jpg';
import peopleIMG from '../../images/people.jpg';
import speciesIMG from '../../images/species.webp';


export const Overview: React.FC = () => {

    return(
        <div className="main">
            <img src={logo} className="logo"/>
            <CardOverview type="Films" text="Find your favorite films within the Star Wars universe" img={filmsIMG}/>
            <CardOverview type="Species" text="Research the differente species within the Star Wars universe" img={speciesIMG}/>
            <CardOverview type="People" text="Search persons or characters within the Star Wars universe" img={peopleIMG}/>
            <CardOverview type="Planets" text="Research all different planets within the Star Wars universe" img={planetsIMG}/>
            <CardOverview type="Starships" text="Find different starships within the Star Wars universe" img={startshipsIMG}/>
            <CardOverview type="Vehicles" text="Search for your favorite vehicles within the Star Wars universe" img={vehiclesIMG}/>
        </div>
    )

};