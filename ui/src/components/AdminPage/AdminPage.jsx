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
  const [rows, setRows] = useState([]);

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
     setRows(data)
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

  const rowEditStopHandler = (event) => {
    console.log('row stop event', event)
    console.log(rows)
    let temp = event.row
    console.log('temp before changing row', temp)
    temp[event.field] = event.value
    console.log('temp after changing row', temp)
    const newSurvey = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(temp)
    }
    fetch(ApiUrl + `/members/${event.row.id}`, newSurvey)
    .then(res => res.json())
    .then(data=>{
      console.log(data);
    })


  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 50, editable: false },
    { field: 'first_name', headerName: 'First Name', width: 120, editable: true },
    { field: 'last_name', headerName: 'Last Name', width: 120, editable: true  },
    { field: 'units_id', headerName: 'Unit ID', width: 75, editable: false  },
    { field: 'grades_id', headerName: 'Grade ID', width: 75, editable: false  },
    { field: 'religion', headerName: 'Religious Preference', width: 150, editable: true  },
    { field: 'phone_number', headerName: 'Phone #', width: 120, editable: true  },
    { field: 'email_primary', headerName: 'Primary Email', width: 150, editable: true  },
    { field: 'email_secondary', headerName: 'Secondary Email', width: 150, editable: true  },
    { field: 'roles_id', headerName: 'Permission ID', width: 150, editable: true  },


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
        <h2>Saved Users</h2>
        {isEditing ? 
        <>
          <DataGrid sx={{height: '70vh', width: '98%', marginLeft: '1%', marginRight: '1%' }} rows={rows} columns={columns} pageSize={15} rowsPerPageOptions={[15, 30]} checkboxSelection onCellEditCommit={rowEditStopHandler}/>
          <Button onClick={() => submit()}>Submit</Button><Button onClick={() => setIsEditing(!isEditing)}>Cancel</Button>
        </>
        :
        <>
          <DataGrid sx={{height: '70vh', width: '98%', marginLeft: '1%', marginRight: '1%' }} rows={rows} columns={columns} pageSize={15} rowsPerPageOptions={[15, 30]} checkboxSelection onCellEditCommit={rowEditStopHandler}/>
          <Button onClick={() => setIsEditing(!isEditing)}>Edit</Button>
        </>
        }
      </Paper>
    </>
  )
}

export default AdminPage;