import React from 'react';
import { TextField,  Paper, Button, Slider, Grid, Typography, Stack } from '@mui/material';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
// import { textAlign } from '@mui/system';

// import { useNavigate } from 'react-router-dom';

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
      <h1>Self Reflection Page</h1>
      <Paper elevation={3} sx={{width: '50vw', marginLeft: '25vw', marginRight: '25vw', paddingBottom: '2vw', marginBottom: '5vw'}}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }} columns={2} >
            <Grid item xs={1}>
              <Typography align='right'>
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
                onChange={(e)=>{sliderOnChangeHandler(e)}}
              ></Slider>
            </Grid>
            <Grid item xs={1}>
              <Typography align='right'>
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
                onChange={(e)=>{sliderOnChangeHandler(e)}}
              ></Slider>
            </Grid>
            <Grid item xs={1}>
              <Typography align='right'>
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
                onChange={(e)=>{sliderOnChangeHandler(e)}}
              ></Slider>
            </Grid>
            <Grid item xs={1}>
              <Typography align='right'>
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
                onChange={(e)=>{sliderOnChangeHandler(e)}}
              ></Slider>
            </Grid>
            <Grid item xs={1}>
              <Typography align='right'>
                Health and Fitness
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
                onChange={(e)=>{sliderOnChangeHandler(e)}}
              ></Slider>
            </Grid>
            <Grid item xs={1}>
              <Typography align='right'>
                  Comments
              </Typography>
            </Grid>

            <Grid item xs={1}>
              <TextField label='Comments' maxRows={5} minRows={3} multiline sx={{width: '100%'}}></TextField>
            </Grid>
        </Grid>
        <Button>Submit</Button>
      </Paper>
    </>
  )
}
export default SelfReflectionPage;