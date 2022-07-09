import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Paper, Grid, TextField, Select, Button } from '@mui/material';
import { useEffect } from 'react';
import config from '../../config';
import { useContext } from 'react';
import { AppContext } from '../../AppContext';
import { useNavigate } from 'react-router-dom';
const ApiUrl = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;

const AdminPage = () => {
  let [isEditing, setIsEditing] = useState(false);
  const [facilities, setFacilities] = useState([]);
  const [members, setMembers] = useState([]);
  const [units, setUnits] = useState([]);
  const {values, setters} = useContext(AppContext);
  const nav = useNavigate();

  // check if page is not yours
  if (!values.currentUser.role.isAdmin) nav('/error');
  if (!values.currentUser.role.isUser) nav('/error');



  console.log(values)
  console.log(setters);
  const submit = () => {
    console.log('submit')
    setIsEditing(!isEditing)
  }

  useEffect(()=>{
    let m = fetch(ApiUrl+'/members')
    .then(res=>res.json())
    .then(data=>{
     setMembers(data);
    })
    let f = fetch(ApiUrl+'/facilities')
    .then(res=>res.json())
    .then(data=>{
     setFacilities(data);
    })
    let u = fetch(ApiUrl+'/units')
    .then(res=>res.json())
    .then(data=>{
     setUnits(data);
    })
    Promise.all([m,f,u])
    .then(data => {
      console.log('something')
      console.log('prommise.all res', data)
    })
  },[])

  const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'unit', headerName: 'Unit', width: 130 },
    { field: 'command', headerName: 'Command', width: 180 },
    { field: 'provider', headerName: 'Provider', width: 100 },
    { field: 'mtf', headerName: 'MTF', width: 100 },
  ]

  const rows = [
    { id: 1, unit: 'x', command: 'Space Systems Command', provider: 'Snow', mtf: 'Jon'},
    { id: 2, token: '1', date: 'Today', provider: 'Lannister', mtf: 'Cersei', command: 'Space Systems Command', unit: 'x', status: 'Good to go' },
    { id: 3, token: '1', date: 'Today', provider: 'Lannister', mtf: 'Jaime', command: 'Space Systems Command', unit: 'x', status: 'Good to go' },
    { id: 4, token: '1', date: '07/06/2022', provider: 'Stark', mtf: 'Arya', command: 'Space Systems Command', unit: 'x', status: 'Good to go' },
    { id: 5, token: '1', date: '07/06/2022', provider: 'Snow', mtf: 'Jon', command: 'Space Systems Command', unit: 'x', status: 'Good to go' },
    { id: 6, token: '1', date: '07/06/2022', provider: 'Lannister', mtf: 'Cersei', command: 'Space Systems Command', unit: 'x', status: 'Good to go' },
    { id: 7, token: '1', date: '07/06/2022', provider: 'Lannister', mtf: 'Jaime', command: 'Space Systems Command', unit: 'x', status: 'Good to go' },
    { id: 8, token: '1', date: '07/05/2022', provider: 'Stark', mtf: 'Arya', command: 'Space Systems Command', unit: 'x', status: 'Good to go' },
    { id: 9, token: '1', date: '07/05/2022', provider: 'Snow', mtf: 'Jon', command: 'Space Systems Command', unit: 'x', status: 'Good to go' },
    { id: 10, token: '1', date: '07/05/2022', provider: 'Lannister', mtf: 'Cersei', command: 'Space Systems Command', unit: 'x', status: 'Good to go' },
    { id: 11, token: '1', date: '07/05/2022', provider: 'Lannister', mtf: 'Jaime', command: 'Space Systems Command', unit: 'x', status: 'Good to go' },
    { id: 12, token: '1', date: '07/05/2022', provider: 'Stark', mtf: 'Arya', command: 'Space Systems Command', unit: 'x', status: 'Good to go' },
    { id: 13, token: '1', date: '07/05/2022', provider: 'Snow', mtf: 'Jon', command: 'Space Systems Command', unit: 'x', status: 'Good to go' },
    { id: 14, token: '1', date: '07/04/2022', provider: 'Lannister', mtf: 'Cersei', command: 'Space Systems Command', unit: 'x', status: 'Good to go' },
    { id: 15, token: '1', date: '07/04/2022', provider: 'Lannister', mtf: 'Jaime', command: 'Space Systems Command', unit: 'x', status: 'Good to go' },
    { id: 16, token: '1', date: '07/04/2022', provider: 'Stark', mtf: 'Arya', command: 'Space Systems Command', unit: 'x', status: 'Good to go' },
  ]
  console.log('facilities ',facilities)
  console.log('units ',units)
  console.log('members ', members)
  return (
    <>
      <h1>Admin Page</h1>
      <Paper sx={{ padding: '1%', marginBottom: '1%'}}>
        <h2>Your Information</h2>
        <Grid container columns={2}>
          <Grid item xs={1}>
            Installation
          </Grid>
          <Grid item xs={1}>
            <Select>

            </Select>
            <TextField />
          </Grid>
          <Grid item xs={1}>
            Treatment Facility
          </Grid>
          <Grid item xs={1}>
            <Select>

            </Select>
            <TextField />
          </Grid>
          <Grid item xs={1}>
            Agency/Service
          </Grid>
          <Grid item xs={1}>
            <Select>

            </Select>
            <TextField />
          </Grid>
          <Grid item xs={1}>
            Command
          </Grid>
          <Grid item xs={1}>
            <Select>

            </Select>
            <TextField />
          </Grid>
          <Grid item xs={1}>
            Unit
          </Grid>
          <Grid item xs={1}>
            <Select>

            </Select>
            <TextField />
          </Grid>
        </Grid>
      </Paper>
      <Paper sx={{ padding: '1%'}} columns={2}>
        <h2>Saved Organizations</h2>
        {isEditing ? 
        <>
          <DataGrid sx={{height: '70vh', width: '98%', marginLeft: '1%', marginRight: '1%' }} rows={rows} columns={columns} pageSize={15} rowsPerPageOptions={[15, 30]} checkboxSelection/>
          <Button onClick={() => submit()}>Submit</Button><Button onClick={() => setIsEditing(!isEditing)}>Cancel</Button>
        </>
        :
        <>
          <DataGrid sx={{height: '70vh', width: '98%', marginLeft: '1%', marginRight: '1%' }} rows={rows} columns={columns} pageSize={15} rowsPerPageOptions={[15, 30]} checkboxSelection/>
          <Button onClick={() => setIsEditing(!isEditing)}>Edit</Button>
        </>
        }
      </Paper>
    </>
  )
}

export default AdminPage;