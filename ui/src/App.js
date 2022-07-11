import React from 'react';
import config from './config'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ApiUrl = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;

function App() {
  console.log(ApiUrl);

  return (
    <div>
      App is running - good work: 
      <Button onClick={()=>{nav('/login')}}>Login</Button>
      <Button onClick={()=>{nav('/signup')}}>Sign Up</Button>
    </div>
  );
}

export default App;
