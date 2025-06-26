import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    customBackgrounds: {
      neutral: string;
      background: string;
      background2: string;
      border: string;
    };
  }

  interface Theme {
    gradients: {
      primary: string;
    };
  }

  interface PaletteOptions {
    customBackgrounds?: {
      neutral: string;
      background: string;
      background2: string;
      border: string;
    };
  }

  interface ThemeOptions {
    gradients?: {
      primary?: string;
    };
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#6E39CB',
    },
    text: {
      primary: '#3A3541',
      secondary: '#89868D',
      disabled: '#B4B2B7',
    },
    background: {
      default: '#FFFFFF',
      paper: '#E7E7F4',
    },
    grey: {
      100: '#F7F7F7',
      400: '#DBDCDE',
    },
    customBackgrounds: {
      neutral: '#F7F7F7',
      background: '#F4F5F9',
      background2: '#E7E7F4',
      border: '#DBDCDE',
    },
  },

  gradients: {
    primary: 'linear-gradient(#C2A1FD 0%, #9154FD 100%)',
  },

  typography: {
    fontFamily: '"Lato", sans-serif',
    h1: { fontSize: '32px', fontWeight: 'bold' },
    h2: { fontSize: '30px', fontWeight: 'bold' },
    h3: { fontSize: '28px', fontWeight: 'bold' },
    h4: { fontSize: '26px', fontWeight: 'bold' },
    h5: { fontSize: '24px', fontWeight: 'bold' },
    h6: { fontSize: '22px', fontWeight: 'bold' },
    subtitle1: { fontSize: '20px', fontWeight: 500 },
    subtitle2: { fontSize: '18px', fontWeight: 500 },
    body1: { fontSize: '16px', fontWeight: 400 },
    body2: { fontSize: '14px', fontWeight: 400 },
    caption: { fontSize: '12px', fontWeight: 400 },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '8px',
          fontWeight: 500,
          height: '46px',
          width: '330px',
          fontSize: '16px',
        },
        sizeSmall: {
          fontSize: '12.64px',
          height: '32px',
          width: '100px',
          borderRadius: '4px',
        },
        sizeMedium: {
          fontSize: '16px',
          height: '46px',
          width: '169px',
        },
        sizeLarge: {
          fontWeight: 500,
          height: '46px',
          width: '330px',
        },
        containedPrimary: {
          background: '#6E39CB',
          color: '#fff',
        },
        outlinedPrimary: {
          borderColor: '#6E39CB',
          color: '#6E39CB',
          '&:hover': {
            backgroundColor: '#f2e9fd',
            borderColor: '#6E39CB',
          },
        },
        textPrimary: {
          color: '#6E39CB',
          '&:hover': {
            backgroundColor: '#f2e9fd',
          },
        },
      },
      defaultProps: {
      disableElevation: true,
      variant: 'contained',
      color: 'primary',
      size: 'medium',
      },
    },
     MuiTextField: {
    defaultProps: {
      variant: 'outlined',
      fullWidth: true,
    },
  },

  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: '10px',
        height: '48px',
        width: '330px',
        backgroundColor: '#F9F9FC',
        '& fieldset': {
          borderColor: '#DADCE0',
        },
        '&:hover fieldset': {
          borderColor: '#A6A6F2',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#6E39CB',
          borderWidth: '2px',
        },
      },
      input: {
        padding: '12px 14px',
        fontSize: '14px',
        color: '#3A3541',
        '&::placeholder': {
          color: '#A0A0A0',
          opacity: 1,
        },
      },
    },
  },

  },
});

export default theme;
