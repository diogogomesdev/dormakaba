import logo from '../../images/logo.svg';

// Material UI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import { Logout } from '../../components/Logout';

interface planet {
    name: string;
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: string;
    population: string;
    residents: string[];
    films: string[];
}

interface Props {
    data: planet;
}

export const Planet: React.FC<Props> = ({data}) => {

    var param = useParams();
    var url = "resource/" + param.id;
    
    return(
        <div className="main">
            <Logout type="complete" url={url}/>
            <img src={logo} alt="logo" className="logo"/>
            <h1 style={{color:"white", fontSize:"50px", marginBottom:"5px", marginTop:"10px"}}>{data.name}</h1>

            <Card sx={{ maxWidth:300 }} className="card_detail">
                <CardContent>
                    <Typography variant="h6">Population</Typography>
                    <Typography variant="body1" color="text.secondary">{data.population}</Typography>
                    <Typography variant="h6">Gravity</Typography>
                    <Typography variant="body1" color="text.secondary">{data.gravity}</Typography>
                    <Typography variant="h6">Rotation period</Typography>
                    <Typography variant="body1" color="text.secondary">{data.rotation_period}</Typography>
                    <Typography variant="h6">Orbital period</Typography>
                    <Typography variant="body1" color="text.secondary">{data.orbital_period}</Typography>
                    <Typography variant="h6">Diameter</Typography>
                    <Typography variant="body1" color="text.secondary">{data.diameter}</Typography>
                    <Typography variant="h6">Climate</Typography>
                    <Typography variant="body1" color="text.secondary">{data.climate}</Typography>
                    <Typography variant="h6">Terrain</Typography>
                    <Typography variant="body1" color="text.secondary">{data.terrain}</Typography>
                    <Typography variant="h6">Surface water</Typography>
                    <Typography variant="body1" color="text.secondary">{data.surface_water}</Typography>
                </CardContent>
            </Card>
        </div>
    )
 };