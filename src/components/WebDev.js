import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CardProject from './CardProject';
import cookie from '../assets/dev/cookie.png';
import room237 from '../assets/dev/room237.jpg';
import miam from '../assets/dev/miam.jpg';
import artisans from '../assets/dev/nosartisans.jpg';
import bookface from '../assets/dev/bookface.png';
import rpggame from '../assets/dev/rpggame.png';


const WebDev = () => {
  return (
    <Box id="web" sx={{width:"100%", textAlign:"center"}}>
      <Typography variant="h4" gutterBottom component="div" sx={{fontWeight:"800", color:"secondary.main", pt:4}}>
        Web dev projects
      </Typography>

      {/** Partie projects */}
      <Grid container spacing={{xs:0, sm:3}} sx={{display:"flex", justifyContent:"center", width:{xs:"80%", sm:"80%"}, mx:{xs:"auto", sm:"auto"}, py:4}}>
        {/** Partie progs dev */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <CardProject 
              image={artisans}
              titre="nos Artisans"
              texte="Platform dedicated to Belgian craftsmen."
              role="Fullstack developer as it is a project solo."
              github="https://github.com/ClaraCliment/nosartisans"
              
              chips={["HTML", "CSS", "SASS", "JavaScript", "React", "Material UI", "Node js", "Express", "Mongo DB"]} />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <CardProject 
              image={room237}
              titre="room 237"
              texte="Platform dedicated to Horror Movies."
              role="Group project. My roles: managing content with API Movie db, home page and movie page creation, responsive design, part of the login and subscribe page PHP management."
              github="https://github.com/ClaraCliment/getflix-1"
              demo="https://room237.000webhostapp.com/index.php"
              chips={["HTML", "CSS", "JavaScript", "PHP", "Bootstrap", "WAMP"]} />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <CardProject 
              image={cookie}
              titre="Cookie clicker"
              texte="A simplified cookie clicker game with JavaScript vanilla."
              role="Group project. My roles: front-end development, web design & responsive design."
              github="https://github.com/ClaraCliment/cookieClicker"
              demo="https://ivandandrea86.github.io/cookieClicker/"
              chips={["HTML", "CSS", "JavaScript"]} />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <CardProject 
              image={miam}
              titre="miam miam"
              texte="A restaurant website."
              role="Project solo. Using Bootstrap for the first time."
              github="https://github.com/ClaraCliment/restaurant-css-framework-"
              demo="https://claracliment.github.io/restaurant-css-framework-/index.html"
              chips={["HTML", "CSS", "JavaScript", "Bootstrap"]} />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <CardProject 
              image={bookface}
              titre="Bookface"
              texte="A platform like Facebook."
              role="Group project. My roles: front-end development & responsive design."
              github="https://github.com/ClaraCliment/restaurant-css-framework-"
              chips={["HTML", "CSS", "JavaScript", "React", "Material UI"]} />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <CardProject 
              image={rpggame}
              titre="Rpg game"
              texte="A mini desktop game."
              role="Solo project."
              github="https://github.com/ClaraCliment/RPG-Challenge"
              demo="https://claracliment.github.io/RPG-Challenge/"
              chips={["HTML", "CSS", "SASS", "JavaScript"]} />
        </Grid>
        
        
      </Grid>
      

    </Box>
  )
}

export default WebDev