import { ListItemButton, List, ListItem } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <List sx={{ display: 'flex' }}>
      <ListItem color="secondary">
        <ListItemButton
          component={NavLink}
          to="/register"
          color="inherit"
          sx={{
            [`&.active`]: {
              backgroundColor: 'rgba(132,88,179, 0.3)',
              color: 'neutral.main',
              borderRadius: `8px`,
            },
          }}
        >
          Register
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton
          component={NavLink}
          to="/login"
          color="inherit"
          sx={{
            [`&.active`]: {
              backgroundColor: 'rgba(132,88,179, 0.3)',
              color: 'neutral.main',
              borderRadius: `8px`,
            },
          }}
        >
          Log In
        </ListItemButton>
      </ListItem>
    </List>
  );
};
export default AuthNav;
