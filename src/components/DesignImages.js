import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import amnestymannif from '../assets/design/Amnesty_1.jpg';
import amnestyeco from '../assets/design/Amnesty_2.jpg';
import awsrflyer from '../assets/design/AWSR_1.jpg';
import capabribus from '../assets/design/CAP48_abribus.jpg';
import capdepliant from '../assets/design/CAP48_depliant.jpg';
import capdiplomes from '../assets/design/CAP48_diplomes.jpg';
import cartevisite1 from '../assets/design/Carte_visite.jpg';
import cartevisite2 from '../assets/design/Carte_visite2.jpg';
import limabrochure from '../assets/design/Lima_brochure.jpg';
import voobrochure from '../assets/design/VOO_brochure.jpg';
import voocover from '../assets/design/VOO_cover.jpg';
import voovitrine from '../assets/design/VOO_vitrine.jpg';
import voobrochure2 from '../assets/design/VOO_brochure2.jpg';
import voobrochure3 from '../assets/design/VOO_brochure3.jpg';
import vooflyer from '../assets/design/VOO_flyer.jpg';
import capannonce from '../assets/design/CAP48_annonce.jpg';
import vivium1 from '../assets/design/Vivium_Annonce1.jpg';
import limaaffichage from '../assets/design/Lima_affichage.jpg';
import limabook from '../assets/design/Lima_book.jpg';
import limapro from '../assets/design/Lima_Pro2.jpg';
import limarollup from '../assets/design/Lima_rollup.jpg';
import digi1 from '../assets/design/digi_1.png';
import digi2 from '../assets/design/digi_2.png';
import digi3 from '../assets/design/digi_3.png';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function DesignImages() {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <ImageList sx={{ width: {sx:"100%", md:"80%"}, mx:"auto", my:4}} cols={isMobile ? 3 : 1} >
      {itemData.map((item, index) => (
        <ImageListItem key={index}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: digi1,
    title: 'Social media & bannering',
  },
  {
    img: digi2,
    title: 'Social media & bannering',
  },
  {
    img: digi3,
    title: 'Social media & bannering',
  },
  {
    img: vivium1,
    title: 'Vivium annonce',
  },
  {
    img: limaaffichage,
    title: 'Grande affiche Lima',
  },
  {
    img: capannonce,
    title: 'Annonce CAP48',
  },
  {
    img: capabribus,
    title: 'Abribus CAP48',
  },
  {
    img: capdepliant,
    title: 'Dépliant CAP48',
  },
  {
    img: capdiplomes,
    title: 'Diplômes CAP48',
  },
  {
    img: voobrochure2,
    title: 'Brochure VOO',
  },
  {
    img: vooflyer,
    title: 'Flyer VOO',
  },
  {
    img: voobrochure3,
    title: 'Brochure VOO',
  },
  {
    img: amnestymannif,
    title: 'Anlesty annonce',
  },
  {
    img: amnestyeco,
    title: 'Amnesty annonce',
  },
  {
    img: awsrflyer,
    title: 'FLyer AWSR',
  },
  {
    img: cartevisite1,
    title: 'Création logo & carte de visite',
  },
  {
    img: cartevisite2,
    title: 'Création logo & carte de visite',
  },
  {
    img: limabrochure,
    title: 'Brochure Lima',
  },
  {
    img: voobrochure,
    title: 'Brochure VOO',
  },
  {
    img: voocover,
    title: 'Cover VOO',
  },
  {
    img: voovitrine,
    title: 'Vitrine VOO',
  },
  {
    img: limabook,
    title: 'Lima book',
  },
  {
    img: limapro,
    title: 'Lima Pro',
  },
  {
    img: limarollup,
    title: 'Rollup Lima',
  },
  
];
