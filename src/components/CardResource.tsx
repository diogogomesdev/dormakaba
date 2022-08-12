import React from "react";

// Material UI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from "react-router-dom";

interface Props {
    type: string;
    url: string;
    resource: string;
}

export const CardResource: React.FC<Props> = ({type, url, resource}) => {

    const id = url.match(/\d+/);

    var urlDetail:string = "/resource/" + resource + "/" + id;

    return(
        <Link to={urlDetail}>
            <Card sx={{ maxWidth: 250 }} className="card_resource">
                <CardActionArea>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">{type}</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    )

};