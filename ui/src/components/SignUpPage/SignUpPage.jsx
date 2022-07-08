import React from 'react';
import { TextField, Stack, Paper, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import config from '../../config';
import bcrypt from 'bcryptjs';

const ApiUrl = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;


const SignUpPage = () => {
  const nav = useNavigate();
  
  const signupButtonClickHandler = () => {
    let unhashedPassword = document.getElementById('password-textfield').value
    bcrypt.hash(unhashedPassword, 10, function(err, hash) {
      // Store hash in your password DB.
      console.log('unhashed Password: ', unhashedPassword)
      console.log('hashed password: ', hash)

      let memberData = {
        first_name: document.getElementById('firstname').value,
        last_name: document.getElementById('lastname').value, // future middle initial
        email_primary: document.getElementById('email-primary').value,
        email_secondary: document.getElementById('email-secondary').value,
        username: document.getElementById('username').value,  // future auto generate username from first and last name
        password: hash,
      }

      console.log(memberData)
      let init = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(memberData)
      }
      
        fetch(ApiUrl+'/members', init)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          nav('/self-reflection')
        })
      })
    };
  

  return (
    <>
      <h1>Sign Up Page</h1>
      <Paper className='signup-sheet' elevation={3} sx={{width: '60vw', marginLeft: '20vw', marginRight:'20vw'}}>
        <Stack spacing={2} direction='column' sx={{width: '50vw', marginLeft: '5vw', marginRight: '5vw', paddingBottom: '2vw', marginBottom: '5vw'}}>
          <h1>Sign-Up</h1>
          <TextField id='firstname' label='First Name'></TextField>
          <TextField id='lastname' label='Last Name'></TextField>
          <TextField id='email-primary' label='Goverment Email'></TextField>
          <TextField id='email-secondary' label='Personal Email'></TextField>
          <TextField id='username' label='Username'></TextField>
          <TextField id='password-textfield' label='Password' type='password'></TextField>
          <TextField id='confirm-password-textfield' label='Confirm Password' type='password'></TextField>
          <Button onClick={signupButtonClickHandler}>Create</Button>
        </Stack>
      </Paper>
      <Paper sx={{width: '60vw', marginLeft: '20vw', marginRight:'20vw'}} elevation={2} >
        <Stack spacing={2} direction='column' sx={{width: '50vw', marginLeft: '5vw', marginRight: '5vw', paddingBottom: '2vw'}}>
          <p>
            If you already have an Account, please login
          </p>
          <Button onClick={()=>{nav('/login')}}>Login</Button>
        </Stack>
      </Paper>
    </>
  )
}
export default SignUpPage;