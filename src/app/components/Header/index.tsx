import React from 'react';
import { AppBar, Box, Toolbar, IconButton, Button } from '@mui/material';

export namespace Header {
  export interface Props {
    title: string;
  }
}

export const Header = ({ title }: Header.Props): JSX.Element => {

  return (
    <Box 
      sx={{flexGrow: 1}}
      style= {{backgroundColor: "#222831!important"}}
    >
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
            </IconButton>
            <Button 
              href="/"
              sx={{ 
                flexGrow: 1,
                color: 'white'
              }}
            >
                { title }
            </Button>
            <Button 
              color="inherit" 
              href="/favorites"
            > 
              Favorites 
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
  );
};
