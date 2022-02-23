import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../../assets/svg/CC_logo_bleu';
import Link from '@mui/material/Link';

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar id="navbar" position="static" sx={{bgcolor:"fourth.main", borderRadius:99, my:"10px", mx:"auto", width:"96%"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
            <Link href="/"><Logo /></Link>
            

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              <MenuItem onClick={handleCloseNavMenu} sx={{m:2}}>
                  <Typography color="primary.main" component="a" href="#about" textAlign="center" sx={{fontWeight:800, fontSize:"20px", textDecoration:"none"}}>about</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} sx={{m:2}}>
                  <Typography color="primary.main" component="a" href="#web" textAlign="center" sx={{fontWeight:800, fontSize:"20px", textDecoration:"none"}}>web dev</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} sx={{m:2}}>
                  <Typography color="primary.main" component="a" href="#design" textAlign="center" sx={{fontWeight:800, fontSize:"20px", textDecoration:"none"}}>design</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} sx={{m:2}}>
                  <Typography color="primary.main" component="a" href="#techs" textAlign="center" sx={{fontWeight:800, fontSize:"20px", textDecoration:"none"}}>techs</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} sx={{m:2}}>
                  <Typography color="primary.main" component="a" href="#contact" textAlign="center" sx={{fontWeight:800, fontSize:"20px", textDecoration:"none"}}>contact</Typography>
              </MenuItem>
            </Menu>
          </Box>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent:"flex-end" }}>
            <Button
                  href="#about"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'primary.main', display: 'block', fontWeight:800 }}
                >
                  about
            </Button>
            <Button
                  href="#web"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'primary.main', display: 'block', fontWeight:800 }}
                >
                  web dev
            </Button>
            <Button
                  href="#design"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'primary.main', display: 'block', fontWeight:800 }}
                >
                  design
            </Button>
            <Button
                  href="#techs"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'primary.main', display: 'block', fontWeight:800 }}
                >
                  techs
            </Button>
            <Button
                  href="#contact"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'primary.main', display: 'block', fontWeight:800 }}
                >
                  contact
            </Button>
            
            
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent:"flex-end" }}>
          <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon color="primary" />
            </IconButton>
            </Box>

          
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
