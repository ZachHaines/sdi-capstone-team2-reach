import React, { useState } from 'react';

import { /*TextField, Stack,*/ Paper, Grid, Input, Button } from '@mui/material';

const ProfilePage = () => {
  let bgcolor = '#' + 'EBC3DB'
  let background = {backgroundColor: bgcolor}
  let underline = {textDecoration: 'underline'}
  let [isEditing, setIsEditing] = useState(false);

  const submit = () => {
    console.log('submit')
    setIsEditing(!isEditing)
  }

  return (
    <>
      <Paper elevation={3} sx={{width: '50%', marginLeft: '25%', marginRight: '25%', paddingBottom: '2vw', marginBottom: '5vw', borderRadius: '6px'}}>
        <h1 style={{textAlign: 'center', ...background, borderRadius: '6px'}}>Profile Settings</h1>
        <Grid container columns={2}>
          <Grid item xs={1} sx={{textAlign:'right', paddingRight: '2px'}}>
            <p>First Name:</p>
            <p>Last Name:</p>
            <p>Email:</p>
            <p>Religious Preference:</p>
            <p>Username:</p>
            <p>Password:</p>
          </Grid>
          {isEditing ? 
          <>
            <Grid item xs={1} sx={{textAlign:'left', paddingLeft: '2px'}}>
              <Input sx={{paddingTop: '1vh'}} rows={1} label='FirstName' defaultValue='First Name'/>
              <Input sx={{paddingTop: '0.6vh'}} rows={1} label='LastName' defaultValue='Last Name'/>
              <Input sx={{paddingTop: '0.6vh'}} rows={1} label='Email' defaultValue='Email'/>
              <Input sx={{paddingTop: '0.6vh'}} rows={1} label='ReligiousPreference' defaultValue='Religious Preference'/>
              <Input sx={{paddingTop: '0.6vh'}} rows={1} label='Username' defaultValue='Username'/>
              <Input sx={{paddingTop: '0.6vh'}} rows={1} label='Password' defaultValue='Password'/>
            </Grid>
            <Button onClick={() => submit()}>Submit</Button><Button onClick={() => setIsEditing(!isEditing)}>Cancel</Button>
          </>
          :
          <>
            <Grid item xs={1} sx={{textAlign:'left', paddingLeft: '2px'}}>
              <p>First Name</p>
              <p>Last Name</p>
              <p style={underline}>Email</p>
              <p>Religious Preference</p>
              <p>Username</p>
              <p>Password</p>
            </Grid>
            <Button onClick={() => setIsEditing(!isEditing)}>Edit</Button>
          </>
          }
        </Grid>
      </Paper>
    </>
  )
}

export default ProfilePage;