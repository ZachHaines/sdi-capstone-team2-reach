import React, { useEffect, useState } from 'react'
import { Paper, Grid } from '@mui/material';
import config from '../../config';

const ResourcePage = () => {
  let bgcolor = '#' + '83C5BE'
  let background = {backgroundColor: bgcolor}
  let underline = {textDecoration: 'underline'}
  let header = {height: '5vh', backgroundColor: bgcolor}
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
      <div style={{backgroundColor: '#FFDDD2', position: 'absolute', overflow: 'auto', top: '43px', bottom: '0', left: '70px', pxright: '0'}}>
        <h1 style={{textAlign: 'center', ...background, borderRadius: '6px'}}>Facilities</h1>
        <Grid container columns={3} rows={2} sx={{textAlign:'center'}}>
          {facilities.map(facility => {
            return (
                <Grid key={facility.id} item xs={1} sx={{padding: '2vh'}}>
                  <Paper sx={{height: '20vh', backgroundColor: '#EDF6F9'}}>
                    <h3 style={header}><a href={facility.url}>{facility.name}</a></h3>
                    <p>location: {facility.location}</p>
                    <p style={underline}>{facility.url}</p>
                  </Paper>
                </Grid>
            )
          })}
        </Grid>
      </div>
    </>
  )
}

export default ResourcePage;