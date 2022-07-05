import React from 'react';
import { TextField, Stack, Paper, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const nav = useNavigate();

  const loginButtonClickHandler = () => {
    nav('/self-reflection')
  }

  return (
    <>
      <h1>Login Page</h1>
      <Paper className='login-sheet' elevation={3} sx={{width: '60vw', marginLeft: '20vw', marginRight:'20vw'}}>
        <Stack spacing={2} direction='column' sx={{width: '50vw', marginLeft: '5vw', marginRight: '5vw', paddingBottom: '2vw', marginBottom: '5vw'}}>
          <h1>Login</h1>
          <TextField label='Username'></TextField>
          <TextField label='Password' type='password'></TextField>
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