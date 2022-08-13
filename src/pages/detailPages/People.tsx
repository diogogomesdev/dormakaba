import logo from '../../images/logo.svg';

// Material UI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import { Logout } from '../../components/Logout';

interface person {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: string[];
    vehicles: string[];
    starships: string[];
}

interface Props {
    data: person;
}


export const People: React.FC<Props> = ({data}) => {

    var param = useParams();
    var url = "resource/" + param.id;

   return(
        <div className="main">
            <Logout type="complete" url={url}/>
            <img src={logo} alt="logo" className="logo"/>
            <h1 style={{color:"white", fontSize:"50px", marginBottom:"5px", marginTop:"10px"}}>{data.name}</h1>

            <Card sx={{ maxWidth:300 }} className="card_detail">
                <CardContent>
                    <Typography variant="h6">Gender</Typography>
                    <Typography variant="body1" color="text.secondary">{data.gender}</Typography>
                    <Typography variant="h6">Birth_year</Typography>
                    <Typography variant="body1" color="text.secondary">{data.birth_year}</Typography>
                    <Typography variant="h6">Height</Typography>
                    <Typography variant="body1" color="text.secondary">{data.height}</Typography>
                    <Typography variant="h6">Mass</Typography>
                    <Typography variant="body1" color="text.secondary">{data.mass}</Typography>
                    <Typography variant="h6">Hair color</Typography>
                    <Typography variant="body1" color="text.secondary">{data.hair_color}</Typography>
                    <Typography variant="h6">Skin color</Typography>
                    <Typography variant="body1" color="text.secondary">{data.skin_color}</Typography>
                    <Typography variant="h6">Eye color</Typography>
                    <Typography variant="body1" color="text.secondary">{data.eye_color}</Typography>
                </CardContent>
            </Card>
        </div>
   )
};