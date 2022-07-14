

import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import SelfReflectionPage from '../SelfReflectionPage/SelfReflectionPage';
import { MainListItems, SecondaryListItems } from './listitems';
import { useContext } from 'react';
import propTypes from 'prop-types';
import { AppContext } from '../../AppContext';
import { useNavigate } from 'react-router-dom';
// import config from '../../config';
// const ApiUrl = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;
// import NotificationDialogButton from './NotificationDialogButton';
import "./Dashboard.css"
import { SignedInAsTypography } from '../Shared/CustomComponents';

function Copyright(props) {
  return (
    <div display="block">
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Reach
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </div>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      backgroundColor: '#EDF6F9',
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();


const DashboardContent = ({DisplayItem, DisplayTitle}) => {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const {values} = useContext(AppContext)
  console.log('Values From AppContext:', values);
  const nav = useNavigate();
  if (!values.currentUser.role.isUser) nav('/error');

let containerStyle = {marginLeft:"0vw", mt: 4, mb: 4, width: "85vw" , backgroundColor:"131, 197, 190"}




  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open} sx={{backgroundColor: '#006D77'}}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h5"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1,
                }}
            >
              {DisplayTitle.toUpperCase()}
            </Typography>

            <IconButton color="inherit" onClick={() => {nav('/login')}}>
              <Badge color="secondary">
                <LogoutIcon />
              </Badge>
            </IconButton>
            {/* <NotificationDialogButton /> */}
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1]
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            <MainListItems/>
            <Divider sx={{ my: 1 }} />
            <SecondaryListItems/>
          </List>
          <Divider />
          { open ?           
          <><SignedInAsTypography
              sx={{ flexGrow: 1,
                  position: 'absolute',
                  bottom: '16px',
                  left: '0'
                 }}
            >
              {`SIGNED IN AS:`}
            </SignedInAsTypography>
            <SignedInAsTypography
              sx={{ flexGrow: 1,
                  position: 'absolute',
                  bottom: '0px',
                  left: '0'
                 }}
            >
              {`${values.currentUser.username.toUpperCase()}`}
            </SignedInAsTypography></> : <></>}
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: 'rgba(131, 197, 190, 0.3)', 
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
            marginLeft:"0vw"
          }}
        >
          <Toolbar />
          <Container maxWidth='lg' sx={{...containerStyle}}>
            <DisplayItem />
            {/* above is the page we are displaing */}
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

DashboardContent.propTypes = {
  DisplayItem: propTypes.any,
  DisplayTitle: propTypes.string
}
// export default function Dashboard() {
//   return <DashboardContent />;
// }





export default DashboardContent;