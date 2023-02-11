import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import AppBarComponent from './AppBarComponent';
import { Suspense } from 'react';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/system';

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#d0bdf4',
      darker: '#8458B3',
    },
    neutral: {
      main: '#e5eaf5',
      contrastText: '#a28089',
    },
  },
});

export const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppBarComponent position="static" />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>

      <Toaster position="top-right" reverseOrder={false} />
    </ThemeProvider>
  );
};
