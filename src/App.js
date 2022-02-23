import './App.css';
import Box from '@mui/material/Box';
import Banner from './components/Banner';
import NavBar from './components/Header/NavBar'
import Me from './components/Me';
import Techs from './components/Techs';
import WebDev from './components/WebDev';
import UpButton from './components/UpButton';
import Design from './components/Design';
import Footer from './components/Footer'

function App() {
  return (
    <Box className="App" sx={{position:"relative"}}>
      <NavBar />
      <Me />
      <Banner />
      <WebDev />
      <Design />
      <Techs />
      <UpButton />
      <Footer />
    </Box>
  );
}

export default App;
