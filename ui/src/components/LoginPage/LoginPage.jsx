import React, {useContext} from 'react';
import { TextField, Stack, Paper, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import config from '../../config';
import bcrypt from 'bcryptjs';
import { AppContext } from '../../AppContext';

const ApiUrl = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;

const LoginPage = () => {
  const nav = useNavigate();
  const {values, setters} = useContext(AppContext);

  const loginButtonClickHandler = () => {
 
 
  //login logical code
   const opts = {
     method: 'POST',//using post since get does not take a body and I find it sloppy to put the username and encrypted password in the browser
     headers: {'Content-type': 'application/json'},
     body: JSON.stringify(
      {
        "username": document.getElementById("username").value,
      }),
   };
    
    fetch(ApiUrl+"/login",opts)//this will oneday set the user as logged in
    .then(res => res.json())
    .then(data => {
      console.log("Here is the data",data)
      return data[0]//this is the value of login status
    })
    .then((log)=>(log.username)?log:alert("The username/password combination does not exist. If you are a new user, please register.")
)   .then( (user) =>{
      console.log("Successfully called loggedin",document.getElementById('password-textfield').value,"\nHere is our hashed password", user.password)
      bcrypt.compare(document.getElementById('password-textfield').value, user.password, function(err, result) {
        if(result){
          setters.setCurrentUser({...user, role: values.roles[user.roles_id-1]})
          setTimeout(()=>nav('/self-reflection'),100)
        }else{
          console.log(err)
          alert('Password not correct')
        }
        if (err) throw err;
      })
    })
    .catch(err => console.log(err))
    }
  



/*
    fetch(ApiUrl+'/members/')
      .then(res => res.json())
      .then(data => {
        data.forEach(el =>
        {
          if(username === el.username) 
          {
            fetch(ApiUrl+`/passwords/${el.passwords_id}`)
              .then(res => res.json())
              .then(data => 
              {
                bcrypt.compare(unhashedPassword, data.password, function(err, result) {
                  // result == true
                  if(result) {
                    nav('/self-reflection')
                    setters.setCurrentUser(username)
                    isFound = true;
                  }
               });
              })
          }
        })
      }).then(()=> {
        if (!isFound) {
          alert('The username/password combination does not exist. If you are a new user, please register.')
        }
      })
  }
*/
  return (
    <>
      <Paper className='login-sheet' elevation={10} sx={{width: '60vw', marginLeft: '20vw', marginRight:'20vw', marginTop: '2.5vw'}}>
        <Stack spacing={2} direction='column' sx={{width: '50vw', marginLeft: '5vw', marginRight: '5vw', paddingBottom: '2vw', marginBottom: '5vw'}}>
        <Typography variant='h2' align='center'>Login</Typography>
          <TextField id='username' label='Username'></TextField>
          <TextField id='password-textfield' label='Password' type='password'></TextField>
          <Button onClick={loginButtonClickHandler}>Login</Button>
        </Stack>
      </Paper>
      <Paper sx={{width: '60vw', marginLeft: '20vw', marginRight:'20vw'}} elevation={5} >
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