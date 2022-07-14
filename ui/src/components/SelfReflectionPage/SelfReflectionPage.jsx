/* eslint-disable */
import React from 'react';
import { TextField,  Paper, Alert, Button, Slider, Grid, Typography, Stack, Card, Fade} from '@mui/material';
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
import { useNavigate, useParams } from 'react-router-dom';
import propTypes from 'prop-types';
import {primaryTheme, SurveyCard, CommentCard, capitalizeFirstLetter, SurveyTextField, SurveySlider, SurveyPaper, SurveySubmitButton, SurveyTypography, notificationColors, TitleTypography, TitleCard} from '../Shared/CustomComponents';
import { Box } from '@mui/system';
import { useEffect } from 'react';

const ApiUrl = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;
const categories = ['family', 'social', 'legal', 'work', 'health'];

const SelfReflectionPage = () => {
  const defaultIconStyle = {
    satisfied: {color: 'green' , backgroundColor: notificationColors.green, height:'6em', width:'auto', borderRadius: '50%', padding: '12px'},
    neutral: {color: 'yellow', backgroundColor: notificationColors.yellow, height:'3em', width:'auto', borderRadius: '50%', padding: '12px'},
    dissatisfied: {color: 'red', backgroundColor: notificationColors.red, height:'3em', width:'auto', borderRadius: '50%', padding: '12px'}
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
  let params = useParams();

  const {values} = useContext(AppContext);
  const nav = useNavigate();
  if (!values.currentUser.role.isUser) nav('/error');

  const [member, setMember] = React.useState(undefined);
  useEffect(()=>{
    fetch(ApiUrl + `/members/${params.memberID}`)
    .then(res=>res.json())
    .then(data => {
      setMember(data[0])
      console.log(data[0]);
      if(!params.hasOwnProperty(membersID))
      {
        setMember({});
      }
   }) 
   .catch(err => console.log(err))
  },[params])
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
        satisfied: {color: 'green' , backgroundColor: notificationColors.green, height:'3em', width:'auto', borderRadius: '50%', padding: '12px'},
        neutral: {color: 'yellow', backgroundColor: notificationColors.yellow, height:'3em', width:'auto', borderRadius: '50%', padding: '12px'},
        dissatisfied: {color: 'red', backgroundColor: notificationColors.red, height:'6em', width:'auto', borderRadius: '50%', padding: '12px'}
      })
    }
    else if(e.target.value===2)
    {
      tempIconsSX[category] = (  {
        satisfied: {color: 'green' , backgroundColor: notificationColors.green, height:'3em', width:'auto', borderRadius: '50%', padding: '12px'},
        neutral: {color: 'yellow', backgroundColor: notificationColors.yellow, height:'6em', width:'auto', borderRadius: '50%', padding: '12px'},
        dissatisfied: {color: 'red', backgroundColor: notificationColors.red, height:'3em', width:'auto', borderRadius: '50%', padding: '12px'}
      })
    }
    else if(e.target.value===3){
      tempIconsSX[category] = (   {
        satisfied: {color: 'green' , backgroundColor: notificationColors.green, height:'6em', width:'auto', borderRadius: '50%', padding: '12px'},
        neutral: {color: 'yellow', backgroundColor: notificationColors.yellow, height:'3em', width:'auto', borderRadius: '50%', padding: '12px'},
        dissatisfied: {color: 'red', backgroundColor: notificationColors.red, height:'3em', width:'auto', borderRadius: '50%', padding: '12px'}
      })
    }

    setIconsSX(tempIconsSX);
  }


  console.log(member);
  return (
    <>
      {/* <Dashboard /> */}
      <SurveyPaper theme={primaryTheme} elevation={3} sx={{width: '90%', marginLeft: '5%', marginRight: '5%', paddingBottom: '2vw', marginBottom: '5%', paddingLeft: '2%', paddingRight: '2%'}}>
        {/* <h1 style={{textAlign: 'center'}}>Self Reflection Page</h1> */}
        {member === '' || member === undefined?
          <TitleTypography theme={primaryTheme} align='center' elevation={6}>Self Reflection</TitleTypography>
          :
          <TitleTypography theme={primaryTheme} align='center'>Reaching Out For {`${member.first_name} ${member.last_name}`}</TitleTypography>
        }
        {categories.map((category,i) => {
          return (
          <SurveyCard key={i} theme={primaryTheme} elevation={5} sx={{marginLeft:'10%', marginRight: '10%'}}>
            <SurveyTypography theme={primaryTheme} variant='h4' align='center'>
              {capitalizeFirstLetter(category)}
            </SurveyTypography>
            <Stack direction='row'  justifyContent='space-between'>
              <img src='../reachoutimg/handshake.png' alt='handshake emoji' style={IconsSX[category].dissatisfied} />
              <img src='../reachoutimg/ok-hand.png' alt='ok-hand emoji' style={IconsSX[category].neutral} />
              <img src='../reachoutimg/thumbs-up.png' alt='thumbs-up emoji' style={IconsSX[category].satisfied} />
            </Stack>
            <Box sx ={{width: '87%', marginLeft: '6.5%', marginRight: '6.5%'}}>
              <SurveySlider theme={primaryTheme}
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
                }}
              ></SurveySlider>
            </Box>
          </SurveyCard>
          )
        })}
        <SurveyCard theme={primaryTheme} elevation={5} sx={{marginLeft:'10%', marginRight: '10%'}}>
          <SurveyTypography theme={primaryTheme} variant='h4' align='center'>
            Comments
          </SurveyTypography>
          <SurveyTextField theme={primaryTheme} id='comments-textfield' label='Comments' maxRows={5} minRows={3} multiline sx={{width: '100%'}} />
        </SurveyCard>
        <SelfReflectionPageSubmitButton callback={submitSurveyHandler} onClick={()=>{console.log(SliderValues, IconsSX)}}/>
      </SurveyPaper>
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
      <SurveySubmitButton theme={primaryTheme} onClick={handleClick} elevation={4} sx={{width:'80%'}}>Submit</SurveySubmitButton>
      <Snackbar
        anchorOrigin={{vertical:'bottom', horizontal:'center'}}
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        message="Survey Submitted"
        action={action}
        TransitionComponent={Fade}
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
