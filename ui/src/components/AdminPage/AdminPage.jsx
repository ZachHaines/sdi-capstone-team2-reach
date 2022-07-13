import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Paper } from '@mui/material';
import { useEffect } from 'react';
import config from '../../config';
import { useContext } from 'react';
import { AppContext } from '../../AppContext';
import { useNavigate } from 'react-router-dom';
import "./AdminPage.css"
const ApiUrl = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;

const AdminPage = () => {

  const [rows, setRows] = useState([]);
  const {values } = useContext(AppContext);
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

  const getIdFromName = (name, arr) => {
    let res = 0;
    console.log(arr);
    arr.forEach((e, i)=>{
      if(e === name) {res = i + 1}
    });   
    return res;
  }

  const rowEditStopHandler = (event) => {
    let temp = {};
    
    if (event.field === 'installations_name') temp.installations_id = getIdFromName(event.value, installations);
    else if (event.field === 'locations_name') temp.locations_id = getIdFromName(event.value, locations);
    else if (event.field === 'grade') temp.grades_id = getIdFromName(event.value, grades);
    else if (event.field === 'unit') temp.units_id = getIdFromName(event.value, units);
    else if (event.field === 'roles_name') temp.roles_id = getIdFromName(event.value, roles);
    else if (event.field === 'facilities_name') temp.facilities_id = getIdFromName(event.value, facilities);
    else if (event.field === 'phone_number') {
      temp.phone_number = event.value;
    }

    const updatedMember = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(temp)
    }
    console.log(updatedMember);
    
    fetch(ApiUrl + `/members/${event.id}`, updatedMember)
    .then(res => res.json())
    .then(data=>{
      console.log(data);
    })
    .catch(err => console.log(err));
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 50, editable: false},
    { field: 'username', headerName: 'Username', width: 120, editable: false},
    { field: 'first_name', headerName: 'First Name', width: 120, editable: false},
    { field: 'last_name', headerName: 'Last Name', width: 120, editable: false},
    { field: 'unit', headerName: 'Unit', width: 75, editable: true, type: 'singleSelect', valueOptions: units},
    { field: 'grade', headerName: 'Grade', width: 75, editable: true, type: 'singleSelect', valueOptions: grades},
    { field: 'religion', headerName: 'Religious Preference', width: 150, editable: false},
    { field: 'phone_number', headerName: 'Phone #', width: 120, editable: true},
    { field: 'email_primary', headerName: 'Primary Email', width: 150, editable: false},
    { field: 'email_secondary', headerName: 'Secondary Email', width: 150, editable: false},
    { field: 'roles_name', headerName: 'Role', width: 150, editable: true, type: 'singleSelect', valueOptions: roles},
    { field: 'locations_name', headerName: 'Location', width: 150, editable: true, type: 'singleSelect', valueOptions: locations},
    { field: 'facilities_name', headerName: 'Facility', width: 150, editable: true, type: 'singleSelect', valueOptions: facilities},
    { field: 'installations_name', headerName: 'Installation', width: 150, editable: true, type: 'singleSelect', valueOptions: installations}
  ]
  return (
    <>
      <h1 style={{textAlign: 'center'}}>Admin Page</h1>
      <Paper sx={{ padding: '1%', width: '90vw', marginLeft: '1%', marginRight: '1%'}} columns={2}>
        <h2 style={{paddingLeft: '1%'}}>Saved Users</h2>
        <DataGrid sx={{height: '70vh', width: '98%', marginLeft: '1%', marginRight: '1%' }} rows={rows} columns={columns} pageSize={15} /*checkboxSelection*/ onCellEditCommit={rowEditStopHandler}/>
      </Paper>
    </>
  )
}

export default AdminPage;