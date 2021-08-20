import React from 'react';
import './Header.css';
import { createTheme, TextField, ThemeProvider } from '@material-ui/core';

const Header = () => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: '#fff'
      },
      type: 'dark'
    }
  });
  return (
    <div>
      <span className="title">Champ Hunt</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField id="standard-basic" label="Standard" />
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
