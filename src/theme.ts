import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#F58220', // PNC Orange
      contrastText: '#fff',
    },
    secondary: {
      main: '#002D72', // PNC Navy Blue
      contrastText: '#fff',
    },
    background: {
      default: '#f8f9fa',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"SF Pro Display", "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontSize: '2rem',
      fontWeight: 600,
      color: '#002D72',
    },
    h2: {
      fontSize: '1.75rem',
      fontWeight: 600,
      color: '#002D72',
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 500,
      color: '#002D72',
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 600,
      color: '#002D72',
    },
    body1: {
      fontSize: '0.875rem',
      color: '#333',
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '8px 16px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        },
      },
    },
    MuiBottomNavigation: {
      styleOverrides: {
        root: {
          height: 64,
        },
      },
    },
    MuiBottomNavigationAction: {
      styleOverrides: {
        root: {
          color: '#666',
          '&.Mui-selected': {
            color: '#F58220',
          },
        },
        label: {
          fontSize: '0.75rem',
          '&.Mui-selected': {
            fontSize: '0.75rem',
          },
        },
      },
    },
  },
});
