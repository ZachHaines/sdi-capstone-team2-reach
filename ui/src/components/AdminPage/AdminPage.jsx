import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Paper, /*Grid, TextField, Select, Button*/ } from '@mui/material';
import { useEffect } from 'react';
import config from '../../config';
import { useContext } from 'react';
import { AppContext } from '../../AppContext';
import { useNavigate } from 'react-router-dom';
const ApiUrl = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;

const AdminPage = () => {
  const [rows, setRows] = useState([]);
  const {values, /*setters*/} = useContext(AppContext);
  const nav = useNavigate();
  const [units, setUnits] = useState([])
  const [grades, setGrades] = useState([])
  const [roles, setRoles] = useState([])
  const [locations, setLocations] = useState([])
  const [facilities, setFacilities] = useState([])
  const [installations, setInstallations] = useState([])

  // check if page is not yours
  if (!values.currentUser.role.isAdmin) nav('/error');
  if (!values.currentUser.role.isUser) nav('/error');

  useEffect(()=>{
    fetch(ApiUrl+'/members/joinadmin')
    .then(res=>res.json())
    .then(data=>{
     setRows(data)
    })
    fetch(ApiUrl+'/units')
    .then(res=>res.json())
    .then(data => {
      setUnits(data.map(item => {return (item.name)}))
      console.log(units)
    })
    fetch(ApiUrl+'/grades')
    .then(res=>res.json())
    .then(data => {
      setGrades(data.map(item => {return (item.grade)}))
    })
    fetch(ApiUrl+'/roles')
    .then(res=>res.json())
    .then(data => {
      setRoles(data.map(item => {return (item.name)}))
    })
    fetch(ApiUrl+'/locations')
    .then(res=>res.json())
    .then(data => {
      setLocations(data.map(item => {return (item.name)}))
    })
    fetch(ApiUrl+'/facilities')
    .then(res=>res.json())
    .then(data => {
      setFacilities(data.map(item => {return (item.name)}))
    })
    fetch(ApiUrl+'/installations')
    .then(res=>res.json())
    .then(data => {
      setInstallations(data.map(item => {return (item.name)}))
    })
  },[])

  const rowEditStopHandler = (event) => {
    let temp = event.row

    if(event.field === undefined) return;
    if (temp[event.field] === undefined) return;
    temp[event.field] = event.value

    const updatedMember = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(temp)
    }
    fetch(ApiUrl + `/members/${event.row.id}`, updatedMember)
    .then(res => res.json())
    .then(data=>{
      console.log(data);
    })
    .catch(err => console.log(err));
  }
  //unit, grade, phone_number
  const columns = [
    { field: 'id', headerName: 'ID', width: 50, editable: false,},
    { field: 'username', headerName: 'Username', width: 120, editable: false },
    { field: 'first_name', headerName: 'First Name', width: 120, editable: false },
    { field: 'last_name', headerName: 'Last Name', width: 120, editable: false  },
    { field: 'unit', headerName: 'Unit', width: 75, editable: true, type: 'singleSelect', valueOptions: units},
    { field: 'grade', headerName: 'Grade', width: 75, editable: true, type: 'singleSelect', valueOptions: grades},
    { field: 'religion', headerName: 'Religious Preference', width: 150, editable: false },
    { field: 'phone_number', headerName: 'Phone #', width: 120, editable: true },
    { field: 'email_primary', headerName: 'Primary Email', width: 150, editable: false },
    { field: 'email_secondary', headerName: 'Secondary Email', width: 150, editable: false },
    { field: 'roles_name', headerName: 'Role', width: 150, editable: true, type: 'singleSelect', valueOptions: roles},
    { field: 'locations_name', headerName: 'Location', width: 150, editable: true, type: 'singleSelect', valueOptions: locations},
    { field: 'facilities_name', headerName: 'Facility', width: 150, editable: true, type: 'singleSelect', valueOptions: facilities},
    { field: 'installations_name', headerName: 'Installation', width: 150, editable: true, type: 'singleSelect', valueOptions: installations}
  ]
  return (
    <>
      <h1 style={{textAlign: 'center'}}>Admin Page</h1>
      <Paper sx={{ padding: '1%'}} columns={2}>
        <h2 style={{paddingLeft: '1%'}}>Saved Users</h2>
        <DataGrid sx={{height: '70vh', width: '98%', marginLeft: '1%', marginRight: '1%' }} rows={rows} columns={columns} pageSize={15} /*checkboxSelection*/ onCellEditCommit={rowEditStopHandler}/>
      </Paper>
    </>
  )
}

export default AdminPage;

{/* <Paper sx={{ padding: '1%', marginBottom: '1%'}}>
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
</Paper> */}
