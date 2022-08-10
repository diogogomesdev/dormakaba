import React from "react";

// Material UI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

interface Props {
    type: string;
    text: string;
    img: string;
}

export const CardOverview: React.FC<Props> = ({type, text, img}) => {

    return(
            <Card sx={{ maxWidth: 355 }} className="card_overview">
                <CardActionArea>
                    <img src={img} className="card_image"/>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {type}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {text}
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
    )

};