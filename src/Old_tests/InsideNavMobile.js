import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default function InsideNavMobile() {

  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="menu">
        <List >
          <ListItem disablePadding >
            <ListItemButton component="a" href="/" sx={{textAlign:"center"}}>
              <ListItemText primary="About" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding >
            <ListItemButton component="a" href="/" sx={{textAlign:"center"}}>
              <ListItemText primary="Web dev" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/" sx={{textAlign:"center"}}>
              <ListItemText primary="Design" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/" sx={{textAlign:"center"}}>
              <ListItemText primary="Contact" />
            </ListItemButton>
          </ListItem>
        </List>
    
      </nav>
    </Box>
  );
}