import React, { useEffect, useState } from 'react'
import { Paper, Grid, Card } from '@mui/material';
import config from '../../config';

const ResourcePage = () => {
  let bgcolor = '#' + '83C5BE'
  let background = {backgroundColor: bgcolor}
  let underline = {textDecoration: 'underline'}
  let header = {height: '6vh', backgroundColor: bgcolor}
  const ApiUrl = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;
  const [resources, setResources] = useState([]);
  const [facilities, setFacilities] = useState([{id:0, name: 'Facility', locations_id: 0, url: ''}]);
  console.log(setResources);
  console.log('FaCilIties!!!:', facilities)

  // fetch resources
  useEffect(()=> {
    fetch(ApiUrl+'/resources')
      .then(res => res.json())
      .then(()=> console.log('Resources Fetched and Set:', resources))
      .catch(err => console.log(err))
  },[])

  // fetch facilites
  useEffect(()=> {
    fetch(ApiUrl+'/facilities')
      .then(res => res.json())
      .then(data => setFacilities(data))
      .then(()=> console.log('Facilities Fetched and Set:', facilities))
      .catch(err => console.log(err))
  },[])

  return (
    <>
      <Paper sx={{backgroundColor: '#FFDDD2', width: '80vw'}}>
        <h1 style={{textAlign: 'center', ...background, borderRadius: '6px'}}>Facilities</h1>
        <Grid container columns={100} rows={2} sx={{textAlign:'center', width: '80vw'}}>
          {facilities.map(facility => {
            return (
                <Grid key={facility.id} item xs={50} sm={25} md={20} sx={{padding: '1vh'}}>
                  <Card sx={{height: '20vh', minWidth: '15vh', width: 'auto', backgroundColor: '#EDF6F9', border: '2px solid #006D77'}}>
                    <h3 style={{marginTop: '0', ...header}}><a href={facility.url}>{facility.name}</a></h3>
                    <p>location: {facility.location}</p>
                    <p style={underline}>{facility.url}</p>
                  </Card>
                </Grid>
            )
          })}
        </Grid>
      </Paper>
    </>
  )
}

export default ResourcePage;