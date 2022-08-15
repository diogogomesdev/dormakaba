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

//display:"inline-block";margin-right:"10px";margin-left:"10px";margin-bottom:"20px"

export const CardOverview: React.FC<Props> = ({type, text, img}) => {

    return(
        <Card sx={{ maxWidth: 355, display: "inline-block", marginRight:"10px",marginLeft:"10px",marginBottom:"20px"}}>
                <CardActionArea>
                    <img src={img} alt={type} style={{width:"100%",height:"170px",display:"block",margin:"auto"}}/>
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