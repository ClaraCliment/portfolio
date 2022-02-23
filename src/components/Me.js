import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import myphoto from './../assets/clara_climent.jpg';

export default function Me() {

  return (
    
      <Grid container spacing={2} sx={{display:"flex", flexDirection:"row", width:"80%", mx:"auto", py:4}}>
        <Grid item xs={12} sm={4} sx={{position:"relative"}}>
            <Avatar
                alt="Clara Climent"
                src={myphoto}
                sx={{ width: {xs:"250px", sm:"150px", md:"200px"}, height: {xs:"250px", sm:"150px", md:"200px"}, alignSelf:"flex-end", mx:"auto" }}
            />
        </Grid>
        <Grid item xs={12} sm={8}>
        <Typography color="primary.main" variant="h4" gutterBottom component="div" sx={{textAlign:"left", fontWeight:"800", pt:4}}>
            Clara Climent
        </Typography>
        <Typography variant="subtitle1" gutterBottom component="div" sx={{textAlign:"left", lineHeight:1.4, fontWeight:400, color:"black", letterSpacing:1.2, pb:1, textTransform:"uppercase"}}>
          Front-end web developer & Graphic designer
        </Typography>
        <Typography variant="subtitle2" gutterBottom component="div" sx={{textAlign:"left", lineHeight:1.4, fontWeight:400, color:"black", letterSpacing:1.2, pb:4}}>
         Welcome to my portfolio online. Discover some of my projects in web dev & design.
        </Typography>
        </Grid>
      </Grid>
    
  );
}
