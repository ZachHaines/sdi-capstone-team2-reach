/* eslint-disable */
import React from 'react';
import { TextField,  Paper, Alert, Button, Slider, Grid, Typography, Stack, Card } from '@mui/material';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
// import Dashboard from '../Dashboard/Dashboard.jsx'
// import Dashboard from '../Dashboard/Dashboard.jsx'
// import { textAlign } from '@mui/system';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useContext } from 'react';
import { AppContext } from '../../AppContext';
// import { useNavigate } from 'react-router-dom';
import config from '../../config';
import { useNavigate } from 'react-router-dom';
import propTypes from 'prop-types';
import { primaryTheme, SurveyCard } from '../Shared/CustomComponents';

const ApiUrl = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;
const categories = ['family', 'social', 'legal', 'work', 'health'];

const SelfReflectionPage = () => {
  const defaultIconStyle = {
    satisfied: {color: 'green' , backgroundColor: '#C6EFCE', fontSize:'100px'},
    neutral: {color: 'yellow', backgroundColor: '#FFF1BA'},
    dissatisfied: {color: 'red', backgroundColor: '#FFC7CE'}
  }
  const [IconsSX, setIconsSX] = React.useState({
    family: defaultIconStyle,
    social: defaultIconStyle,
    legal: defaultIconStyle,
    work: defaultIconStyle,
    health: defaultIconStyle
  })
  const [SliderValues, setSliderValues] = React.useState({
    family: 3,
    social: 3,
    legal: 3,
    work: 3,
    health: 3
  })

  const {values} = useContext(AppContext);
  const nav = useNavigate();
  if (!values.currentUser.role.isUser) nav('/error');

  const submitSurveyHandler = () => {
    console.log(SliderValues, IconsSX)
    const newSurvey = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
        members_id_to: values.currentUser.id,
        members_id_from: values.currentUser.id,
        family: SliderValues.family,
        social: SliderValues.social,
        legal: SliderValues.legal,
        work: SliderValues.work,
        health: SliderValues.health,
        comment: document.getElementById('comments-textfield').value,
      })
    }
    // console.log('survey header: ', newSurvey);

    fetch(`${ApiUrl}/surveymessages`, newSurvey)
    .then(res => res.json())
    .then(data => {
      return data;
    })
    .catch(err=>console.log(err));
  }
  
  const sliderOnChangeHandler = (e, category) => {
    // let value = document.getElementById('family-slider').defaultValue
    // console.log(value);

    let tempIconsSX = JSON.parse(JSON.stringify(IconsSX));
    let tempSliderValue = JSON.parse(JSON.stringify(SliderValues));
    tempSliderValue[category] = e.target.value;
    setSliderValues(tempSliderValue);
    if(e.target.value===1)
    {
      tempIconsSX[category] = ( {
        satisfied: {color: 'green' , backgroundColor: '#C6EFCE'},
        neutral: {color: 'yellow', backgroundColor: '#FFF1BA'},
        dissatisfied: {color: 'red', backgroundColor: '#FFC7CE', fontSize:'100px'}
      })
    }
    else if(e.target.value===2)
    {
      tempIconsSX[category] = (  {
        satisfied: {color: 'green' , backgroundColor: '#C6EFCE'},
        neutral: {color: 'yellow', backgroundColor: '#FFF1BA', fontSize:'100px'},
        dissatisfied: {color: 'red', backgroundColor: '#FFC7CE'}
      })
    }
    else if(e.target.value===3){
      tempIconsSX[category] = (  {
        satisfied: {color: 'green' , backgroundColor: '#C6EFCE', fontSize:'100px'},
        neutral: {color: 'yellow', backgroundColor: '#FFF1BA'},
        dissatisfied: {color: 'red', backgroundColor: '#FFC7CE'}
      })
    }

    setIconsSX(tempIconsSX);
  }

  return (
    <>
      {/* <Dashboard /> */}
      <Paper elevation={3} sx={{width: '100%', marginLeft: '0%', marginRight: '0%', paddingBottom: '2vw', marginBottom: '5%', paddingLeft: '2%', paddingRight: '2%'}}>
        <h1 style={{textAlign: 'center'}}>Self Reflection Page</h1>
        {categories.map((category) => {
          return (
          <SurveyCard theme={primaryTheme}>
            <Typography variant='h4' align='center'>
              {category}
            </Typography>
            <Stack direction='row'  justifyContent='space-between'>
              <SentimentVeryDissatisfiedIcon sx={IconsSX[category].dissatisfied}/>
              <SentimentNeutralIcon sx={IconsSX[category].neutral}/>
              <SentimentSatisfiedAltIcon sx={IconsSX[category].satisfied}/>
            </Stack>
            <Slider
              id={`${category}-slider`}
              name={`${category}-slider`}
              defaultValue={3}
              step={1}
              marks
              min={1}
              max={3}
              track={false}
              onChange={(e)=>{
                sliderOnChangeHandler(e, category);
                setFamilySliderValue(e.target.value)
              }}
            ></Slider>
          </SurveyCard>
          )
        })}
        <SurveyCard theme={primaryTheme}>
          <Typography variant='h4' align='center'>
            Comments
          </Typography>
          <TextField id='comments-textfield' label='Comments' maxRows={5} minRows={3} multiline sx={{width: '100%'}}></TextField>
        </SurveyCard>
        <SelfReflectionPageSubmitButton callback={submitSurveyHandler} onClick={()=>{console.log(SliderValues, IconsSX)}}/>
      </Paper>
    </>
  )
}


const SelfReflectionPageSubmitButton = ({callback}) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
    callback();
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        Close
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Button onClick={handleClick}>Submit</Button>
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        message="Survey Submitted"
        action={action}
      >
        <Alert onClose = {handleClose} severity='success'>Survey Submitted</Alert>
      </Snackbar>
    </div>
  );
}
SelfReflectionPageSubmitButton.propTypes = {
  callback: propTypes.any,
}
export default SelfReflectionPage;





{/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }} columns={2} >
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
</Grid> */}