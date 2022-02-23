import React from 'react';
import Box from '@mui/material/Box';
import NavLarge from './NavLarge';
import NavMobile from './NavMobile';

function Header() {
  return <Box sx={{ textAlign:"center"}}>
            <NavMobile />
            <NavLarge /> 
         </Box>
}

export default Header;