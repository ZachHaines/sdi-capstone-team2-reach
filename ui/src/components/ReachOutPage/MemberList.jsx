import { Grid, MenuItem, Stack } from '@mui/material';
import React from 'react';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../AppContext';
import config from '../../config';
import {primaryTheme, NameTypography, SurveyCard, SurveyTextField, TitleTypography, SurveyPaper} from '../Shared/CustomComponents';

const ApiUrl = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;

const MemberList = () => {
  const {values} = useContext(AppContext);
  const [members, setMembers] = React.useState([]);
  const [displayMembers, setDisplayMembers] = React.useState([]);
  const [units, setUnits] = React.useState([]);
  // const [commands, setCommands] = React.useState([]);
  // const [agencies, setAgencies] = React.useState([]);
  // const [selectCommand, setSelectCommand] = React.useState(values.currentUser.commands_id);
  // const [selectAgency, setSelectAgency] = React.useState(values.currentUser.agencies_id);
  const [selectUnit, setSelectUnit] = React.useState(values.currentUser.units_id);
  const nav = useNavigate();
  if (!values.currentUser.role.isUser) nav('/error');

 useEffect(()=>{
    fetch(ApiUrl+'/units')
    .then(res=>res.json())
    .then(data=>{
    console.log('Units Received ', data)
    setUnits(data);
    })
    .then(()=>{
      fetch(ApiUrl+'/members/joinadmin')
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
  const handleUnitsChange = (event) => {
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
        Reach Out For...
      </TitleTypography>
      <SurveyCard theme={primaryTheme} elevation={3} sx={{marginBottom: '1vw'}}>
        <Stack direction="row" spacing={2} justifyContent='space-evenly'>
          <SurveyTextField theme={primaryTheme} id='search-text-box' onChange={nameSearchHandler} placeholder={'search by name'} label='search' sx={{width:'40%'}}/>
          <SurveyTextField theme={primaryTheme}
            sx={{width:'40%'}}
            select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectUnit}
            label="units"
            defaultValue={values.currentUser.units_id}
            onChange={handleUnitsChange}
          >
            <MenuItem  value={0}>N/A</MenuItem>
            {units.map((e) => {
              return (
                <MenuItem key={e.id} value={e.id}>{e.name}</MenuItem>
              )
            })}

          </SurveyTextField>
        </Stack>
      </SurveyCard>
      <SurveyPaper theme={primaryTheme} elevation={3}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }} columns={12} >
          {displayMembers.map((e)=>{
            return (
              <Grid item xs={6} sm ={4} md={3} key={e.id}>
                <NameTypography variant='h1' theme = {primaryTheme} align='center' onClick={()=>{nav(`/reachout/${e.id}`)}}>
                  {`${e.username}`}
                </NameTypography>
              </Grid>
            )
          })}
        </Grid>
      </SurveyPaper>
    </>
  )
}

export default MemberList;


        // {/* <SurveyTextField theme={primaryTheme}
        //   select
        //   labelId="demo-simple-select-label"
        //   id="demo-simple-select"
        //   value={selectUnit}
        //   label="commands"
        //   defaultValue={values.currentUser.commands_id}
        //   onChange={handleCommandsChange}
        // >
        //   <MenuItem  value={0}>N/A</MenuItem>
        //   {commands.map((e) => {
        //     return (
        //       <MenuItem key={e.id} value={e.id}>{e.name}</MenuItem>
        //     )
        //   })}

        // </SurveyTextField>
        // <SurveyTextField theme={primaryTheme}
        //   select
        //   labelId="demo-simple-select-label"
        //   id="demo-simple-select"
        //   value={selectUnit}
        //   label="units"
        //   defaultValue={values.currentUser.agencies_id}
        //   onChange={handleAgenciesChange}
        // >
        //   <MenuItem  value={0}>N/A</MenuItem>
        //   {agencies.map((e) => {
        //     return (
        //       <MenuItem key={e.id} value={e.id}>{e.name}</MenuItem>
        //     )
        //   })}

        // </SurveyTextField> */}
