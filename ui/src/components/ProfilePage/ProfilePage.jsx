/* eslint-disable */
import React, { useContext, useState } from 'react';
import config from '../../config';
import { TextField, Stack, Paper, Grid, Input } from '@mui/material';
import { AppContext } from '../../AppContext';
import { SurveySubmitButton, primaryTheme, SurveyTextField } from '../Shared/CustomComponents';

import bcrypt from 'bcryptjs';

const ProfilePage = () => {
  let bgcolor = '#' + 'E29578'
  let background = {backgroundColor: bgcolor}
  let underline = {textDecoration: 'underline'}
  let [isEditing, setIsEditing] = useState(false);
  const {values, setters} = useContext(AppContext);
  const ApiUrl = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;

  const submit = () => {
    console.log('submit')
    if (document.getElementById('changePasswordField').value !== document.getElementById('verifyPasswordField').value){
      alert('Please ensure your entered passwords match') 
      return
    };
    // update database with patch request
    setIsEditing(!isEditing);

    const dataToSend = {
      "first_name": document.getElementById('firstNameField').value,
      "last_name": document.getElementById('lastNameField').value,
      "email_primary": document.getElementById('emailPrimaryField').value,
      "religion": document.getElementById('religionField').value,
      "username": document.getElementById('usernameField').value,
      "password": bcrypt.hashSync(document.getElementById('changePasswordField').value, 10),
    }
    console.log('data I am sending to json object:', dataToSend);

    
    const init = {
      method: 'PATCH',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(dataToSend)
    };
    console.log(init)
    fetch(ApiUrl+`/members/${values.currentUser.id}`, init)
    .then(res => res.json())
    .then((data) => {
      console.log(data)
      setters.setCurrentUser({
        ...values.currentUser, 
        first_name: dataToSend.first_name, 
        last_name: dataToSend.last_name,
        username: dataToSend.username,
        email_primary: dataToSend.email_primary,
        religion: dataToSend.religion,
        // password: user.password
      })
    })
    // .then(() => console.log('Current User:', values.currentUser))
  }

  return (
    <>
      <Paper elevation={3} sx={{width: '50%', marginLeft: '35%', marginRight: '15%', paddingBottom: '2vw', marginBottom: '5vw', borderRadius: '6px', backgroundColor: '#EDF6F9', margin: 'auto'}}>
        <h1 style={{textAlign: 'center', ...background, borderRadius: '6px'}}>Profile Settings</h1>

          {isEditing ? 
          <>
            <Stack direction='column' sx={{textAlign:'left', paddingLeft: '2px'}}>
              <SurveyTextField theme={primaryTheme} id='firstNameField' sx={{paddingTop: '1vh'}} rows={1} label='FirstName' defaultValue={values.currentUser.first_name}/>
              <SurveyTextField theme={primaryTheme} id='lastNameField'sx={{paddingTop: '0.6vh'}} rows={1} label='LastName' defaultValue={values.currentUser.last_name}/>
              <SurveyTextField theme={primaryTheme} id='emailPrimaryField' sx={{paddingTop: '0.6vh'}} rows={1} label='Email' defaultValue={values.currentUser.email_primary}/>
              <SurveyTextField theme={primaryTheme} id='religionField' sx={{paddingTop: '0.6vh'}} rows={1} label='ReligiousPreference' defaultValue={values.currentUser.religion}/>
              <SurveyTextField theme={primaryTheme} id='usernameField' sx={{paddingTop: '0.6vh'}} rows={1} label='Username' defaultValue={values.currentUser.username}/>
              <SurveyTextField theme={primaryTheme} id='changePasswordField' type="password" sx={{paddingTop: '0.6vh'}} rows={1} label='ChangePassword' defaultValue=''/> 
              <SurveyTextField theme={primaryTheme} id='verifyPasswordField' type="password" sx={{paddingTop: '0.6vh'}} rows={1} label='VerifyPassword' defaultValue=''/> 
              <SurveySubmitButton theme={primaryTheme} onClick={() => submit()}>Submit</SurveySubmitButton><SurveySubmitButton theme={primaryTheme} onClick={() => setIsEditing(!isEditing)}>Cancel</SurveySubmitButton>
            </Stack>
          </>
          :
          <>
          <Grid container columns={2}>
            <Grid item xs={1} sx={{textAlign:'right', paddingRight: '2px'}}>
              <p>First Name:</p>
              <p>Last Name:</p>
              <p>Email:</p>
              <p>Religious Preference:</p>
              <p>Username:</p>
            </Grid>
            <Grid item xs={1} sx={{textAlign:'left', paddingLeft: '2px'}}>
              <p>{values.currentUser.first_name}</p>
              <p>{values.currentUser.last_name}</p>
              <p style={underline}>{values.currentUser.email_primary}</p>
              <p>{(values.currentUser.religion) ? values.currentUser.religion : 'None'}</p>
              <p>{values.currentUser.username}</p>
            </Grid>
          </Grid>
            <SurveySubmitButton theme={primaryTheme} onClick={() => setIsEditing(!isEditing)}>Edit</SurveySubmitButton>
          </>
          }
      </Paper>
    </>
  )
}

export default ProfilePage;