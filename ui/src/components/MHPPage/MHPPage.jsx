import React, { useState } from 'react';
import { Paper, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import './MHP.css'
import config from '../../config';
import { useContext, useEffect } from 'react';
import { AppContext } from '../../AppContext';
import { useNavigate } from 'react-router-dom';
const ApiUrl = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;

const MHPPage = () => {

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
    fetch(ApiUrl + `/surveyMessages`)
    .then(res=>res.json())
    .then(surveyData=>{
      let tempRows = []
      console.log(tempRows)
      console.log('survey Data: ', surveyData)
      surveyData.forEach((element)=>{
        let isAlreadyInTempRows = false
        let tempRowIndex = 0;
        tempRows.forEach((e, i)=>{ // check if survey to line is already in rows
          if (e.id === element.members_id_to) {
            isAlreadyInTempRows = true
            tempRowIndex = i
          }
        })
        if (isAlreadyInTempRows){
          console.log('duplicate message', tempRowIndex)
          let reds = 0;
          let yellows = 0;
          let greens = 0;
          if(element.family === 1) reds++;
          else if (element.family === 2) yellows++;
          else if (element.family === 3) greens++;

          if(element.health === 1) reds++;
          else if (element.health === 2) yellows++;
          else if (element.health === 3) greens++;
          
          if(element.legal === 1) reds++;
          else if (element.legal === 2) yellows++;
          else if (element.legal === 3) greens++;

          if(element.social === 1) reds++;
          else if (element.social === 2) yellows++;
          else if (element.social === 3) greens++;

          if(element.work === 1) reds++;
          else if (element.work === 2) yellows++;
          else if (element.work === 3) greens++;
          tempRows[tempRowIndex].red += reds;
          tempRows[tempRowIndex].green += greens;
          tempRows[tempRowIndex].yellow += yellows;

        }else{
          let reds = 0;
          let yellows = 0;
          let greens = 0;
          if(element.family === 1) reds++;
          else if (element.family === 2) yellows++;
          else if (element.family === 3) greens++;

          if(element.health === 1) reds++;
          else if (element.health === 2) yellows++;
          else if (element.health === 3) greens++;
          
          if(element.legal === 1) reds++;
          else if (element.legal === 2) yellows++;
          else if (element.legal === 3) greens++;

          if(element.social === 1) reds++;
          else if (element.social === 2) yellows++;
          else if (element.social === 3) greens++;

          if(element.work === 1) reds++;
          else if (element.work === 2) yellows++;
          else if (element.work === 3) greens++;
          
          tempRows.push({ 
            id: element.members_id_to,
            token: element.members_id_to,
            date: element.date,
            red: reds,
            yellow: yellows,
            green: greens, 
          })
        }
      })
      setRows(tempRows)
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
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'token', headerName: 'Token', width: 150 },
    { field: 'date', headerName: 'Last Reach Date', width: 200 },
    { field: 'red', headerName: 'High Concern', width: 150 },
    { field: 'yellow', headerName: 'Mild Concern', width: 150 },
    { field: 'green', headerName: 'No Concern', width: 150 },
  ]
  
  const rowClickHandler = (event) => {
    setMessaging(!messaging)
    setUserTo(event.row.id);
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
          <DataGrid sx={{height: '70vh', width: '98%', marginLeft: '1%', marginRight: '1%' }} rows={rows} columns={columns} pageSize={15} rowsPerPageOptions={[15]}  onRowDoubleClick={rowClickHandler}/>
          <Button onClick={() => setIsEditing(!isEditing)}>Edit</Button><Button onClick={() => setMessaging(!messaging)}>Message</Button>
        </>
        }
        {messaging ?
        <Paper id='myModal'>
          <Paper className='Modal-content'>
            <span id="closeModal" className="Close" onClick={() => {setMessaging(!messaging)}}>{userTo} &times;</span><div/>
            <textarea id='message' rows="12" placeholder='Type your message here...'/><div/>
            <Button className='submit' onClick={() => {sendMsg(userTo, values.currentUser.id, document.getElementById('message').value)}}>Submit</Button>
          </Paper>
        </Paper> : <></>
        }
      </Paper>
    </>
  )
}

export default MHPPage;

    // await fetch(ApiUrl + `/surveymessages`)
    // .then(res=>res.json())
    // .then(surveyData=>{
    //   console.log(surveyData)
    //   setSurveyMessages(surveyData)
    //   console.log(surveyMessages)
      
    //   fetch(ApiUrl + `/members`)
    //   .then(res => res.json())
    //   .then(membersData => {
    //   //   { id: 3, token: '1', date: 'Today', provider: 'Lannister', mtf: 'Jaime', command: 'Space Systems Command', unit: 'x', status: 'Good to go' },
    //     let tempRows = []
    //     membersData.forEach(element => {
    //       // let reds = 0;
    //       // let yellows = 0;
    //       // let greens = 0;
    //       // loop through surveyMessages
    //         // if the message is about this user (element)


    //       tempRows.push({ 
    //         id: element.id,
    //         token: element.username,
    //         date: 'Today',
    //         mtf: element.facilities_id,
    //         command: 'Placeholder',
    //         unit: element.units_id,
    //         reds: 0,
    //         yellows: 0,
    //         greens: 0, 
    //       })
        
    //       })
    //     setRows(tempRows)
    //   })
    // })