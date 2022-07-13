import React from 'react';
import { TextField, Stack, Paper, Button, Typography } from '@mui/material';
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
        roles_id: 1,
      }

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
          nav('/login')
        })
      })
    };
  

  return (
    <div style={{'backgroundColor': '#83C5BE', position: 'absolute', overflow: 'auto', top: 0, left: 0, right: 0, bottom: 0}}>
      <Paper className='signup-sheet' elevation={10} sx={{width: '60vw', marginLeft: '20vw', marginRight:'20vw', marginTop: '2.5vw', backgroundColor: '#006D77', boxShadow:'0 0 8px #006D77', borderRadius: '16px'}}>
        <Stack spacing={2} direction='column' sx={{width: '50vw', marginLeft: '5vw', marginRight: '5vw', paddingBottom: '2vw', marginBottom: '5vw'}}>
          <Typography variant='h2' align='center' sx={{'font-family': 'Roboto', 'color': '#EDF6F9', marginLeft: '0%', marginTop: '1%'}}>Sign-Up</Typography>
          <TextField id='firstname' label='First Name' color='success' sx={{backgroundColor: '#EDF6F9', borderRadius: '16px'}}></TextField>
          <TextField id='lastname' label='Last Name' color='success' sx={{backgroundColor: '#EDF6F9', borderRadius: '16px'}}></TextField>
          <TextField id='email-primary' label='Goverment Email' color='success' sx={{backgroundColor: '#EDF6F9', borderRadius: '16px'}}></TextField>
          <TextField id='email-secondary' label='Personal Email' color='success' sx={{backgroundColor: '#EDF6F9', borderRadius: '16px'}}></TextField>
          <TextField id='username' label='Username' color='success' sx={{backgroundColor: '#EDF6F9', borderRadius: '16px'}}></TextField>
          <TextField id='password-textfield' label='Password' type='password' color='success' sx={{backgroundColor: '#EDF6F9', borderRadius: '16px'}}></TextField>
          <TextField id='confirm-password-textfield' label='Confirm Password' type='password' color='success' sx={{backgroundColor: '#EDF6F9', borderRadius: '16px'}}></TextField>
          <Button onClick={signupButtonClickHandler} sx={{'font-family': 'Roboto', 'color': '#FFDDD2', 'fontSize': '24px', backgroundColor: '#E29578', borderRadius: '16px'}}>Create</Button>
        </Stack>
      </Paper>
      <Paper sx={{width: '60vw', marginLeft: '20vw', marginRight:'20vw', backgroundColor: '#006D77', boxShadow:'0 0 8px #006D77', borderRadius: '16px'}} elevation={5}>
        <Stack spacing={2} direction='column' sx={{width: '50vw', marginLeft: '5vw', marginRight: '5vw', paddingBottom: '2vw'}}>
          <p style={{textAlign: 'center', 'font-family': 'Roboto', 'color': '#EDF6F9', 'fontSize': '36px', marginBottom: '0px'}}>
            If you already have an Account,
          </p>
          <p style={{textAlign: 'center', 'font-family': 'Roboto', 'color': '#EDF6F9', 'fontSize': '36px', marginTop: '0px'}}>
            please login
          </p>
          <Button onClick={()=>{nav('/login')}} sx={{'font-family': 'Roboto', 'color': '#FFDDD2', 'fontSize': '24px', backgroundColor: '#E29578', borderRadius: '16px'}}>Login</Button>
        </Stack>
      </Paper>
    </div>
  )
}
export default SignUpPage;