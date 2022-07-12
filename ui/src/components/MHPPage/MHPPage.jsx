import React, { useState } from 'react';
import { Paper, Button, Card, TextField } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import './MHP.css'
import config from '../../config';
import { useContext, useEffect } from 'react';
import { AppContext } from '../../AppContext';
import { useNavigate } from 'react-router-dom';
const ApiUrl = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;
const messageStyle = {
  fromMHP: {backgroundColor: "#1976d2", textAlign:'right', marginBottom:'1%', marginLeft:'35%', marginRight:'1%',padding: '1%'},
  toMember: {backgroundColor: "lightgray", textAlign:'left', marginBottom:'1%', marginRight:'35%', marginLeft:'1%',padding: '1%'}  
};


const MHPPage = () => {
  console.log(messageStyle);
  let bgcolor = '#' + '80A1D4'
  let background = {backgroundColor: bgcolor}
  let [isEditing, setIsEditing] = useState(false);
  let [messaging, setMessaging] = useState(false);
  let [userTo, setUserTo] = useState(0);
  let [rows, setRows] = useState([]); 
  let [surveyMessages, setSurveyMessages] = useState([]);
  let [mhpMessages, setMhpMessages] = useState([]); 
  const {values, setters} = useContext(AppContext);
  


  const nav = useNavigate();

  if(!values.currentUser.role.isMHP) nav('/error');
  if (!values.currentUser.role.isUser) nav('/error');



  console.log(mhpMessages, setMhpMessages);

  console.log(userTo, setUserTo);
  console.log(surveyMessages, setSurveyMessages);
  console.log(values, setters);
  
  useEffect( async ()=>{
    fetch(ApiUrl + `/members/mhp`)
    .then(res=>res.json())
    .then(surveyData=>{
      console.log(surveyData)
      setRows(surveyData)
    })
    
  }, [])

  const submit = () => {
    setIsEditing(!isEditing)
  }

  const sendMsg = (member_to, member_from, comment) => {
    setTimeout(() => {
      setMessaging(!messaging)
    }, 750)
    const newMsg = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
        members_id_to: member_to,
        members_id_from: member_from,
        comment: comment,
      })
    }
    
    fetch(`${ApiUrl}/mhpmessages`, newMsg)
    .then(res => res.json())
    .then(data => {
    console.log(data);
    })
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 75 },
    { field: 'token', headerName: 'Token', width: 75 },
    { field: 'date', headerName: 'Last Reach Date', width: 200 },
    { field: 'riskShort', headerName: 'Short Term Risk', width: 125 },
    { field: 'riskMid', headerName: 'Mid Term Risk', width: 125 },
    { field: 'riskLong', headerName: 'Long Term Risk', width: 125 },
    { field: 'riskSum', headerName: 'All Term Risk', width: 125 },
    { field: 'red', headerName: 'High Concern', width: 125 },
    { field: 'yellow', headerName: 'Mild Concern', width: 125 },
    { field: 'green', headerName: 'No Concern', width: 125 },
  ]
  
  const rowClickHandler = (event) => {
    fetch(ApiUrl + `/mhpmessages/members/${event.row.id}`)
    .then(res=>res.json())
    .then(data=>{
      setMhpMessages(data);
      setMessaging(!messaging)
      setUserTo(event.row.id);
    })
    .catch(err=>console.log(err))
  }

  return (
    <>
      <Paper elevation={3} sx={{width: '100%', marginLeft: '0%', marginRight: '0%', paddingBottom: '2vw', marginBottom: '5vw', borderRadius: '6px'}}>
        <h1 style={{textAlign: 'center', ...background, borderRadius: '6px'}}>Mental Health Provider</h1>
        {isEditing ? 
        <>
          <DataGrid sx={{height: '70vh', width: '98%', marginLeft: '1%', marginRight: '1%' }} rows={rows} columns={columns} pageSize={15} rowsPerPageOptions={[15]} />
          <Button onClick={() => submit()}>Submit</Button><Button onClick={() => setIsEditing(!isEditing)}>Cancel</Button>
        </>
        :
        <>
          <DataGrid sx={{height: '70vh', width: '98%', marginLeft: '1%', marginRight: '1%' }} 
            rows={rows} columns={columns}
            pageSize={15}
            rowsPerPageOptions={[15]}
            onRowDoubleClick={rowClickHandler}/>
          <Button onClick={() => setIsEditing(!isEditing)}>Edit</Button><Button onClick={() => setMessaging(!messaging)}>Message</Button>
        </>
        }
        {messaging ?
        <Paper id='myModal'>
          <Card elevation={5} sx={{margin:'1%', textAlign:'center', padding:'1%'}}>
            <span id="closeModal" onClick={() => {setMessaging(!messaging)}}>Messages to Member # {userTo}:</span><div/>
            <TextField id='message' rows="12" placeholder='Type your message here...' fullWidth /><div/>
            <Button className='submit' onClick={() => {sendMsg(userTo, values.currentUser.id, document.getElementById('message').value)}}>Submit</Button>
          </Card>
          {mhpMessages.map((message) => {
            return (
              <Card key={message.id} sx={ userTo === message.members_id_to ? messageStyle.fromMHP : messageStyle.toMember}>
                <p>{`${message.date}`}</p>
                <p>{`${message.comment}`}</p>
              </Card>
            )
          })}
        </Paper>
         : <></>
        }
      </Paper>
    </>
  )
}

export default MHPPage;

// const concernCumulator = (surveyData) => {

// }