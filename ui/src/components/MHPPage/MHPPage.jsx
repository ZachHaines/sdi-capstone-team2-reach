import React, { useState } from 'react';
import { Paper, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const MHPPage = () => {
  let bgcolor = '#' + '80A1D4'
  let background = {backgroundColor: bgcolor}
  let [isEditing, setIsEditing] = useState(false);

  const submit = () => {
    console.log('submit')
    setIsEditing(!isEditing)
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'token', headerName: 'Token', width: 100 },
    { field: 'date', headerName: 'Last Reach Date', width: 130 },
    { field: 'provider', headerName: 'Provider', width: 100 },
    { field: 'mtf', headerName: 'MTF', width: 100 },
    { field: 'command', headerName: 'Command', width: 130 },
    { field: 'unit', headerName: 'Unit', width: 130 },
    { field: 'status', headerName: 'Status', width: 100}
  ]

  const rows = [
    { id: 1, token: '1', date: 'Today', provider: 'Snow', mtf: 'Jon', command: 'Space Systems Command', unit: 'x', status: 'Good to go' },
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

  return (
    <>
      <Paper elevation={3} sx={{width: '90%', marginLeft: '5%', marginRight: '5%', paddingBottom: '2vw', marginBottom: '5vw', borderRadius: '6px'}}>
        <h1 style={{textAlign: 'center', ...background, borderRadius: '6px'}}>Mental Health Provider</h1>
        {isEditing ? 
        <>
          <DataGrid sx={{height: '70vh', width: '98%', marginLeft: '1%', marginRight: '1%' }} rows={rows} columns={columns} pageSize={15} rowsPerPageOptions={[2]} checkboxSelection/>
          <Button onClick={() => submit()}>Submit</Button><Button onClick={() => setIsEditing(!isEditing)}>Cancel</Button>
        </>
        :
        <>
          <DataGrid sx={{height: '70vh', width: '98%', marginLeft: '1%', marginRight: '1%' }} rows={rows} columns={columns} pageSize={15} rowsPerPageOptions={[2]} checkboxSelection/>
          <Button onClick={() => setIsEditing(!isEditing)}>Edit</Button>
        </>
        }
      
      </Paper>
    </>
  )
}

export default MHPPage;