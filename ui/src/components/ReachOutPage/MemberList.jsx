import { Grid, MenuItem, Paper, Select, TextField } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import config from '../../config';

const ApiUrl = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;

const MemberList = () => {
  const [members, setMembers] = React.useState([]);
  const [units, setUnits] = React.useState([]);
  React.useEffect(()=>{
   fetch(ApiUrl+'/members')
   .then(res=>res.json())
   .then(data=>{
    console.log(data)
    setMembers(data);
   })
   fetch(ApiUrl+'/units')
   .then(res=>res.json())
   .then(data=>{
    console.log(data)
    setUnits(data);
   })
  }, [])
  return (
    <>
      <h1>Reach Out To...</h1>
      <Paper elevation={3} sx={{marginBottom: '1vw'}}>
        <TextField defaultValue={'something'} placeholder={'search by name'} label='search'/>
        <Select label='Units'>
          {units.map((e) => {
            return (
              <MenuItem key={e.id}>{e.name}</MenuItem>
            )
          })}

        </Select>
      </Paper>
      <Paper elevation={3}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }} columns={2} >
          {members.map((e)=>{
            return (
              <Grid item xs={1} key={e.id}>
                <Link key={e.id} to={`/reachout/${e.id}`}>
                  <p >
                    {/* username, last name, first name, unit_name, command_name, agency_name */}
                    {e.username}, 
                    {e.last_name}, 
                    {e.first_name}, 
                    {e.units_id}, 
                  </p>
                </Link>
              </Grid>
            )
          })}
        </Grid>
      </Paper>
    </>
  )
}

export default MemberList;