import React, { useEffect, useState} from 'react';
import config from './config'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ApiUrl = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;

function App() {
  const nav = useNavigate();
  let [names, setNames] = useState([ ]);

  useEffect(() => {
    fetch(ApiUrl + "/authors")
      .then(response => response.json())
      .then(data => setNames(data))
      .catch(err => console.log(err))
  }, []);

  return (
    <div>
      App is running - good work: 
      <Button onClick={()=>{nav('/login')}}>Login</Button>
      <Button onClick={()=>{nav('/signup')}}>Sign Up</Button>
      { names.map(author => author.firstName + " ")}
    </div>
  );
}

export default App;
