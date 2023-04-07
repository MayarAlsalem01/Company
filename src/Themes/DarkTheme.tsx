import { createTheme, ThemeOptions } from "@mui/material";

const themeOptions: ThemeOptions = {
    palette: {
      mode: 'light',
      primary: {
        main: '#5386FB',
       
      },
      secondary: {
        main: '#f50057',
      },
      background:{
        default:'#fff',
        paper:'#fff'
      },
      
    },
    
  };
  
  export const DarkTheme = createTheme(themeOptions);