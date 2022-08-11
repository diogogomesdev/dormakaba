import React from "react";

// Material UI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

interface Props {
    type: string;
}

export const CardResource: React.FC<Props> = ({type}) => {

    return(
            <Card sx={{ maxWidth: 250 }} className="card_resource">
                <CardActionArea>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">{type}</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
    )

};