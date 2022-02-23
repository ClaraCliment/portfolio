import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';

const Footer = () => {
  return (
    <Box id="contact" sx={{bgcolor:"primary.main", width:"100%", textAlign:"center", py:8}}>
      <Typography variant="h6" gutterBottom component="div" sx={{fontWeight:"800", color:"white"}}>
        Contact
      </Typography>
      <Box>
      <Typography variant="subtitle1" gutterBottom component="div" sx={{lineHeight:1.4, fontWeight:300, color:"white", letterSpacing:1.2, maxWidth:"700px", mx:"auto",  px:"10%"}}>
        climent.clara@gmail.com | 0032(0)485463119</Typography>
        <IconButton color="third" aria-label="Github" sx={{width:"50px", height:"auto"}} href="https://github.com/ClaraCliment" target="_blank">
        <GitHubIcon sx={{width:"40px", height:"auto"}}  />
      </IconButton>
      <IconButton color="third" aria-label="LinkedIn" sx={{width:"50px", height:"auto"}} href="https://www.linkedin.com/in/claracliment/" target="_blank">
        <LinkedInIcon sx={{width:"40px", height:"auto"}} />
      </IconButton>
      </Box>
      

    </Box>
  )
}

export default Footer