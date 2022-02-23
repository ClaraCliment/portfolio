import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Banner = () => {
  return (
    <Box id="about" sx={{bgcolor:"primary.main", width:"100%", textAlign:"center", py:8}}>
      <Typography color="fourth.main" variant="h4" gutterBottom component="div" sx={{fontWeight:"800"}}>
        About me
      </Typography>
      <Typography variant="subtitle1" gutterBottom component="div" sx={{lineHeight:1.4, fontWeight:300, color:"white", letterSpacing:1.2, maxWidth:"700px", mx:"auto",  px:"10%"}}>
      After 12 years in the advertising industry as a graphic designer, I felt the need for renewal.
      I am currently doing an internship at BeCode Brussels in web development, with a particular interest in front-end development with HTML, CSS, React, and Material UI.
      </Typography>

    </Box>
  )
}

export default Banner