import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { List, ListItem, ListItemButton } from '@mui/material';

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <List sx={{ display: 'flex' }}>
        <ListItem color="secondary">
          <ListItemButton
            component={NavLink}
            to="/"
            color="inherit"
            sx={{
              [`&.active`]: {
                backgroundColor: 'rgba(132,88,179, 0.3)',
                color: 'neutral.main',
                borderRadius: `8px`,
              },
            }}
          >
            Home
          </ListItemButton>
        </ListItem>

        {isLoggedIn && (
          <ListItem>
            <ListItemButton
              component={NavLink}
              to="/contacts"
              color="inherit"
              sx={{
                [`&.active`]: {
                  backgroundColor: 'rgba(132,88,179, 0.3)',
                  color: 'neutral.main',
                  borderRadius: `8px`,
                },
              }}
            >
              Contacts
            </ListItemButton>
          </ListItem>
        )}
      </List>
    </nav>
  );
};

export default Navigation;
