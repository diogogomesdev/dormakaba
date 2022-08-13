import logo from '../../images/logo.svg';

import {useParams} from "react-router-dom";

// Material UI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Logout } from '../../components/Logout';

interface film {
    title: string;
    episode_id: string;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    characters: string[];
    planets: string[];
    starships: string[];
    vehicles: string[];
    species: string[];
}

interface Props {
    data: film;
}

export const Film: React.FC<Props> = ({data}) => {

    var param = useParams();
    var url = "resource/" + param.id;

    return(
        <div className="main">
            <Logout type="complete" url={url}/>
            <img src={logo} alt="logo" className="logo"/>
            <h1 style={{color:"white", fontSize:"50px", marginBottom:"5px", marginTop:"10px"}}>{data.title}</h1>

            <Card sx={{ maxWidth: 700 }} className="card_detail">
                <CardContent>
                    <Typography variant="h6">Episode ID</Typography>
                    <Typography variant="body1" color="text.secondary">{data.episode_id}</Typography>
                    <Typography variant="h6">Director</Typography>
                    <Typography variant="body1" color="text.secondary">{data.director}</Typography>
                    <Typography variant="h6">Producer</Typography>
                    <Typography variant="body1" color="text.secondary">{data.producer}</Typography>
                    <Typography variant="h6">Release date</Typography>
                    <Typography variant="body1" color="text.secondary">{data.release_date}</Typography>
                    <Typography variant="h6">Opening crawl</Typography>
                    <Typography variant="body1" color="text.secondary">{data.opening_crawl}</Typography>
                </CardContent>
            </Card>
        </div>
    )
 };