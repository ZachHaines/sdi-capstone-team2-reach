import React from 'react';
import { TextField, Stack, Paper, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import config from '../../config';
import bcrypt from 'bcryptjs';

const ApiUrl = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;

const LoginPage = () => {
  const nav = useNavigate();

  const loginButtonClickHandler = () => {
    const username = document.getElementById('username').value;
    let unhashedPassword = document.getElementById('password-textfield').value
    
    fetch(ApiUrl+'/members/')
      .then(res => res.json())
      .then(data => {
        data.forEach(el => {
          if(username === el.username) {
            fetch(ApiUrl+`/passwords/${el.passwords_id}`)
              .then(res => res.json())
              .then(data => {
                bcrypt.compare(unhashedPassword, data.password, function(err, result) {
                  // result == true
                  console.log('Entered Username:', username);
                  console.log('Entered Password', unhashedPassword);
                  console.log('result:', result);
                  if(result) {
                    nav('/self-reflection')
                  } else {
                    alert('The username/password combination does not exist. If you are a new user, please register.')
                  }
              });
              })
          }
        })
      })



  }

  return (
    <>
      <h1>Login Page</h1>
      <Paper className='login-sheet' elevation={3} sx={{width: '60vw', marginLeft: '20vw', marginRight:'20vw'}}>
        <Stack spacing={2} direction='column' sx={{width: '50vw', marginLeft: '5vw', marginRight: '5vw', paddingBottom: '2vw', marginBottom: '5vw'}}>
          <h1>Login</h1>
          <TextField id='username' label='Username'></TextField>
          <TextField id='password-textfield' label='Password' type='password'></TextField>
          <Button onClick={loginButtonClickHandler}>Login</Button>
        </Stack>
      </Paper>
      <Paper sx={{width: '60vw', marginLeft: '20vw', marginRight:'20vw'}} elevation={2} >
        <Stack spacing={2} direction='column' sx={{width: '50vw', marginLeft: '5vw', marginRight: '5vw', paddingBottom: '2vw'}}>
          <p>
            If you do not have an account, please create an account
          </p>
          <Button onClick={()=>{nav('/signup')}}>Sign Up</Button>
        </Stack>
      </Paper>
    </>
  )
}
export default LoginPage;