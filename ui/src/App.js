import React from 'react';
import config from './config'
import { Button, Paper, Stack, Typography} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const ApiUrl = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;
console.log(ApiUrl);


function App() {
  const nav = useNavigate();

  return (
    <>
      
      <Paper elevation={10} sx={{width: '80vw', marginLeft: '9vw', marginRight:'9vw', marginTop: '2.5vw', marginBottom: '2.5vw', backgroundColor: 'rgba(0, 109, 119, 0.5)', boxShadow:'0 0 4px 0.5px black', 'backdrop-filter': 'blur(8px)', borderRadius: '16px', paddingBottom: '2vw'}}>
        <Stack spacing={2} direction='column' sx={{width: '70vw', marginLeft: '5vw', marginRight: '5vw'}}>
          
          <Paper elevation={20} sx={{backgroundColor: 'rgba(255, 255, 255, 0.3)', boxShadow:'0px 0px 8px 1px white', borderRadius: '16px', paddingBottom: '2%', marginTop: '4%', marginBottom: '4%',textRendering:'optimizeLegibility'}}>
            <Typography variant='h2' align='center' sx={{'color': '#EDF6F9', marginLeft: '0%', marginTop: '1%', fontWeight: '700'}}>
              REACH
            </Typography>
            <Typography variant='h2' align='center' sx={{'color': '#EDF6F9', marginLeft: '0%', marginTop: '1%', marginBottom: '1%', fontWeight: '700', 'fontSize': '50px'}}>
              Together, We Are Stronger
            </Typography>
          </Paper>

          <StyledImage src='designimg/reaching-hands.jpeg' className='login-image' alt='military service member clasping hand with another'/>

          <Button onClick={()=>{nav('/login')}} sx={{'color': '#FFDDD2', 'fontSize': '24px', backgroundColor: '#E29578', borderRadius: '16px', margin: '3%'}}>Login</Button>
          <Button onClick={()=>{nav('/signup')}} sx={{'color': '#FFDDD2', 'fontSize': '24px', backgroundColor: '#E29578', borderRadius: '16px', margin: '3%'}}>Sign Up</Button>
        </Stack>
      </Paper>

      <Paper elevation={10} sx={{width: '80vw', marginLeft: '9vw', marginRight:'9vw', marginTop: '2.5vw', marginBottom: '2.5vw', backgroundColor: 'rgba(0, 109, 119, 0.5)', boxShadow:'0 0 4px 0.5px black', 'backdrop-filter': 'blur(8px)', borderRadius: '16px'}}>
        <Stack spacing={2} direction='column' sx={{width: '70vw', marginLeft: '5vw', marginRight: '5vw'}}>
          
          <Typography variant='h2' align='center' sx={{'color': '#EDF6F9', marginLeft: '0%', marginTop: '1%', textDecoration: 'underline', 'fontSize': '50px'}}>
            About Us
          </Typography>    

          <Typography sx={{textAlign: 'center', 'color': '#EDF6F9', 'fontSize': '32px', marginTop: '16px'}}>
            Overview
          </Typography>
          <Typography sx={{backgroundColor: 'rgba(255, 255, 255, 0.3)', borderRadius: '16px'}}>
            Reach out for your fellow teammates by connecting them with mental health professionals to help them receive anonymous access to resources and care. The app safeguards user agency and reduces the mental health stigma, barriers, and fears preventing people from seeking help. By reaching out for one another, teammates can safely intervene and prevent future tragedies from suicide.
          </Typography>
          
          <Typography sx={{textAlign: 'center', 'color': '#EDF6F9', 'fontSize': '32px', marginTop: '16px'}}>
            Reach Out
          </Typography>
          <Typography sx={{backgroundColor: 'rgba(255, 255, 255, 0.3)', borderRadius: '16px'}}>
            Reach Out: Users can enroll in the app, create a user profile, and join units. If a user becomes concerned about a teammate’s wellbeing, they can “reach out” for them. By reaching out, the user indicates their well being in different categories and may leave a comment to assist mental health providers. Users reach out anonymously and do not have to be concerned with knowing specific resources and knowledge pertaining to mental health services, leaving that to the mental health professionals. Reaching out is easy to do, but important to help teammates receive mental health resources and services that they may or may not think they need at the time. By reaching out, you look after your teammates. Together we are stronger.
          </Typography>
          
          <Typography sx={{textAlign: 'center', 'color': '#EDF6F9', 'fontSize': '32px', marginTop: '16px'}}>
            Mental Health Provider
          </Typography>
          <Typography sx={{backgroundColor: 'rgba(255, 255, 255, 0.3)', borderRadius: '16px'}}>
            Mental Health Provider: As one or more users reach out for a teammate, mental health providers can triage concerns and risk factors. Without revealing that teammate’s identity, the mental health provider can reach out to that teammate and provide resources. A teammate’s identity is safeguarded up until the point they consent to scheduling an appointment with their assigned clinic.
          </Typography>

          
          <Typography sx={{textAlign: 'center', 'color': '#EDF6F9', 'fontSize': '32px', marginTop: '16px'}}>
            Projection Inspiration
          </Typography>
          <StyledImage src='designimg/article_snipit.png' className='login-image' alt='snipit of article header'/>
          <a rel="noreferrer" href='https://www.defense.gov/News/Releases/Release/Article/2794170/secretary-of-defense-statement-on-dod-annual-suicide-report-cy2020/' target='_blank' style={{textAlign: 'center', 'fontSize': '20px', marginBottom: '16px', fontFamily: 'Roboto', color: '#FFDDD2'}}>
            Secretary of Defense Statement on DoD Annual Suicde Report (CY2020)
          </a>         

        </Stack>
      </Paper>

    </>
  );
}

export default App;


const StyledImage = styled.img`
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 32px;
  width: 70vw;
  box-shadow: 0px 0px 4px 0px black;
`;