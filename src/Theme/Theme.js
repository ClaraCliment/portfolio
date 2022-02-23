import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#233E8B',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#FF6363',
      contrastText: '#ffffff',
    },
    // Noir (non pur)
    third: {
        main: '#1EAE98',
        contrastText: '#ffffff'
      },
    // Black cassé
    fourth: {
        main: '#A9F1DF',
        contrastText: '#233E8B'
    },
    fifth: {
      main: '#FFFFC7',
      contrastText: '#1EAE98'
  }
  },
  typography: {
    fontFamily: [
      'Montserrat',
    ].join(','),
  },
  shape:{
    borderRadius:0
  },
});