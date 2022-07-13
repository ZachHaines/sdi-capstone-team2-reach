import React from 'react';
import config from './config'
import { Button, Paper, Stack, Typography} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ApiUrl = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;

function App() {
  const nav = useNavigate();
  console.log(ApiUrl);

  return (
    <div style={{'backgroundColor': 'rgba(131, 197, 190, 0.3)', position: 'absolute', overflow: 'auto', top: 0, left: 0, right: 0, bottom: 0}}>
      <Paper className='login-sheet' elevation={10} sx={{width: '60vw', marginLeft: '20vw', marginRight:'20vw', marginTop: '2.5vw', backgroundColor: '#006D77', boxShadow:'0 0 8px #006D77', borderRadius: '16px'}}>
        <Stack spacing={2} direction='column' sx={{width: '50vw', marginLeft: '5vw', marginRight: '5vw'}}>
        <Typography variant='h2' align='center' sx={{'font-family': 'Roboto', 'color': '#E29578', marginLeft: '0%', marginTop: '1%', fontWeight: '700'}}>REACH</Typography>
        <Typography variant='h2' align='center' sx={{'font-family': 'Roboto', 'color': '#E29578', marginLeft: '0%', marginTop: '1%', fontWeight: '700', 'font-size': '50px'}}>Together, We Are Stronger</Typography>
        <img src='designimg/reaching-hands.jpeg' className='login-image' alt='military service member clasping hand with another' 
        style={{borderRadius: '32px', boxShadow:'0 0 8px #006D77', margin: '2%'}}/>
        <Typography variant='h2' align='center' sx={{'font-family': 'Roboto', 'color': '#EDF6F9', marginLeft: '0%', marginTop: '1%', textDecoration: 'underline', 'font-size': '35px'}}>ABOUT US</Typography>    
        <p style={{textAlign: 'center', 'font-family': 'Roboto', 'color': '#EDF6F9', 'fontSize': '32px', marginTop: '16px'}}>Overview</p>
        <p style={{textAlign: 'center', 'font-family': 'Roboto', 'fontSize': '16px', marginTop: '0px'}}>Reach out for your fellow teammates by connecting them with mental health professionals to help them receive anonymous access to resources and care. The app safeguards user agency and reduces the mental health stigma, barriers, and fears preventing people from seeking help. By reaching out for one another, teammates can safely intervene and prevent future tragedies from suicide.</p>
        <p style={{textAlign: 'center', 'font-family': 'Roboto', 'color': '#EDF6F9', 'fontSize': '32px', marginTop: '16px'}}>Reach Out</p>
        <p style={{textAlign: 'center', 'font-family': 'Roboto', 'fontSize': '16px', marginTop: '0px'}}>Reach Out: Users can enroll in the app, create a user profile, and join units. If a user becomes concerned about a teammate’s wellbeing, they can “reach out” for them. By reaching out, the user indicates their well being in different categories and may leave a comment to assist mental health providers. Users reach out anonymously and do not have to be concerned with knowing specific resources and knowledge pertaining to mental health services, leaving that to the mental health professionals. Reaching out is easy to do, but important to help teammates receive mental health resources and services that they may or may not think they need at the time. By reaching out, you look after your teammates. Together we are stronger.</p>
        <p style={{textAlign: 'center', 'font-family': 'Roboto', 'color': '#EDF6F9', 'fontSize': '32px', marginTop: '16px'}}>Mental Health Provider</p>
        <p style={{textAlign: 'center', 'font-family': 'Roboto', 'fontSize': '16px', marginTop: '0px'}}>Mental Health Provider: As one or more users reach out for a teammate, mental health providers can triage concerns and risk factors. Without revealing that teammate’s identity, the mental health provider can reach out to that teammate and provide resources. A teammate’s identity is safeguarded up until the point they consent to scheduling an appointment with their assigned clinic.</p>
        <p style={{textAlign: 'center', 'font-family': 'Roboto', 'color': '#EDF6F9', 'fontSize': '32px', marginTop: '16px'}}>Projection Inspiration</p>
        <a href='https://www.defense.gov/News/Releases/Release/Article/2794170/secretary-of-defense-statement-on-dod-annual-suicide-report-cy2020/' style={{textAlign: 'center', 'font-family': 'Roboto', 'fontSize': '16px', marginTop: '0px', color: '#FFDDD2'}}>Secretary of Defense Statement on DoD Annual Suicde Report (CY2020)</a>
        </Stack>
        <div style={{textAlign: 'center'}}>
          <Button onClick={()=>{nav('/login')}} sx={{'font-family': 'Roboto', 'color': '#FFDDD2', 'fontSize': '24px', backgroundColor: '#E29578', borderRadius: '16px', margin: '3%'}}>Login</Button>
          <Button onClick={()=>{nav('/signup')}} sx={{'font-family': 'Roboto', 'color': '#FFDDD2', 'fontSize': '24px', backgroundColor: '#E29578', borderRadius: '16px', margin: '3%'}}>Sign Up</Button>
        </div>
      </Paper>
    </div>
  );
}

export default App;
