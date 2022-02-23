import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function IconButtonSizes() {
  return (
      
        <IconButton color="third" href="#navbar" aria-label="delete" size="large" style={{position:"fixed", bottom:"20px", right:"20px"}}>
            <ArrowUpwardIcon  />
        </IconButton>
    

  );
}
