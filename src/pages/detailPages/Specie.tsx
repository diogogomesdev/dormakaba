import logo from '../../images/logo.svg';

// Material UI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import { Logout } from '../../components/Logout';

interface specie {
    name: string;
    classification: string;
    designation: string;
    average_height: string;
    skin_colors: string;
    eye_colors: string;
    hair_colors: string;
    average_lifespan: string;
    homeworld: string;
    language: string;
    films: string[];
    people: string[];
}

interface Props {
    data: specie;
}

export const Specie: React.FC<Props> = ({data}) => {

    var param = useParams();
    var url = "resource/" + param.id;

    return(
        <div className="main">
            <Logout type="complete" url={url}/>
            <img src={logo} alt="logo" className="logo"/>
            <h1 style={{color:"white", fontSize:"50px", marginBottom:"5px", marginTop:"10px"}}>{data.name}</h1>

            <Card sx={{ maxWidth:300 }} className="card_detail">
                <CardContent>
                    <Typography variant="h6">Designation</Typography>
                    <Typography variant="body1" color="text.secondary">{data.designation}</Typography>
                    <Typography variant="h6">Classification</Typography>
                    <Typography variant="body1" color="text.secondary">{data.classification}</Typography>
                    <Typography variant="h6">Average lifespan</Typography>
                    <Typography variant="body1" color="text.secondary">{data.average_lifespan}</Typography>
                    <Typography variant="h6">Average height</Typography>
                    <Typography variant="body1" color="text.secondary">{data.average_height}</Typography>
                    <Typography variant="h6">Skin colors</Typography>
                    <Typography variant="body1" color="text.secondary">{data.skin_colors}</Typography>
                    <Typography variant="h6">Eye colors</Typography>
                    <Typography variant="body1" color="text.secondary">{data.eye_colors}</Typography>
                    <Typography variant="h6">Hair colors</Typography>
                    <Typography variant="body1" color="text.secondary">{data.hair_colors}</Typography>
                </CardContent>
            </Card>
        </div>
    )
 };