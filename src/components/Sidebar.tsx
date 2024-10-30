// src/components/Sidebar.tsx
import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography, Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

import RisikoSpredning from '../pages/RisikoSpredning';
import WorkInProgress01 from '../pages/Work_in_progress_01';
import WorkInProgress02 from '../pages/Work_in_progress_02';
import WorkInProgress03 from '../pages/Work_in_progress_03';
import WorkInProgress04 from '../pages/Work_in_progress_04';

const Sidebar: React.FC = () => {
  const [activeItem, setActiveItem] = useState('Risiko Spredning');

  const menuItems = [
    { text: 'Risiko Spredning', icon: <HomeIcon />, component: <RisikoSpredning /> },
    { text: 'Work in progress 01', icon: <DashboardIcon />, component: <WorkInProgress01 /> },
    { text: 'Work in progress 02', icon: <AccountCircleIcon />, component: <WorkInProgress02 /> },
    { text: 'Work in progress 03', icon: <SettingsIcon />, component: <WorkInProgress03 /> },
    { text: 'Work in progress 04', icon: <HelpOutlineIcon />, component: <WorkInProgress04 /> },
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': { width: 240, boxSizing: 'border-box', backgroundColor: '#f5f5f5' },  // Sidebar farve
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap sx={{ color: '#383838',/* farver header tekst */ fontWeight: 'bold', margin: 'auto' }}> 
            My SaaS App
          </Typography> 
        </Toolbar>
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {menuItems.map((item, index) => (
              <ListItem
                button
                key={index}
                onClick={() => setActiveItem(item.text)}
                sx={{
                  '&:hover': { backgroundColor: '#e3f2fd' },
                  backgroundColor: activeItem === item.text ? '#e3f2fd' : 'inherit',
                }}
              >
                <ListItemIcon sx={{ color: '#383838' }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box sx={{ flexGrow: 1, padding: 3 }}>
        {menuItems.find(item => item.text === activeItem)?.component}
      </Box>
    </Box>
  );
};

export default Sidebar;
