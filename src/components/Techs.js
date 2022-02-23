import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShapes } from '@fortawesome/free-solid-svg-icons';
//import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import ComputerIcon from '@mui/icons-material/Computer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ColorLensIcon from '@mui/icons-material/ColorLens';

// <FontAwesomeIcon style={{ color: "#FF6363" }} icon={faShapes} beat />

function generate(element) {
    return [0, 1, 2].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }

export default function Techs() {

    const web = ["HTML", "CSS", "JavaScript", "React", "Material UI", "Bootstrap"];
    const design = ["Illustrator", "Photoshop", "InDesign", "Figma", "Framer"];

  return (
    
      <Grid id="techs" container spacing={2} sx={{display:"flex", width:"80%", mx:"auto", py:4}}>
        {/** Partie progs dev */}
        <Grid item xs={12} sm={4} sx={{mx:"auto"}}>
            <Avatar sx={{width:"80px", height:"80px", bgcolor:"secondary.main"}}>
                <ComputerIcon sx={{ fontSize: 40 }}  color="fifth"/>
            </Avatar>
            <Typography variant="h4" gutterBottom component="div" sx={{textAlign:"left", fontWeight:"800", color:"primary.main", pt:4}}>
            Web dev
        </Typography>
        <List> 
                {web.map((item) => {
                    return (<ListItem key={item} sx={{p:0}}><ListItemText> {item} </ListItemText> </ListItem>)
                })} 
        </List>
        </Grid>
        {/** Partie progs design */}
        <Grid item xs={12} sm={4}>
            <Avatar sx={{width:"80px", height:"80px", bgcolor:"primary.main"}}>
                <ColorLensIcon sx={{ fontSize: 40 }} color="fourth" />
            </Avatar>
            <Typography variant="h4" gutterBottom component="div" sx={{textAlign:"left", fontWeight:"800", color:"secondary.main", pt:4}}>
            Design
        </Typography>
        <List> 
                {design.map((item) => {
                    return (<ListItem key={item} sx={{p:0}}><ListItemText> {item} </ListItemText> </ListItem>)
                })} 
        </List>
        </Grid>
      </Grid>
    
  );
}
