import React from 'react';
import {  ThemeProvider } from '@mui/material/styles';
import {DarkTheme} from './Themes/DarkTheme'
import './App.css';

import Company from './Company/Company';
import { CssBaseline } from '@mui/material';




function App() {
  return (
      <>
        <ThemeProvider theme={DarkTheme}>
          <CssBaseline/>
              <Company/>
          </ThemeProvider>
      </>
  );
}

export default App;
