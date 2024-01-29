import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#222244',
      dark: '#111133',
      light: '#444466',
      contrastText: '#edeff2',
    },
    secondary: {
      main: '#ff5522',
      dark: '#cc4400',
      contrastText: '#edeff2',
    },
    neutral: {
      70: '#e6e9f2',
      100: '#818388',
      110: '#515255',
    },
    info: {
      main: '#2348B1',
      80: '#608AE1',
    },
  },
  typography: {
    h1: {
      fontSize: '96px',
      fontWeight: 300,
      lineHeight: '40px'
    },
    h2: {
      fontSize: '60px',
      fontWeight: 300,
      lineHeight: '50px'
    },
    h3: {
      fontSize: '48px',
      fontWeight: 400,
      lineHeight: '40px'
    },
    h4: {
      fontSize: '34px',
      fontWeight: 400,
      lineHeight: '34px'
    },
    h5: {
      fontSize: '24px',
      fontWeight: 400,
      lineHeight: '24px'
    },
    h6: {
      fontSize: '20px',
      fontWeight: 500,
      lineHeight: '20px'
    },
    subtitle1: {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '16px'
    },
    subtitle2: {
      fontSize: '14px',
      fontWeight: 700,
      lineHeight: '24px'
    },
    label: {
      fontSize: '80px',
      fontWeight: 500,
      fontFamily: '"Roboto", sans-serif',
      lineHeight: '24px'
    },
    body1: {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '16px'
    },
    body2: {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '14px'
    },
    caption: {
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: '16px'
    },
    overline: {
      fontSize: '10px',
      fontWeight: 400,
      lineHeight: '12px'
    },
    button: {
      fontSize: '15px',
      fontWeight: 500,
      lineHeight: '26px'
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 690,
      md: 1050,
      lg: 1300,
      xl: 1650,
    },
  },
})
