import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { useNavigate } from 'react-router-dom';


export const MainListItems = () => {
  const nav = useNavigate();

  return (
    <React.Fragment>
      <ListItemButton onClick={()=>{nav('/self-reflection')}}>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Standard"/>
      </ListItemButton>
      <ListItemButton onClick={()=>{nav('/admin')}}>
        <ListItemIcon>
          <AdminPanelSettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Admin" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="MHP" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <img src='./dashboardimg/Chaplain.png' height='25px' width='auto'/>
        </ListItemIcon>
        <ListItemText primary="Chaplain" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Dependent" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Primary Care Manager" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="SARC" />
      </ListItemButton>
    </React.Fragment>
  );
}


export const secondaryListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Resources" />
    </ListItemButton>
  </React.Fragment>
);