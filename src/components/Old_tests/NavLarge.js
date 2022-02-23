import React from 'react';
import './NavLarge.css';
import Box from '@mui/material/Box';
import Logo from "../assets/svg/CC_logo";
import Link from '@mui/material/Link';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Typography from '@mui/material/Typography';

function NavLarge() {

  return <Box sx={{ display: { xs: 'none', md: 'flex' }, flexDirection:"column", justifyContent:"center", width:"auto"}}>
                <Box sx={{mt:4}} >
                    <Link href="/" sx={{textDecoration:"none", color:"black"}}>
                        <Logo size="80px" />
                        
                        <Typography className="title" variant="h1" gutterBottom component="div" sx={{mt:2, fontWeight:"300", textTransform:"uppercase", letterSpacing:4, fontSize:"30px"}} >
                            Clara Climent
                        </Typography>
                    
                    </Link>
                </Box>
                <Box className='nav'>
                    <ul className='nav_list' >
                        <li className='nav_item' >
                            <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", textAlign:"center", alignItems:"center"}}>
                                <a className="lien" href="/">About</a>
                                <ArrowDropDownIcon className="sous_icone" />
                            </Box>
                        </li>
                        <li className='nav_item' >
                            <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", textAlign:"center", alignItems:"center"}}>
                                <a className="lien" href="/">Web dev</a>
                                <ArrowDropDownIcon className="sous_icone" />
                            </Box>
                        </li>
                        <li className='nav_item' >
                            <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", textAlign:"center", alignItems:"center"}}>
                                <a className="lien" href="/">Design</a>
                                <ArrowDropDownIcon className="sous_icone" />
                            </Box>
                        </li>
                        <li className='nav_item' >
                            <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", textAlign:"center", alignItems:"center"}}>
                                <a className="lien" href="/">Contact</a>
                                <ArrowDropDownIcon className="sous_icone" />
                            </Box>
                        </li>


                    </ul>
                </Box>
         </Box>
}

export default NavLarge;
