import React from 'react';
import config from './config'
import { Button, Paper, Stack, Typography} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'


const ApiUrl = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;


function App() {
  const nav = useNavigate();
  console.log(ApiUrl);
  // backgroundImage:'radial-gradient(#EDF6F9, #EDF6F9, #FFFFFF )'
  // 'backgroundColor': 'rgba(131, 197, 190, 0.3)'
  return (
    <StyledBackground>
    {/* <div style={{backgroundImage:'radial-gradient(#FFFFFF, #EDF6F9 )', position: 'absolute', overflow: 'auto', top: 0, left: 0, right: 0, bottom: 0}}> */}
      
      <Paper className='login-sheet' elevation={10} sx={{width: '80vw', marginLeft: '9vw', marginRight:'9vw', marginTop: '2.5vw', marginBottom: '2.5vw', backgroundColor: '#006D77', boxShadow:'0 0 8px #006D77', borderRadius: '16px', paddingBottom: '2vw'}}>
        <Stack spacing={2} direction='column' sx={{width: '70vw', marginLeft: '5vw', marginRight: '5vw'}}>
        <Paper className='header' elevation={20} sx={{backgroundColor: 'rgba(237, 246, 249, 0.3)', boxShadow:'0px 0px 24px 4px #F8F8F8', borderRadius: '16px', paddingBottom: '2%', marginTop: '4%', marginBottom: '4%',textRendering:'optimizeLegibility'}}>
          <Typography className='heading-title' variant='h2' align='center' sx={{'fontFamily': 'Roboto', 'color': '#EDF6F9', marginLeft: '0%', marginTop: '1%', fontWeight: '700'}}>
            REACH
          </Typography>
          <Typography variant='h2' align='center' sx={{'fontFamily': 'Roboto', 'color': '#EDF6F9', marginLeft: '0%', marginTop: '1%', marginBottom: '1%', fontWeight: '700', 'fontSize': '50px'}}>
            Together, We Are Stronger
          </Typography>
        </Paper>

        <StyledImage src='designimg/reaching-hands.jpeg' className='login-image' alt='military service member clasping hand with another'/>

          <Button onClick={()=>{nav('/login')}} sx={{'fontFamily': 'Roboto', 'color': '#FFDDD2', 'fontSize': '24px', backgroundColor: '#E29578', borderRadius: '16px', margin: '3%'}}>Login</Button>
          <Button onClick={()=>{nav('/signup')}} sx={{'fontFamily': 'Roboto', 'color': '#FFDDD2', 'fontSize': '24px', backgroundColor: '#E29578', borderRadius: '16px', margin: '3%'}}>Sign Up</Button>

        </Stack>
      </Paper>
      <Paper className='login-sheet' elevation={10} sx={{width: '80vw', marginLeft: '9vw', marginRight:'9vw', marginTop: '2.5vw', marginBottom: '2.5vw', backgroundColor: '#006D77', boxShadow:'0 0 8px #006D77', borderRadius: '16px'}}>
      <Stack spacing={2} direction='column' sx={{width: '70vw', marginLeft: '5vw', marginRight: '5vw'}}>
        <div>
          <Typography variant='h2' align='center' sx={{'fontFamily': 'Roboto', 'color': '#EDF6F9', marginLeft: '0%', marginTop: '1%', textDecoration: 'underline', 'fontSize': '50px'}}>
            ABOUT US
          </Typography>    
        </div>

        <div>
          <p style={{textAlign: 'center', 'fontFamily': 'Roboto', 'color': '#EDF6F9', 'fontSize': '32px', marginTop: '16px'}}>
            Overview
          </p>
          <Paragraph>
            Reach out for your fellow teammates by connecting them with mental health professionals to help them receive anonymous access to resources and care. The app safeguards user agency and reduces the mental health stigma, barriers, and fears preventing people from seeking help. By reaching out for one another, teammates can safely intervene and prevent future tragedies from suicide.
          </Paragraph>
        </div>
        
        <div>
          <p style={{textAlign: 'center', 'fontFamily': 'Roboto', 'color': '#EDF6F9', 'fontSize': '32px', marginTop: '16px'}}>
            Reach Out
          </p>
          <Paragraph>
            Reach Out: Users can enroll in the app, create a user profile, and join units. If a user becomes concerned about a teammate’s wellbeing, they can “reach out” for them. By reaching out, the user indicates their well being in different categories and may leave a comment to assist mental health providers. Users reach out anonymously and do not have to be concerned with knowing specific resources and knowledge pertaining to mental health services, leaving that to the mental health professionals. Reaching out is easy to do, but important to help teammates receive mental health resources and services that they may or may not think they need at the time. By reaching out, you look after your teammates. Together we are stronger.
          </Paragraph>
        </div>

        <div>
          <p style={{textAlign: 'center', 'fontFamily': 'Roboto', 'color': '#EDF6F9', 'fontSize': '32px', marginTop: '16px'}}>
            Mental Health Provider
          </p>
          <Paragraph>
            Mental Health Provider: As one or more users reach out for a teammate, mental health providers can triage concerns and risk factors. Without revealing that teammate’s identity, the mental health provider can reach out to that teammate and provide resources. A teammate’s identity is safeguarded up until the point they consent to scheduling an appointment with their assigned clinic.
          </Paragraph>
        </div>

        <div style={{textAlign: 'center'}}>
          <p style={{textAlign: 'center', 'fontFamily': 'Roboto', 'color': '#EDF6F9', 'fontSize': '32px', marginTop: '16px'}}>
            Projection Inspiration
          </p>
          <StyledImage src='designimg/article_snipit.png' className='login-image' alt='snipit of article header'/>
          <a rel="noreferrer" href='https://www.defense.gov/News/Releases/Release/Article/2794170/secretary-of-defense-statement-on-dod-annual-suicide-report-cy2020/' target='_blank' style={{textAlign: 'center', 'fontFamily': 'Roboto', 'fontSize': '16px', marginTop: '0px', color: '#FFDDD2'}}>
            Secretary of Defense Statement on DoD Annual Suicde Report (CY2020)
          </a>
        </div>

        </Stack>

      </Paper>
    {/* </div> */}
    </StyledBackground>
  );
}

export default App;

const Paragraph = styled.p`
  text-align: center; 
  font-weight: 700;
  font-family: Roboto; 
  font-size: 16px;
  margin-bottom: 2%;
`;

const StyledImage = styled.img`
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 32px;
  width: 70vw;
  box-shadow: 0px 0px 24px 4px #F8F8F8;
`;

const StyledBackground = styled.div`
  background-image: url("https://img.freepik.com/free-photo/stacked-zen-stones-sand-background-art-balance-concept_53876-110629.jpg?w=1380&t=st=1657762447~exp=1657763047~hmac=c991e8896b35eaeb986b45d82318cb475611cbe9bc102613417a0ef9471507be");
  background-position: center;
  background-repeat: repeat-y;
  background-size: cover;
  text-align: center;
  width: 100vw;
  height: 100%;
`;