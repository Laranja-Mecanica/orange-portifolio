import { createTheme } from "@mui/material"

export const theme = createTheme({
  palette: {
    primary: {
      main: '#222244',
      dark: '#111133',
      light: '#444466',
      contrastText: '#edeff2'
    },
    secondary: {
      main: '#ff5522',
      dark: '#cc4400',
      contrastText: '#edeff2'
    },
  },
  typography: {
    h1: {
      fontSize: '96px',
      fontWeight: 300
    },
    h2: {
      fontSize: '60px',
      fontWeight: 300
    },
    h3: {
      fontSize: '48px',
      fontWeight: 400
    },
    h4: {
      fontSize: '34px',
      fontWeight: 400
    },
    h5: {
      fontSize: '24px',
      fontWeight: 400
    },
    h6: {
      fontSize: '20px',
      fontWeight: 500
    },
    subtitle1: {
      fontSize: '16px',
      fontWeight: 400
    },
    subtitle2: {
      fontSize: '14px',
      fontWeight: 700
    },
    "label": {
      fontSize: '80px',
      fontWeight: 500,
      fontFamily: '"Roboto", sans-serif'
    },
    body1: {
      fontSize: '16px',
      fontWeight: 400
    },
    body2: {
      fontSize: '14px',
      fontWeight: 400
    },
    caption: {
      fontSize: '12px',
      fontWeight: 400
    },
    overline: {
      fontSize: '10px',
      fontWeight: 400
    },
    button: {
      fontSize: '15px',
      fontWeight: 500
    }
  }
})
