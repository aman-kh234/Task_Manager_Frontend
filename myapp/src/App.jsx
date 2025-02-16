import React from 'react';
import { ThemeProvider } from '@mui/material/styles'; // Material-UI ThemeProvider
import { darkTheme } from './theme/darkTheme'; // Your custom theme
import { CssBaseline, Typography } from '@mui/material';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div>
        <Typography variant="h4">Code with Aman</Typography>
      </div>
    </ThemeProvider>
  );
}

export default App;

