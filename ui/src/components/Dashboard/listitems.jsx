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
import { AppContext } from '../../AppContext';


export const MainListItems = () => {
  // const {values, setters} = useContext(AppContext);
  // conole.log('Current User:', values.currentUser)
  const nav = useNavigate();
  const {values} = React.useContext(AppContext)
  const mainListItems = [
    {
      name: 'self-reflection',
      buttonComponent:       (
      <ListItemButton onClick={()=>{nav('/self-reflection')}}>
        <ListItemIcon>
          <PsychologyIcon />
        </ListItemIcon>
        <ListItemText primary="Self Reflection"/>
      </ListItemButton>
      )
    },
    {
      name: 'reachout',
      buttonComponent:       (
      <ListItemButton onClick={()=>{nav('/reachout')}}>
        <ListItemIcon>
          <EmojiPeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Reach Out"/>
      </ListItemButton>
      )
    },
    {
      name: 'admin',
      buttonComponent:       (
      <ListItemButton onClick={()=>{nav('/admin')}}>
        <ListItemIcon>
          <AdminPanelSettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Admin" />
      </ListItemButton>
      )
    },
    {
      name: 'mhp',
      buttonComponent:       (
      <ListItemButton onClick={()=>{nav('/mhp')}}>
        <ListItemIcon>
          <LocalHospitalIcon />
        </ListItemIcon>
        <ListItemText primary="MHP" />
      </ListItemButton>
      )
    },
    {
      name: 'chaplain',
      buttonComponent:       (
      <ListItemButton onClick={()=>{alert('this feature is not implemented yet')}}>
        <ListItemIcon>
          <img src='../dashboardimg/Chaplain.png' height='25px' width='auto'/>
        </ListItemIcon>
        <ListItemText primary="Chaplain" />
      </ListItemButton>
      )
    },
    {
      name: 'dependent',
      buttonComponent:       (
      <ListItemButton onClick={()=>{alert('this feature is not implemented yet')}}>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Dependent" />
      </ListItemButton>
      )
    },
    {
      name: 'pcm',
      buttonComponent:       (
      <ListItemButton onClick={()=>{alert('this feature is not implemented yet')}}>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Primary Care Manager" />
      </ListItemButton>
      )
    },
    {
      name: 'sarc',
      buttonComponent:       (
      <ListItemButton onClick={()=>{alert('this feature is not implemented yet')}}>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="SARC" />
      </ListItemButton>
      )
    },
  ]
  return (
    <React.Fragment>
      {mainListItems.filter((e)=>{
        if(e.name==='sarc' && values.currentUser.role.isSARC)
          return true;
        if(e.name==='pcm' && values.currentUser.role.isPCM)
          return true;
        if(e.name==='dependent' && values.currentUser.role.isDependent)
          return true;
        if(e.name==='chaplain' && values.currentUser.role.isChaplain)
          return true;
        if(e.name==='admin' && values.currentUser.role.isAdmin)
          return true;
        if(e.name==='reachout' && values.currentUser.role.isUser)
          return true;
        if(e.name==='self-reflection' && values.currentUser.role.isUser)
          return true;
        if(e.name==='mhp' && values.currentUser.role.isMHP)
          return true;

        return false;
      })
      .map((e) => {
        return <span key={e.name}>{e.buttonComponent}</span>;
      })}
    </React.Fragment>
  );
}


export const SecondaryListItems = () => {
  const nav = useNavigate();
  // let user = values
  // conosole.log(values)
  // console.log('user:', user);
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


