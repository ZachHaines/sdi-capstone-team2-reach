import React from 'react'
import { /*TextField, Stack,*/ Paper, Grid /*Button*/ } from '@mui/material';

const ResourcePage = () => {
  let bgcolor = '#' + 'EBC3DB'
  let background = {backgroundColor: bgcolor}
  let underline = {textDecoration: 'underline'}

  return (
    <>
      <Paper elevation={3} sx={{width: '70%', marginLeft: '15%', marginRight: '15%', paddingBottom: '2vw', marginBottom: '5vw', borderRadius: '6px'}}>
        <h1 style={{textAlign: 'center', ...background, borderRadius: '6px'}}>Resources</h1>
        <Grid container columns={3} rows={2} sx={{textAlign:'center'}}>
          <Grid item xs={1}>
            <h3 style={background}>Facility 1</h3>
            <p>location</p>
            <p>phone number</p>
            <p>email</p>
            <p style={underline}>url</p>
          </Grid>
          <Grid item xs={1}>
            <h3 style={background}>Facility 2</h3>
            <p>location</p>
            <p>phone number</p>
            <p>email</p>
            <p style={underline}>url</p>
          </Grid>
          <Grid item xs={1}>
          <h3 style={background}>Facility 3</h3>
            <p>location</p>
            <p>phone number</p>
            <p>email</p>
            <p style={underline}>url</p>
          </Grid>
          <Grid item xs={1}>
            <h3 style={background}>Facility 4</h3>
            <p>location</p>
            <p>phone number</p>
            <p>email</p>
            <p style={underline}>url</p>
          </Grid>
          <Grid item xs={1}>
            <h3 style={background}>Facility 5</h3>
            <p>location</p>
            <p>phone number</p>
            <p>email</p>
            <p style={underline}>url</p>
          </Grid>
          <Grid item xs={1}>
            <h3 style={background}>Facility 6</h3>
            <p>location</p>
            <p>phone number</p>
            <p>email</p>
            <p style={underline}>url</p>
          </Grid>
        </Grid>
      </Paper>
    </>
  )
}

export default ResourcePage;