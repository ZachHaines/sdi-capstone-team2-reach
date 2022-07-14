import React, { useEffect, useState, useContext } from 'react'
import { Paper, Grid, Card } from '@mui/material';
import config from '../../config';
import { AppContext } from '../../AppContext';

const ResourcePage = () => {
  let bgcolor = '#' + 'E29578'
  let background = {backgroundColor: bgcolor}
  let underline = {textDecoration: 'underline'}
  let header = {height: '7vh', backgroundColor: '#EDF6F9'}
  const ApiUrl = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;
  const [resources, setResources] = useState([]);
  const [facilities, setFacilities] = useState([{id:0, name: 'Facility', locations_id: 0, url: ''}]);
  const {values} = useContext(AppContext);

  useEffect(()=> {
    fetch(ApiUrl+'/resources')
    .then(res => res.json())
    .then(data=>setResources(data))
    .then(()=> console.log('Resources Fetched and Set:', resources))
    .catch(err => console.log(err))
    
    fetch(ApiUrl+`/facilities`)
      .then(res => res.json())
      .then(data => {
        
        setFacilities(data.filter((e) => {
          return e.id === values.currentUser.facilities_id
        }))
        
      })
      .then(()=> console.log('Facilities Fetched and Set:', facilities))
      .catch(err => console.log(err))
  },[])

  return (
    <>
      <Paper elevation={3} sx={{width: '80%', marginLeft: '10%', marginRight: '10%', backgroundColor: '#EDF6F9'}}>
        <h1 style={{textAlign: 'center', ...background, borderRadius: '6px'}}>Resources</h1>
        <Grid container columns={4} sx={{textAlign:'center', padding: '15px'}} spacing={2} >
          {facilities.map(facility => {
            return (
              <Grid item key={facility.id} xs={2} md={1} >
                <Card sx={{ backgroundColor: '#EDF6F9', border: '2px solid #83C5BE', height: '100%', padding: '15px'}}>
                  <h3 style={{marginTop: '0', ...header}}>{facility.name.substring(0,45)}</h3>
                  <p>location: {facility.location}</p>
                  <p style={underline}><a href={`${facility.url}About-Us/Contact-Us`} style={{textAlign: 'center', color: '#E29578'}} target='_blank' rel="noreferrer">{facility.url}</a></p>
                </Card>
              </Grid>
            )
          })}
          {resources.map(resource => {
            return (
              <Grid item key={resource.id} xs={2} md={1} >
                <Card sx={{backgroundColor: '#EDF6F9', border: '2px solid #83C5BE', height: '100%', padding: '15px'}}>
                  <h3 style={{marginTop: '0', ...header, color: 'black', paddingBottom: '5px'}}>{resource.organization.substring(0,45)}</h3>
                  <p>Phone Number: {resource.phone_number}</p>
                  {resource.email !== '' ? <p style={{textAlign: 'center', marginBottom: '0'}}><a href={`${resource.email}`} style={{textAlign: 'center', color: '#E29578'}} target='_blank' rel="noreferrer">Go to site</a></p>: <></>}
                </Card>
              </Grid>
            )
          })}
        </Grid>
      </Paper>
    </>
    //resource.email.substring(0,50)
  )
}

export default ResourcePage;