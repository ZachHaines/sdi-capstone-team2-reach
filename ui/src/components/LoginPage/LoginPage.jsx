import React, {useContext} from 'react';
import { Stack, Paper, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import config from '../../config';
import bcrypt from 'bcryptjs';
import { AppContext } from '../../AppContext';
import { SurveyTextField, primaryTheme } from '../Shared/CustomComponents';

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
          setTimeout(()=>nav('/profile'),100)
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
    <div style={{position: 'absolute', overflow: 'auto', top: 0, left: 0, right: 0, bottom: 0}}>

      {/* Title Paper
      <Paper className='header' elevation={20} 
        sx={{float: 'left', backgroundColor: 'rgba(0, 109, 119, 1.0)', boxShadow:'0px 0px 4px 1px black', borderRadius: '16px', marginLeft: '10vw', marginRight:'5vw', marginBottom: '4%', marginTop: '5%', width: '30vw'}}>
        <Typography className='heading-title' variant='h4' align='center' sx={{'color': '#EDF6F9', marginLeft: '0%', marginTop: '1%', fontWeight: '700'}}>
          REACH
        </Typography>
        <Typography variant='h6' align='center' sx={{'color': '#EDF6F9', marginLeft: '0%', marginTop: '1%', marginBottom: '1%', fontWeight: '700'}}>
          Together, We Are Stronger
        </Typography>
      </Paper> */}
      
      {/* Login Paper */}
      <Paper className='login-sheet' elevation={10} sx={{float: 'right', width: '30vw', marginLeft: '5vw', marginRight:'15vw', marginTop: '5vw', backgroundColor: 'rgba(0, 109, 119, 0.8)', boxShadow:'4px 4px 4px black', borderRadius: '16px'}}>
        <Stack spacing={2} direction='column' sx={{width: '25vw',  marginLeft: '2.5vw', marginRight: '2.5vw', paddingBottom: '2vw'}}>
        <Typography variant='h2' align='center' sx={{'color': '#EDF6F9', marginLeft: '0%', marginTop: '1%', textDecoration: 'underline'}}>
          Login
        </Typography>
          <SurveyTextField theme={primaryTheme} id='username' label='Username' sx={{backgroundColor: '#EDF6F9', borderRadius: '16px'}}></SurveyTextField>
          <SurveyTextField theme={primaryTheme} id='password-textfield' label='Password' type='password' sx={{backgroundColor: '#EDF6F9', borderRadius: '16px'}}></SurveyTextField>
          <Button onClick={loginButtonClickHandler} sx={{ 'color': '#FFDDD2', 'fontSize': '24px', backgroundColor: '#E29578', borderRadius: '16px'}}>LOGIN</Button>
        </Stack>
      </Paper>

      {/* Sign Up Paper */}
      <Paper sx={{float: 'right', clear: 'right', width: '30vw', marginTop: '5vw', marginLeft: '5vw', marginRight:'15vw', backgroundColor: 'rgba(0, 109, 119, 0.8)', boxShadow:'4px 4px 4px black', borderRadius: '16px'}} elevation={5} >
        <Stack spacing={2} direction='column' sx={{width: '25vw', marginLeft: '2.5vw', marginRight: '2.5vw', paddingBottom: '2vw'}}>
          <Typography variant='body1' sx={{textAlign: 'center',  'color': '#EDF6F9', 'fontSize': '24px', marginTop: '10px'}}>
            If you do not have an account, please create an account
          </Typography>
          <Button onClick={()=>{nav('/signup')}} sx={{ 'color': '#FFDDD2', 'fontSize': '20px', backgroundColor: '#E29578', borderRadius: '16px' }}>
            Sign Up
          </Button>
        </Stack>
      </Paper>

      {/* Sign Up Paper */}
      <Paper sx={{float: 'right', clear: 'right', width: '20vw', marginTop: '1vw', marginLeft: '5vw', marginRight:'20vw', backgroundColor: 'rgba(0, 109, 119, 0.8)', boxShadow:'4px 4px 4px black', borderRadius: '16px'}} elevation={5} >
        <Stack spacing={2} direction='column' sx={{width: '15vw', marginLeft: '2.5vw', marginRight: '2.5vw', paddingBottom: '0.5vw', paddingTop: '0.5vw'}}>
          <Button onClick={()=>{nav('/')}} sx={{ 'color': '#FFDDD2', 'fontSize': '14px', backgroundColor: '#E29578', borderRadius: '16px', width: '12vw', marginLeft: '1.5vw' }}>
            About Us
          </Button>
        </Stack>
      </Paper>
    </div>
  )
}
export default LoginPage;

// const StyledImage = styled.img`
//   margin-top: 10px;
//   margin-bottom: 5px;
//   border-radius: 32px;
//   margin-left: auto;
//   margin-right: auto;
//   width: 30vw;
//   // height: 20vw;
//   // box-shadow: 0px 0px 24px 4px #F8F8F8;
// `;