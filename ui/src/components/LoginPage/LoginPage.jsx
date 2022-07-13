import React, {useContext} from 'react';
import { TextField, Stack, Paper, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import config from '../../config';
import bcrypt from 'bcryptjs';
import { AppContext } from '../../AppContext';

const ApiUrl = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;
let loginImage = ApiUrl
console.log(loginImage)
loginImage = ApiUrl + '/src/images'
console.log(loginImage)
loginImage = './designimg/reaching-hands.jpeg'



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
  
  return (
    <div style={{'backgroundColor': 'rgba(131, 197, 190, 0.3)', position: 'absolute', overflow: 'auto', top: 0, left: 0, right: 0, bottom: 0}}>
      <img src='designimg/reaching-hands.jpeg' className='login-image' alt='military service member clasping hand with another' 
      style={{display: 'block', 'marginLeft': 'auto', 'marginRight': 'auto', marginTop: '2%', borderRadius: '32px', boxShadow:'0 0 8px #006D77'}}/>
      <Paper className='login-sheet' elevation={10} sx={{width: '60vw', marginLeft: '20vw', marginRight:'20vw', marginTop: '2.5vw', backgroundColor: '#006D77', boxShadow:'0 0 8px #006D77', borderRadius: '16px'}}>
        <Stack spacing={2} direction='column' sx={{width: '50vw', marginLeft: '5vw', marginRight: '5vw', paddingBottom: '2vw', marginBottom: '5vw'}}>
        <Typography variant='h2' align='center' sx={{'font-family': 'Roboto', 'color': '#EDF6F9', marginLeft: '0%', marginTop: '1%'}}>LOGIN</Typography>
          <TextField id='username' label='Username' color='success' sx={{backgroundColor: '#EDF6F9', borderRadius: '16px'}}></TextField>
          <TextField id='password-textfield' label='Password' type='password' color='success' sx={{backgroundColor: '#EDF6F9', borderRadius: '16px'}}></TextField>
          <Button onClick={loginButtonClickHandler} sx={{'font-family': 'Roboto', 'color': '#FFDDD2', 'fontSize': '24px', backgroundColor: '#E29578', borderRadius: '16px'}}>LOGIN</Button>
        </Stack>
      </Paper>
      <Paper sx={{width: '40vw', marginLeft: '30vw', marginRight:'30vw', backgroundColor: '#006D77', boxShadow:'0 0 8px #006D77', borderRadius: '16px'}} elevation={5} >
        <Stack spacing={2} direction='column' sx={{width: '38vw', marginLeft: '1vw', marginRight: '1vw', paddingBottom: '2vw'}}>
          <p style={{textAlign: 'center', 'font-family': 'Roboto', 'color': '#EDF6F9', 'fontSize': '24px', marginBottom: '0px'}}>
            If you do not have an account,
          </p>
          <p style={{textAlign: 'center', 'font-family': 'Roboto', 'color': '#EDF6F9', 'fontSize': '24px', marginTop: '0px'}}>
            please create an account
          </p>
          <Button onClick={()=>{nav('/signup')}} sx={{'font-family': 'Roboto', 'color': '#FFDDD2', 'fontSize': '20px', backgroundColor: '#E29578', borderRadius: '16px' }}>Sign Up</Button>
        </Stack>
      </Paper>
    </div>
  )
}
export default LoginPage;