import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import InsideNavMobile from './InsideNavMobile';
import IconButton from '@mui/material/IconButton';
import Logo from "../assets/svg/CC_logo";
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';


export default function NavMobile() {
  
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (

    <Box sx={{ display: { xs: 'flex', md: 'none' }, flexDirection:'row', justifyContent:"space-between", alignItems:"center"}}>
            <Box sx={{ p:"20px", justifyContent:"left" }}>
              <Link href="/" sx={{display:"flex", flexDirection:"row", textDecoration:"none", color:"black"}}>
              <Logo size="60px" />
                <Typography className="title" variant="h6" gutterBottom component="div" sx={{my:2, ml:2, fontWeight:"300", textTransform:"uppercase", letterSpacing:3, fontSize:"18px"}} >
                    Clara Climent
                </Typography>

              </Link>
            
            </Box>

            <Box sx={{ p:"20px", justifyContent:"right" }}>
              <IconButton
                    onClick={handleClickOpen}
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                  >
                    <MenuIcon />
                  </IconButton>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >

                <DialogContent>
                  <InsideNavMobile />
                </DialogContent>
                
              </Dialog>
            </Box>
  </Box>
  );
}