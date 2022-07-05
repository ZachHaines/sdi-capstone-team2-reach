import React from 'react';
import { TextField, Stack, Paper, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const nav = useNavigate();

  const signupButtonClickHandler = () => {
    nav('/self-reflection')
  }

  return (
    <>
      <h1>Sign Up Page</h1>
      <Paper className='signup-sheet' elevation={3} sx={{width: '60vw', marginLeft: '20vw', marginRight:'20vw'}}>
        <Stack spacing={2} direction='column' sx={{width: '50vw', marginLeft: '5vw', marginRight: '5vw', paddingBottom: '2vw', marginBottom: '5vw'}}>
          <h1>Sign-Up</h1>
          <TextField label='First Name'></TextField>
          <TextField label='Last Name'></TextField>
          <TextField label='Email'></TextField>
          <TextField label='Username'></TextField>
          <TextField label='Password' type='password'></TextField>
          <TextField label='Confirm Password' type='password'></TextField>
          <Button onClick={signupButtonClickHandler}>Create</Button>
        </Stack>
      </Paper>
    </>
  )
}
export default SignUpPage;