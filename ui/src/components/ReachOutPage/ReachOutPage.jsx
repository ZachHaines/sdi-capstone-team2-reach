import React from 'react';
import { TextField,  Paper, Button, Slider, Grid, Typography, Stack } from '@mui/material';
// import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
// import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
// import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
// import Dashboard from '../Dashboard/Dashboard.jsx'
// import Dashboard from '../Dashboard/Dashboard.jsx'
// import { textAlign } from '@mui/system';

// import { useNavigate } from 'react-router-dom';
import propTypes from 'prop-types';
import MemberList from './MemberList';


const defaultIconStyle = {
  satisfied: {color: 'green' , backgroundColor: '#ccc', height:'6em', width:'auto'},
  neutral: {color: 'yellow', backgroundColor: '#ccc', height:'3em', width:'auto'},
  dissatisfied: {color: 'red', backgroundColor: '#ccc', height:'3em', width:'auto'}
}
const ReachOutPage = ({memberID}) => {
  console.log('Confirm Member ID:', memberID);
  const [FamilyIconSX, setFamilyIconSX] = React.useState(defaultIconStyle)
  const [SocialIconSX, setSocialIconSX] = React.useState(defaultIconStyle)
  const [LegalIconSX, setLegalIconSX] = React.useState(defaultIconStyle)
  const [WorkIconSX, setWorkIconSX] = React.useState(defaultIconStyle)
  const [HealthIconSX, setHealthIconSX] = React.useState(defaultIconStyle)
  const sliderOnChangeHandler = (e) => {
    // let value = document.getElementById('family-slider').defaultValue
    // console.log(value);
    console.log('Target Name: ', e.target.name)
    console.log('Target Value :', e.target.value);
    let setIcons = setFamilyIconSX
    if(e.target.name === 'family-slider') setIcons = setFamilyIconSX;
    else if(e.target.name === 'social-slider') setIcons = setSocialIconSX;
    else if(e.target.name === 'legal-slider') setIcons = setLegalIconSX;
    else if(e.target.name === 'work-slider') setIcons = setWorkIconSX;
    else if(e.target.name === 'health-slider') setIcons = setHealthIconSX;

    if(e.target.value===1)
    {
      setIcons( {
        satisfied: {color: 'green' , backgroundColor: '#ccc', height:'3em', width:'auto'},
        neutral: {color: 'yellow', backgroundColor: '#ccc', height:'3em', width:'auto'},
        dissatisfied: {color: 'red', backgroundColor: '#ccc', height:'6em', width:'auto'}
      })
    }
    else if(e.target.value===2)
    {
      setIcons(  {
        satisfied: {color: 'green' , backgroundColor: '#ccc', height:'3em', width:'auto'},
        neutral: {color: 'yellow', backgroundColor: '#ccc', height:'6em', width:'auto'},
        dissatisfied: {color: 'red', backgroundColor: '#ccc', height:'3em', width:'auto'}
      })
    }
    else if(e.target.value===3){
      setIcons(  {
        satisfied: {color: 'green' , backgroundColor: '#ccc', height:'6em', width:'auto'},
        neutral: {color: 'yellow', backgroundColor: '#ccc', height:'3em', width:'auto'},
        dissatisfied: {color: 'red', backgroundColor: '#ccc', height:'3em', width:'auto'}
      })
    }
  }

  return (
    <>
      {/* <Dashboard /> */}
      <Paper elevation={3} sx={{width: '75%', marginLeft: '12.5%', marginRight: '12.5%', paddingBottom: '2vw', marginBottom: '5%', paddingLeft: '2%', paddingRight: '2%'}}>
        <h1 style={{textAlign: 'center'}}>Reach Out Page </h1>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }} columns={2} >
          {/* Family */}
            <Grid item xs={1}>
              <Typography variant='h4' align='center'>
                Family
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Stack direction='row'  justifyContent='space-between'>
                <img src='./reachoutimg/handshake.png' alt='handshake emoji' style={FamilyIconSX.dissatisfied} />
                <img src='./reachoutimg/ok-hand.png' alt='ok-hand emoji' style={FamilyIconSX.neutral} />
                <img src='./reachoutimg/thumbs-up.png' alt='thumbs-up emoji' style={FamilyIconSX.satisfied} />
                {/* // <SentimentVeryDissatisfiedIcon sx={FamilyIconSX.dissatisfied}/>
                // <SentimentNeutralIcon sx={FamilyIconSX.neutral}/>
                // <SentimentSatisfiedAltIcon sx={FamilyIconSX.satisfied}/> */}
              </Stack>
              <Slider
                id='family-slider'
                name='family-slider'
                defaultValue={3}
                step={1}
                marks
                min={1}
                max={3}
                track={false}
                onChange={(e)=>{sliderOnChangeHandler(e)}}
              ></Slider>
            </Grid>
            {/* Social */}
            <Grid item xs={1}>
              <Typography variant='h4' align='center'>
                Social
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Stack direction='row' justifyContent='space-between'>
                <img src='./reachoutimg/handshake.png' alt='handshake emoji' style={SocialIconSX.dissatisfied} />
                <img src='./reachoutimg/ok-hand.png' alt='ok-hand emoji' style={SocialIconSX.neutral} />
                <img src='./reachoutimg/thumbs-up.png' alt='thumbs-up emoji' style={SocialIconSX.satisfied} />
              </Stack>
              <Slider
                id='social-slider'
                name='social-slider'
                defaultValue={3}
                step={1}
                marks
                min={1}
                max={3}
                track={false}
                onChange={(e)=>{sliderOnChangeHandler(e)}}
              ></Slider>
            </Grid>
            {/* Legal */}
            <Grid item xs={1}>
              <Typography variant='h4' align='center'>
                Legal
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Stack direction='row' justifyContent='space-between'>
              <img src='./reachoutimg/handshake.png' alt='handshake emoji' style={LegalIconSX.dissatisfied} />
                <img src='./reachoutimg/ok-hand.png' alt='ok-hand emoji' style={LegalIconSX.neutral} />
                <img src='./reachoutimg/thumbs-up.png' alt='thumbs-up emoji' style={LegalIconSX.satisfied} />
              </Stack>
              <Slider
                id='legal-slider'
                name='legal-slider'
                defaultValue={3}
                step={1}
                marks
                min={1}
                max={3}
                track={false}
                onChange={(e)=>{sliderOnChangeHandler(e)}}
              ></Slider>
            </Grid>
            {/* Work */}
            <Grid item xs={1}>
              <Typography variant='h4' align='center'>
                Work
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Stack direction='row' justifyContent='space-between'>
                <img src='./reachoutimg/handshake.png' alt='handshake emoji' style={WorkIconSX.dissatisfied} />
                <img src='./reachoutimg/ok-hand.png' alt='ok-hand emoji' style={WorkIconSX.neutral} />
                <img src='./reachoutimg/thumbs-up.png' alt='thumbs-up emoji' style={WorkIconSX.satisfied} />
              </Stack>
              <Slider
                id='work-slider'
                name='work-slider'
                defaultValue={3}
                step={1}
                marks
                min={1}
                max={3}
                track={false}
                onChange={(e)=>{sliderOnChangeHandler(e)}}
              ></Slider>
            </Grid>
            {/* Health */}
            <Grid item xs={1}>
              <Typography variant='h4' align='center'>
                Health
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Stack direction='row' justifyContent='space-between'>
                <img src='./reachoutimg/handshake.png' alt='handshake emoji' style={HealthIconSX.dissatisfied} />
                <img src='./reachoutimg/ok-hand.png' alt='ok-hand emoji' style={HealthIconSX.neutral} />
                <img src='./reachoutimg/thumbs-up.png' alt='thumbs-up emoji' style={HealthIconSX.satisfied} />
              </Stack>
              <Slider
                id='health-slider'
                name='health-slider'
                defaultValue={3}
                step={1}
                marks
                min={1}
                max={3}
                track={false}
                onChange={(e)=>{sliderOnChangeHandler(e)}}
              ></Slider>
            </Grid>
            {/* Comments */}
            <Grid item xs={1}>
              <Typography variant='h4' align='center'>
                  Comments
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <TextField label='Comments' maxRows={5} minRows={3} multiline sx={{width: '100%'}}></TextField>
            </Grid>
        </Grid>
        <Button>Submit</Button>
      </Paper>
      <MemberList/>
    </>
  )
}
ReachOutPage.propTypes = {
  memberID: propTypes.number
}
export default ReachOutPage;