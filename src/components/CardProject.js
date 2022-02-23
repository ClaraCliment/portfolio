import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import ChipOutlined from './ChipOutlined';


export default function CardProject({titre, texte, role, github, demo, chips, image}) {

    const cardstlyle = {
        backgroundColor:"fifth.main",
        border: "unset",

    }

  return (
    <Card elevation={0} style={{backgroundColor:"rgba(255, 255, 255, .0)"}} sx={{mb:3}}>
      <CardMedia
        component="img"
        minheight="400"
        minwidth="400"
        image={image}
        alt="lorem"
        sx={{borderRadius:99}}
      />
      <CardContent sx={{textAlign:"left", pl:0, mt:2}}>
        <Typography gutterBottom variant="h5" component="div" sx={{fontWeight:900, color:"primary.main"}}>
          {titre}
        </Typography>
        <Typography variant="body1" >
          {texte}
        </Typography>
        <Divider sx={{my:2}} />

        <Typography gutterBottom variant="body2" component="div" sx={{fontWeight:700, textTransform:"uppercase"}}>
          My responsibilities
        </Typography>
        <Typography variant="body1" >
          {role}
        </Typography>
        <Divider sx={{my:2}} />

        <Box>
          {chips.map((chip) => {
            return ( <ChipOutlined key={chip} texte={chip} />)
          })}
        </Box>
      </CardContent>
      <CardActions sx={{pl:0}}>
        <Button size="medium" href={github} color="third" variant="contained" sx={{borderRadius:99}}>GitHub</Button>
        {demo && <Button size="medium" href={demo} color="primary" variant="contained" sx={{borderRadius:99}}>Live demo</Button>}
      </CardActions>
      
    </Card>
  );
}
