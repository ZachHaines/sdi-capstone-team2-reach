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
        // cumulate concerns

        // let redsShort = 0;
        // let yellowsShort = 0;
        // let greensShort = 0;

        // let redsMid = 0;
        // let yellowsMid = 0;
        // let greensMid = 0;

        // let redsLong = 0;
        // let yellowsLong = 0;
        // let greensLong = 0;
        
        let redsSum = 0;
        let yellowsSum = 0;
        let greensSum = 0;

        // check short range date
        // check mid range date
        // check long range date

        if(element.family === 1) redsSum++;
        else if (element.family === 2) yellowsSum++;
        else if (element.family === 3) greensSum++;

        if(element.health === 1) redsSum++;
        else if (element.health === 2) yellowsSum++;
        else if (element.health === 3) greensSum++;
        
        if(element.legal === 1) redsSum++;
        else if (element.legal === 2) yellowsSum++;
        else if (element.legal === 3) greensSum++;

        if(element.social === 1) redsSum++;
        else if (element.social === 2) yellowsSum++;
        else if (element.social === 3) greensSum++;

        if(element.work === 1) redsSum++;
        else if (element.work === 2) yellowsSum++;
        else if (element.work === 3) greensSum++;

        
        if (isAlreadyInTempRows){
          console.log('duplicate message', tempRowIndex)
          tempRows[tempRowIndex].red += redsSum;
          tempRows[tempRowIndex].green += greensSum;
          tempRows[tempRowIndex].yellow += yellowsSum;

        }else{
          tempRows.push({ 
            id: element.members_id_to,
            token: element.members_id_to,
            date: element.date,
            red: redsSum,
            yellow: yellowsSum,
            green: greensSum,
            redLong: redsSum,
            yellowLong: yellowsSum,
            greenLong: greensSum, 
            redMid: redsSum,
            yellowMid: yellowsSum,
            greenMid: greensSum, 
            redShort: redsSum,
            yellowShort: yellowsSum,
            greenShort: greensSum,
            lastMHPContact: '',
            riskShort: 0,
            riskMid: 0,
            riskLong: 0,
            riskSum: 0,

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

// const concernCumulator = (surveyData) => {

// }