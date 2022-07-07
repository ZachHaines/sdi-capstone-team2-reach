import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import PeopleIcon from '@mui/icons-material/People';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
// import HandshakeTwoToneIcon from '@mui/icons-material/HandshakeTwoTone';
// import HandshakeIcon from '@mui/icons-material/Handshake';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import PsychologyIcon from '@mui/icons-material/Psychology';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';

export const MainListItems = () => {
  const nav = useNavigate();

  return (
    <React.Fragment>
      <ListItemButton onClick={()=>{nav('/self-reflection')}}>
        <ListItemIcon>
          <PsychologyIcon />
        </ListItemIcon>
        <ListItemText primary="Self Reflection"/>
      </ListItemButton>
      <ListItemButton onClick={()=>{nav('/reachout')}}>
        <ListItemIcon>
          <EmojiPeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Reach Out"/>
      </ListItemButton>
      <ListItemButton onClick={()=>{nav('/admin')}}>
        <ListItemIcon>
          <AdminPanelSettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Admin" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <LocalHospitalIcon />
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


export const SecondaryListItems = () => {
  const nav = useNavigate();

  return(

  <React.Fragment>
    <ListItemButton onClick={()=>{nav('/resource')}}>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon >
      <ListItemText primary="Resources" />
    </ListItemButton>
    <ListItemButton onClick={()=>{nav('/profile')}}>
      <ListItemIcon>
        <AccountCircleIcon />
      </ListItemIcon >
      <ListItemText primary="Profile" />
    </ListItemButton>
  </React.Fragment>
  )
};