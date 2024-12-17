import  { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import { Menu as MenuIcon, People as PeopleIcon, Dashboard as DashboardIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {/* Кнопка для скрытия/открытия Sidebar */}
      <IconButton
        onClick={toggleSidebar}
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ position: 'absolute', top: 20, left: 20, zIndex: 1201, display: { sm: 'none' } }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        variant="permanent"
        open={isOpen}
        onClose={toggleSidebar}
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
            backgroundColor: '#1E1E2D',
            color: '#fff',
          },
        }}
      >
        <List>
          <ListItem component={Link} to="/dashboard">
            <ListItemIcon>
              <DashboardIcon style={{ color: '#fff' }} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>

          <ListItem  component={Link} to="/dashboard/users">
            <ListItemIcon>
              <PeopleIcon style={{ color: '#fff' }} />
            </ListItemIcon>
            <ListItemText primary="Users" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Sidebar;
