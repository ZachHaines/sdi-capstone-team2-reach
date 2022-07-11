import React, { useEffect, useState } from 'react'
import { /*TextField, Stack,*/ Paper, Grid /*Button*/ } from '@mui/material';
import config from '../../config';
import ErrorPage from '../ErrorPage/ErrorPage';
import { Link } from "react-router-dom";

const ResourcePage = () => {
  let bgcolor = '#' + 'EBC3DB'
  let background = {backgroundColor: bgcolor}
  let underline = {textDecoration: 'underline'}
  const ApiUrl = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;
  const [resources, setResources] = useState([]);
  const [facilities, setFacilities] = useState([{id:0, name: 'Facility', locations_id: 0, url: ''}]);

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
      // .then(data => console.log('facilities:', data))
      .then(data => setFacilities(data))
      .then(()=> console.log('Facilities Fetched and Set:', facilities))
      .catch(err => console.log(err))
  },[])

  return (
    <>
      <Paper elevation={3} sx={{width: '70%', marginLeft: '15%', marginRight: '15%', paddingBottom: '2vw', marginBottom: '5vw', borderRadius: '6px'}}>
        {/* Resources */}
        <h1 style={{textAlign: 'center', ...background, borderRadius: '6px'}}>Resources</h1>
        <Grid container columns={3} rows={2} sx={{textAlign:'center'}}>
          <Grid item xs={1}>
            <h3 style={background}>Resource 1</h3>
            <p>location</p>
            <p>phone number</p>
            <p>email</p>
            <p style={underline}>url</p>
          </Grid>
          <Grid item xs={1}>
            <h3 style={background}>Resource 2</h3>
            <p>location</p>
            <p>phone number</p>
            <p>email</p>
            <p style={underline}>url</p>
          </Grid>
          <Grid item xs={1}>
            <h3 style={background}>Resource 3</h3>
            <p>location</p>
            <p>phone number</p>
            <p>email</p>
            <p style={underline}>url</p>
          </Grid>
        </Grid>

        {/* Facilities */}
        <h1 style={{textAlign: 'center', ...background, borderRadius: '6px'}}>Facilities</h1>
        <Grid container columns={3} rows={2} sx={{textAlign:'center'}}>

          {facilities.map(facility => {
            return (
              <Grid item xs={1}>
              <h3 style={background}> <Link to={facility.url}>{facility.name}</Link></h3>
              <p>location: {facility.location}</p>
              <p>phone number</p>
              <p>email</p>
              <p style={underline}>{facility.url}</p>
            </Grid>
            )
          })}
          
        </Grid>
      </Paper>
    </>
  )
}

export default ResourcePage;