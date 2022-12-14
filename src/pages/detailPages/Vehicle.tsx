// Components
import { Logout } from '../../components/Logout';
import { LogoImage } from '../../components/LogoImage';

// React router
import { useParams } from 'react-router-dom';

// Material UI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface vehicle {
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    max_atmosphering_speed: string;
    crew: string;
    passengers: string;
    cargo_capacity: string;
    consumables: string;
    vehicle_class: string;
    pilots: string[];
    films: string[];
}

interface Props {
    data: vehicle;
}

export const Vehicle: React.FC<Props> = ({data}) => {

    var param = useParams();
    var url = "resource/" + param.id;

    return(
        <div className="main">
            <Logout type="complete" url={url}/>
            <LogoImage />
            <h1 style={{color:"white", fontSize:"50px", marginBottom:"5px", marginTop:"10px"}}>{data.name}</h1>
            <Card sx={{ maxWidth:300 }} className="card_detail">
                <CardContent>
                    <Typography variant="h6">Model</Typography>
                    <Typography variant="body1" color="text.secondary">{data.model}</Typography>
                    <Typography variant="h6">Vehicle class</Typography>
                    <Typography variant="body1" color="text.secondary">{data.vehicle_class}</Typography>
                    <Typography variant="h6">Manufacturer</Typography>
                    <Typography variant="body1" color="text.secondary">{data.manufacturer}</Typography>
                    <Typography variant="h6">Cost in credits</Typography>
                    <Typography variant="body1" color="text.secondary">{data.cost_in_credits}</Typography>
                    <Typography variant="h6">length</Typography>
                    <Typography variant="body1" color="text.secondary">{data.length}</Typography>
                    <Typography variant="h6">Max atmosphering speed</Typography>
                    <Typography variant="body1" color="text.secondary">{data.max_atmosphering_speed}</Typography>
                    <Typography variant="h6">Crew</Typography>
                    <Typography variant="body1" color="text.secondary">{data.crew}</Typography>
                    <Typography variant="h6">Passengers</Typography>
                    <Typography variant="body1" color="text.secondary">{data.passengers}</Typography>
                    <Typography variant="h6">Cargo capacity</Typography>
                    <Typography variant="body1" color="text.secondary">{data.cargo_capacity}</Typography>
                    <Typography variant="h6">Consumables</Typography>
                    <Typography variant="body1" color="text.secondary">{data.consumables}</Typography>
                </CardContent>
            </Card>
        </div>
    )
 };