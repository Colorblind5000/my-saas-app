// src/pages/_app.tsx
import React from 'react';
import Sidebar from '../components/Sidebar';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    bg_farve: {
      main: '#dc004e',  
      dark: '#9a0036',
    },
    tekst_farver: {
      Mørk: '#00E5FF', 
      lys: '#63a4ff',
      kontrast: '#004ba0',
    },
    box_farver: {
      Mørk: '#388e3c', 
      lys: '#66bb6a',
      kontrast: '#2e7d32',
    },
    test_01: {
      Mørk: '#fbc02d',  
      lys: '#fff263',
      kontrast: '#c49000',
    },
    test_02: {
      Mørk: '#8e24aa',  
      lys: '#c158dc',
      kontrast: '#5c007a',
    },
    background: {
      default: '#fafafa', // Baggrundsfarve for appen
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    h1: { fontSize: '2.5rem', fontWeight: 600 },
    h2: { fontSize: '2rem', fontWeight: 500 },
  },
});

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <main style={{ flexGrow: 1, padding: '20px', marginLeft: 240 }}>
          <Component {...pageProps} />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default MyApp;
