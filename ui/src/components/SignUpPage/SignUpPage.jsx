import React from 'react';
import { Stack, Paper, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import config from '../../config';
import bcrypt from 'bcryptjs';
import { SurveyTextField, primaryTheme } from '../Shared/CustomComponents';

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
    <div style={{position: 'absolute', overflow: 'auto', top: 0, left: 0, right: 0, bottom: 0}}>
      <Paper className='signup-sheet' elevation={10} sx={{width: '60vw', marginLeft: '20vw', marginRight:'20vw', marginTop: '2.5vw', backgroundColor: 'rgba(0, 109, 119, 0.8)', boxShadow:'4px 4px 4px black', borderRadius: '16px'}}>
        <Stack spacing={2} direction='column' sx={{width: '50vw', marginLeft: '5vw', marginRight: '5vw', paddingBottom: '2vw', marginBottom: '5vw'}}>
          <Typography variant='h2' align='center' sx={{'color': '#EDF6F9', marginLeft: '0%', marginTop: '1%'}}>Sign-Up</Typography>
          <SurveyTextField theme={primaryTheme} id='firstname' label='First Name' color='success' sx={{backgroundColor: '#EDF6F9', borderRadius: '16px'}}></SurveyTextField>
          <SurveyTextField theme={primaryTheme} id='lastname' label='Last Name' color='success' sx={{backgroundColor: '#EDF6F9', borderRadius: '16px'}}></SurveyTextField>
          <SurveyTextField theme={primaryTheme} id='email-primary' label='Goverment Email' color='success' sx={{backgroundColor: '#EDF6F9', borderRadius: '16px'}}></SurveyTextField>
          <SurveyTextField theme={primaryTheme} id='email-secondary' label='Personal Email' color='success' sx={{backgroundColor: '#EDF6F9', borderRadius: '16px'}}></SurveyTextField>
          <SurveyTextField theme={primaryTheme} id='username' label='Username' color='success' sx={{backgroundColor: '#EDF6F9', borderRadius: '16px'}}></SurveyTextField>
          <SurveyTextField theme={primaryTheme} id='password-textfield' label='Password' type='password' color='success' sx={{backgroundColor: '#EDF6F9', borderRadius: '16px'}}></SurveyTextField>
          <SurveyTextField theme={primaryTheme} id='confirm-password-textfield' label='Confirm Password' type='password' color='success' sx={{backgroundColor: '#EDF6F9', borderRadius: '16px'}}></SurveyTextField>
          <Button onClick={signupButtonClickHandler} sx={{'color': '#FFDDD2', 'fontSize': '24px', backgroundColor: '#E29578', borderRadius: '16px'}}>Create</Button>
        </Stack>
      </Paper>
      <Paper sx={{width: '60vw', marginLeft: '20vw', marginRight:'20vw', backgroundColor: 'rgba(0, 109, 119, 0.8)', boxShadow:'4px 4px 4px black', borderRadius: '16px'}} elevation={5}>
        <Stack spacing={2} direction='column' sx={{width: '50vw', marginLeft: '5vw', marginRight: '5vw', paddingBottom: '2vw'}}>
          <Typography style={{textAlign: 'center', 'color': '#EDF6F9', 'fontSize': '36px', marginBottom: '0px', marginTop: '1vw'}}>
            If you already have an account, please login
          </Typography>
          <Button onClick={()=>{nav('/login')}} sx={{'color': '#FFDDD2', 'fontSize': '24px', backgroundColor: '#E29578', borderRadius: '16px'}}>Login</Button>
        </Stack>
      </Paper>
    </div>
  )
}
export default SignUpPage;