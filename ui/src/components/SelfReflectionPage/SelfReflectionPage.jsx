import React from 'react';
import { TextField,  Paper, Button, Slider, Grid, Typography, Stack } from '@mui/material';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
// import Dashboard from '../Dashboard/Dashboard.jsx'
// import Dashboard from '../Dashboard/Dashboard.jsx'
// import { textAlign } from '@mui/system';
import { useContext } from 'react';
import { AppContext } from '../../AppContext';
// import { useNavigate } from 'react-router-dom';
import config from '../../config';
const ApiUrl = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;


const defaultIconStyle = {
  satisfied: {color: 'green' , backgroundColor: '#ccc', fontSize:'100px'},
  neutral: {color: 'yellow', backgroundColor: '#ccc'},
  dissatisfied: {color: 'red', backgroundColor: '#ccc'}
}
const SelfReflectionPage = () => {
  const [FamilyIconSX, setFamilyIconSX] = React.useState(defaultIconStyle)
  const [SocialIconSX, setSocialIconSX] = React.useState(defaultIconStyle)
  const [LegalIconSX, setLegalIconSX] = React.useState(defaultIconStyle)
  const [WorkIconSX, setWorkIconSX] = React.useState(defaultIconStyle)
  const [HealthIconSX, setHealthIconSX] = React.useState(defaultIconStyle)

  const [FamilySliderValue, setFamilySliderValue] = React.useState(3)
  const [SocialSliderValue, setSocialSliderValue] = React.useState(3)
  const [LegalSliderValue, setLegalSliderValue] = React.useState(3)
  const [WorkSliderValue, setWorkSliderValue] = React.useState(3)
  const [HealthSliderValue, setHealthSliderValue] = React.useState(3)

  const {values} = useContext(AppContext);
  
  const submitSurveyHandler = () => {

    const newSurvey = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
        members_id_to: values.currentUser.id,
        members_id_from: values.currentUser.id,
        family: FamilySliderValue,
        social: SocialSliderValue,
        legal: LegalSliderValue,
        work: WorkSliderValue,
        health: HealthSliderValue,
        comment: document.getElementById('comments-textfield').value,
      })
    }
    console.log('survey header: ', newSurvey);

    fetch(`${ApiUrl}/surveymessages`, newSurvey)
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
  }
  
  const sliderOnChangeHandler = (e) => {
    // let value = document.getElementById('family-slider').defaultValue
    // console.log(value);
    console.log('Target Name: ', e.target.name)
    console.log('Target Value :', e.target.value);
    let setIcons = setFamilyIconSX
    if(e.target.name === 'family-slider') {
      setIcons = setFamilyIconSX
    }
    else if(e.target.name === 'social-slider') setIcons = setSocialIconSX;
    else if(e.target.name === 'legal-slider') setIcons = setLegalIconSX;
    else if(e.target.name === 'work-slider') setIcons = setWorkIconSX;
    else if(e.target.name === 'health-slider') setIcons = setHealthIconSX;

    if(e.target.value===1)
    {
      setIcons( {
        satisfied: {color: 'green' , backgroundColor: '#ccc'},
        neutral: {color: 'yellow', backgroundColor: '#ccc'},
        dissatisfied: {color: 'red', backgroundColor: '#ccc', fontSize:'100px'}
      })
    }
    else if(e.target.value===2)
    {
      setIcons(  {
        satisfied: {color: 'green' , backgroundColor: '#ccc'},
        neutral: {color: 'yellow', backgroundColor: '#ccc', fontSize:'100px'},
        dissatisfied: {color: 'red', backgroundColor: '#ccc'}
      })
    }
    else if(e.target.value===3){
      setIcons(  {
        satisfied: {color: 'green' , backgroundColor: '#ccc', fontSize:'100px'},
        neutral: {color: 'yellow', backgroundColor: '#ccc'},
        dissatisfied: {color: 'red', backgroundColor: '#ccc'}
      })
    }
  }

  return (
    <>
      {/* <Dashboard /> */}
      <Paper elevation={3} sx={{width: '75%', marginLeft: '12.5%', marginRight: '12.5%', paddingBottom: '2vw', marginBottom: '5%', paddingLeft: '2%', paddingRight: '2%'}}>
        <h1 style={{textAlign: 'center'}}>Self Reflection Page</h1>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }} columns={2} >
            <Grid item xs={1}>
              <Typography variant='h4' align='center'>
                Family
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Stack direction='row'  justifyContent='space-between'>
                <SentimentVeryDissatisfiedIcon sx={FamilyIconSX.dissatisfied}/>
                <SentimentNeutralIcon sx={FamilyIconSX.neutral}/>
                <SentimentSatisfiedAltIcon sx={FamilyIconSX.satisfied}/>
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
                onChange={(e)=>{
                  sliderOnChangeHandler(e);
                  setFamilySliderValue(e.target.value)
                 }}
              ></Slider>
            </Grid>
            <Grid item xs={1}>
              <Typography variant='h4' align='center'>
                Social
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Stack direction='row' justifyContent='space-between'>
                <SentimentVeryDissatisfiedIcon sx={SocialIconSX.dissatisfied}/>
                <SentimentNeutralIcon sx={SocialIconSX.neutral}/>
                <SentimentSatisfiedAltIcon sx={SocialIconSX.satisfied}/>
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
                onChange={(e)=>{
                  sliderOnChangeHandler(e)
                  setSocialSliderValue(e.target.value)
                }}
              ></Slider>
            </Grid>
            <Grid item xs={1}>
              <Typography variant='h4' align='center'>
                Legal
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Stack direction='row' justifyContent='space-between'>
                <SentimentVeryDissatisfiedIcon sx={LegalIconSX.dissatisfied}/>
                <SentimentNeutralIcon sx={LegalIconSX.neutral}/>
                <SentimentSatisfiedAltIcon sx={LegalIconSX.satisfied}/>
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
                onChange={(e)=>{
                  setLegalSliderValue(e.target.value)
                  sliderOnChangeHandler(e)
                }}
              ></Slider>
            </Grid>
            <Grid item xs={1}>
              <Typography variant='h4' align='center'>
                Work
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Stack direction='row' justifyContent='space-between'>
                <SentimentVeryDissatisfiedIcon sx={WorkIconSX.dissatisfied}/>
                <SentimentNeutralIcon sx={WorkIconSX.neutral}/>
                <SentimentSatisfiedAltIcon sx={WorkIconSX.satisfied}/>
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
                onChange={(e)=>{
                  setWorkSliderValue(e.target.value)
                  sliderOnChangeHandler(e)
                }}
              ></Slider>
            </Grid>
            <Grid item xs={1}>
              <Typography variant='h4' align='center'>
                Health
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Stack direction='row' justifyContent='space-between'>
                <SentimentVeryDissatisfiedIcon sx={HealthIconSX.dissatisfied}/>
                <SentimentNeutralIcon sx={HealthIconSX.neutral}/>
                <SentimentSatisfiedAltIcon sx={HealthIconSX.satisfied}/>
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
                onChange={(e)=>{
                  setHealthSliderValue(e.target.value)
                  sliderOnChangeHandler(e)
                }}
              ></Slider>
            </Grid>
            <Grid item xs={1}>
              <Typography variant='h4' align='center'>
                  Comments
              </Typography>
            </Grid>

            <Grid item xs={1}>
              <TextField id='comments-textfield' label='Comments' maxRows={5} minRows={3} multiline sx={{width: '100%'}}></TextField>
            </Grid>
        </Grid>
        <Button onClick={submitSurveyHandler}>Submit</Button>
      </Paper>
    </>
  )
}
export default SelfReflectionPage;