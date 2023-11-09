import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from "react-router-dom";
import { getPage } from '../Services/PageService';

const drawerWidth = 240;

interface SideBarProps {
  isMobile: boolean;
  mobileOpen: boolean;
  onClose: () => void;
}

export default function SideBar({isMobile, mobileOpen, onClose}: SideBarProps) {
  const drawerVariant = isMobile ? "temporary" : "permanent";

  return (
    <Drawer
      variant={drawerVariant}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
      open={mobileOpen}
      onClose={onClose}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          {['Home', 'Work', 'Hobbies', 'About me'].map((text, index) =>
            (
              <ListItem key={text} disablePadding>
                <ListItemButton component={Link} to={getPage(text).link}>
                  <ListItemIcon>
                    {getPage(text).icon}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
        </List>
        <Divider />
      </Box>
    </Drawer>
  )
}