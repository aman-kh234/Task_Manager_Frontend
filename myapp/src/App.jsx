import React from 'react';
import { ThemeProvider } from '@mui/material/styles'; // Material-UI ThemeProvider
import { darkTheme } from './theme/darkTheme'; // Your custom theme
import Navbar from './Page/Navbar/Navbar';
import Home from './Page/Home/Home';
import Auth from './Page/Auth/Auth';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
          {/* <Navbar/>
          <Home/> */}
          <Auth/>
    </ThemeProvider>
  );
}

export default App;

