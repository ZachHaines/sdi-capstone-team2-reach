/* eslint-disable */
import { Grid, MenuItem, Paper, Select, TextField } from '@mui/material';
import React from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../../AppContext';
import config from '../../config';
import {primaryTheme, NameTypography, SurveySelect, SurveyCard, CommentCard, capitalizeFirstLetter, SurveyTextField, SurveySlider, SurveyPaper, SurveySubmitButton, SurveyTypography, notificationColors, TitleTypography, TitleCard} from '../Shared/CustomComponents';

const ApiUrl = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;

const MemberList = () => {
  const {values} = useContext(AppContext);
  const [members, setMembers] = React.useState([]);
  const [displayMembers, setDisplayMembers] = React.useState([]);
  const [units, setUnits] = React.useState([]);
  const [selectUnit, setSelectUnit] = React.useState(values.currentUser.units_id);

  const nav = useNavigate();
  if (!values.currentUser.role.isUser) nav('/error');

  React.useEffect(()=>{
   fetch(ApiUrl+'/units')
   .then(res=>res.json())
   .then(data=>{
    console.log(data)
    setUnits(data);
   })
   .then(()=>{
    fetch(ApiUrl+'/members')
    .then(res=>res.json())
    .then(data=>{
     console.log(data)
     setMembers(data);
     setSelectUnit(values.currentUser.units_id)
     let temp = data.concat([])
     temp = temp.filter((e)=>{
       return e.units_id === values.currentUser.units_id
     })
     console.log(temp);
     setDisplayMembers(temp);
    })
   })

  }, [])
  console.log(members, displayMembers);
  const nameSearchHandler = (event) => {
    console.log(event.target.value)
    let temp = members.concat([])
    temp = temp.filter((e)=>{
      return e.username.toUpperCase().includes(event.target.value.toUpperCase())
    })
    setDisplayMembers(temp);
    setSelectUnit(0);
  }
  const handleChange = (event) => {
    setSelectUnit(event.target.value)
    console.log(event.target.value)
    let temp = members.concat([])
    temp = temp.filter((e)=>{
      return e.units_id === event.target.value
    })
    setDisplayMembers(temp);
  }

  return (
    <>
      <TitleTypography theme={primaryTheme}>
        Reach Out To...
      </TitleTypography>
      <SurveyCard theme={primaryTheme} elevation={3} sx={{marginBottom: '1vw'}}>
        <SurveyTextField theme={primaryTheme} id='search-text-box' onChange={nameSearchHandler} placeholder={'search by name'} label='search'/>
        <SurveyTextField theme={primaryTheme}
          select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectUnit}
          label="units"
          defaultValue={values.currentUser.units_id}
          onChange={handleChange}
        >
          <MenuItem  value={0}>N/A</MenuItem>
          {units.map((e) => {
            return (
              <MenuItem key={e.id} value={e.id}>{e.name}</MenuItem>
            )
          })}

        </SurveyTextField>
      </SurveyCard>
      <SurveyPaper theme={primaryTheme} elevation={3}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }} columns={12} >
          {displayMembers.map((e)=>{
            return (
              <Grid item xs={6} sm ={4} md={3} key={e.id}>
                  <Link key={e.id} to={`/reachout/${e.id}`} sx={{}}>
                      <NameTypography variant='h1' theme = {primaryTheme} align='center'>
                        {`${e.username}`}
                      </NameTypography>
                      {/* <p>
                        {`${e.username}`}
                      </p> */}
                  </Link>
              </Grid>
            )
          })}
        </Grid>
      </SurveyPaper>
    </>
  )
}

export default MemberList;