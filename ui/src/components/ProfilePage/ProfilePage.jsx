import React, { useContext, useState } from 'react';
import config from '../../config';
import { /*TextField, Stack,*/ Paper, Grid, Input, Button } from '@mui/material';
import { AppContext } from '../../AppContext';
// import bcrypt from 'bcryptjs';

const ProfilePage = () => {
  let bgcolor = '#' + 'EBC3DB'
  let background = {backgroundColor: bgcolor}
  let underline = {textDecoration: 'underline'}
  let [isEditing, setIsEditing] = useState(false);
  const {values, setters} = useContext(AppContext);
  const ApiUrl = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;

  const submit = () => {
    console.log('submit')
    setIsEditing(!isEditing);

    // update database with patch request

    const data = {
      "first_name": document.getElementById('firstNameField').value,
      "last_name": document.getElementById('lastNameField').value,
      "email_primary": document.getElementById('emailPrimaryField').value,
      "religion": document.getElementById('religionField').value,
      // "password": bcrypt.hashSync(document.getElementById('changePasswordField').value, 10),
    }
    console.log('data I am sending to json object:', data);

    
    const init = {
      method: 'PATCH',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(data)
    };

    fetch(ApiUrl+`/members/${values.currentUser.id}`, init)//this will oneday set the user as logged in
    .then(res => res.json())
    .then(data => console.log(data[0]))
    .then(() => {
      setters.setCurrentUser({
        ...values.currentUser, 
        first_name: data.first_name, 
        last_name: data.last_name,
        username: data.username,
        email_primary: data.email_primary,
        religion: data.religion,
        // password: user.password
      })
    })
    .then(() => console.log('Current User:', values.currentUser))
  }

  return (
    <>
      <Paper elevation={3} sx={{width: '50%', marginLeft: '25%', marginRight: '25%', paddingBottom: '2vw', marginBottom: '5vw', borderRadius: '6px'}}>
        <h1 style={{textAlign: 'center', ...background, borderRadius: '6px'}}>Profile Settings</h1>
       
        {/* Column Names */}
        <Grid container columns={2}>
          <Grid item xs={1} sx={{textAlign:'right', paddingRight: '2px'}}>
            <p>First Name:</p>
            <p>Last Name:</p>
            <p>Email:</p>
            <p>Religious Preference:</p>
            <p>Username:</p>
            <p>Current Password:</p>
            <p style={{visibility: (isEditing) ? "visible" : "hidden"}}> Change Password: </p>
            <p style={{visibility: (isEditing) ? "visible" : "hidden"}}> Verify Password: </p>
          </Grid>

          {/* Values / Appearance While Editing */}
          {isEditing ? 
          <>
            <Grid item xs={1} sx={{textAlign:'left', paddingLeft: '2px'}}>
              <Input id='firstNameField' sx={{paddingTop: '1vh'}} rows={1} label='FirstName' defaultValue={values.currentUser.first_name}/>
              <Input id='lastNameField'sx={{paddingTop: '0.6vh'}} rows={1} label='LastName' defaultValue={values.currentUser.last_name}/>
              <Input id='emailPrimaryField' sx={{paddingTop: '0.6vh'}} rows={1} label='Email' defaultValue={values.currentUser.email_primary}/>
              <Input id='religionField' sx={{paddingTop: '0.6vh'}} rows={1} label='ReligiousPreference' defaultValue={values.currentUser.religion}/>
              <Input sx={{paddingTop: '0.6vh'}} rows={1} label='Username' defaultValue={values.currentUser.username}/>
              <Input id='currentPasswordField' type="password" sx={{paddingTop: '0.6vh'}} rows={1} label='CurrentPassword' defaultValue=''/>
              <Input id='changePasswordField'type="password" sx={{paddingTop: '0.6vh'}} rows={1} label='ChangePassword' defaultValue='' /> 
              <Input id='verifyPasswordField'type="password" sx={{paddingTop: '0.6vh'}} rows={1} label=' VerifyPassword' defaultValue=''/> 
            </Grid>
            <Button onClick={() => submit()}>Submit</Button><Button onClick={() => setIsEditing(!isEditing)}>Cancel</Button>
          </>
          :
          <>
            {/* Values / Appearance When Form Is NOT Editing */}
            <Grid item xs={1} sx={{textAlign:'left', paddingLeft: '2px'}}>
              <p>{values.currentUser.first_name}</p>
              <p>{values.currentUser.last_name}</p>
              <p style={underline}>{values.currentUser.email_primary}</p>
              <p>{(values.currentUser.religion) ? values.currentUser.religion : 'None'}</p>
              <p>{values.currentUser.username}</p>
              <p>******</p>
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