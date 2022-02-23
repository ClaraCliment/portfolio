import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
//import Grid from '@mui/material/Grid';
//import cookie from '../assets/dev/cookie.jpg';
import DesignImages from './DesignImages'

const Design = () => {
  return (
    <Box id="design" sx={{width:"100%", textAlign:"center"}}>
      <Typography variant="h4" gutterBottom component="div" sx={{fontWeight:"800", color:"secondary.main", pt:4}}>
        Graphic design projects
      </Typography>

      {/** Partie projects */}
      <Box>
          <DesignImages />
      </Box>

      

    </Box>
  )
}

export default Design