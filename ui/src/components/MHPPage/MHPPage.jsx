import React, { useState } from 'react';
import { Paper, Button, Card, TextField, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { shadows } from '@mui/system';
import './MHP.css';
import styled from 'styled-components';
import config from '../../config';
import { useContext, useEffect } from 'react';
import { AppContext } from '../../AppContext';
import { useNavigate } from 'react-router-dom';
const ApiUrl = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;

// blue color options: #1982FC, #1976d2
const messageStyle = {
  fromMHP: {backgroundImage: 'linear-gradient(to bottom right, #006D77, #83C5BE)',  boxShadow: '8px 8px 24px 4px gray', borderRadius: '8px 24px 0px 24px', textAlign:'left', color:'white', float:'right', clear: 'both', minWidth: '2%', maxWidth: '65%', marginBottom:'1%', marginLeft:'35%', marginRight:'1%',padding: '1%'},
  fromUser: {backgroundImage: 'linear-gradient(to bottom right, #FFDDD2, #E29578)', boxShadow: '-8px 8px 24px 4px gray', borderRadius: '24px 8px 24px 0px',textAlign:'left', float:'left', clear: 'both', minWidth: '2%', maxWidth: '65%', marginBottom:'1%', marginRight:'35%', marginLeft:'1%',padding: '1%'}  
};
const dateStyle = {
  fromMHP: {color: 'gray', textAlign:'right',  float:'right', clear: 'both', marginRight:'3%', marginBottom: 0, padding: '1%'},
  fromUser: {color: 'gray', textAlign:'left',  float:'left', clear: 'both', marginLeft:'3%', marginBottom: 0, padding: '1%'}  
};


const MHPPage = () => {

  // let bgcolor = '#' + '80A1D4' // original
  let bgcolor = '#' + '006D77'
  let background = {backgroundColor: bgcolor}
  let [messaging, setMessaging] = useState(false);
  let [userTo, setUserTo] = useState(0);
  let [singleSelectUser, setSingleSelectUser] = useState(0);
  let [rows, setRows] = useState([]); 
  // let [surveyMessages, setSurveyMessages] = useState([]);
  let [mhpMessages, setMhpMessages] = useState([]); 
  const { values } = useContext(AppContext);
  
  const nav = useNavigate();

  if(!values.currentUser.role.isMHP) nav('/error');
  if (!values.currentUser.role.isUser) nav('/error');
  
  useEffect( async ()=>{
    fetch(ApiUrl + `/members/mhp`)
    .then(res=>res.json())
    .then(surveyData=>{
      console.log(surveyData)
      setRows(surveyData)
    })
  }, [])

  const sendMsg = (member_to, member_from, comment) => {
    setTimeout(() => {
      setMessaging(!!messaging)
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
    .then(()=> {
      fetch(ApiUrl + `/mhpmessages/members/${userTo}`)
      .then(res=>res.json())
      .then(data=> setMhpMessages(data))
      .then(()=> document.getElementById('message').value = '')
      .catch(err=>console.log(err))
    })
  }

  const columns = [
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
  
  const rowDoubleClickHandler = (event) => {
    console.log('EVENT:', event);
    if  (event.row.id === userTo) {
      setMessaging(!messaging)
    } else {
      fetch(ApiUrl + `/mhpmessages/members/${event.row.id}`)
      .then(res=>res.json())
      .then(data=> {
          setMessaging(true)
          setMhpMessages(data);
          setUserTo(event.row.id);
        })
      .catch(err=>console.log(err))
    }    
  }

  const rowSingleClickHandler = (event) => {
    setSingleSelectUser(event.row.id)
  }

  const messageButtonHandler = () => {
    if (singleSelectUser === userTo) {
      setMessaging(!messaging)
    } else {
      fetch(ApiUrl + `/mhpmessages/members/${singleSelectUser}`)
      .then(res=>res.json())
      .then(data=> {
        setMhpMessages(data);
        setUserTo(singleSelectUser);
        setMessaging(true)
      })
      .catch(err=>console.log(err))    

    }
  }

  return (
    <StyleBackground>
      <Paper elevation={3} sx={{ width: '100%', marginLeft: '0%', marginRight: '0%', paddingBottom: '2vw', marginBottom: '5vw', borderRadius: '6px'}}>
        <h1 style={{fontFamily: 'Roboto, Helvetica, Arial, sans-serif', color: '#EDF6F9', textShadow: '4px 4px 8px gray', textAlign: 'center', ...background, borderRadius: '6px'}}>Mental Health Provider</h1>
      
          <DataGrid sx={{boxShadow: 20, height: '70vh', width: '98%', marginLeft: '1%', marginRight: '1%' }} 
            rows={rows} columns={columns}
            pageSize={15}
            rowsPerPageOptions={[15]}
            onRowClick={rowSingleClickHandler}
            onRowDoubleClick={rowDoubleClickHandler}/>
          <div style={{textAlign: 'center'}}>
            <Button sx={{boxShadow: 20, border:'black', color: '#E29578', margin: '16px'}} onClick={messageButtonHandler}>
              { messaging ? 'Cancel' : 'Message User' }
            </Button>
          </div>
        {messaging ?
        // gradient from light green center to calming off-white #FEFCF2
        <Paper id='myModal' sx={{backgroundImage:'radial-gradient(#EDF6F9, #EDF6F9, #FFFFFF )'}}> 
        
          <Card elevation={5} sx={{boxShadow: 20, margin:'1%', textAlign:'center', padding:'1%'}}>
            <span id="closeModal" onClick={() => {setMessaging(!messaging)}}> 
              <Typography variant='h5'>
                { (userTo === 0) ? `No user selected...` : `Send New Message to Member # ${userTo}` }
              </Typography>
            </span><div/>
            <TextField id='message' rows="12" placeholder='Type your message here...' fullWidth /><div/>
            <Button sx={{color: '#E29578'}} className='submit' onClick={() => {sendMsg(userTo, values.currentUser.id, document.getElementById('message').value)}}>Submit</Button>
          </Card>
          <div>
            {mhpMessages.map((message) => {
              let sendDate = new Date (message.date);
              return (
                <div key={message.id}>
                  <p style={ userTo === message.members_id_to ? dateStyle.fromMHP : dateStyle.fromUser }>
                    {sendDate.toLocaleString()}
                  </p>
                  <Typography style={ userTo === message.members_id_to ? messageStyle.fromMHP : messageStyle.fromUser} >
                    {`${message.comment}`}
                  </Typography>
                </div>
              )
            })}
            <h3 style={{textAlign:'center', clear:'both'}}>End of Messages...</h3>
          </div>
        </Paper>
         : <></>
        }
      </Paper>
    </StyleBackground>
  )
}

export default MHPPage;

/* ---------- Styled Components ---------- */

const StyleBackground = styled.div`
background-color: 'green';
`;

// const StyleBackground = styled.div`
// width: 200px;
// margin: 24px 48px 24px;
// border-radius: 1rem;
// transition: all 0.75s ease;
// &:hover {
//   // border-style: solid;
//   // border-size: flex;
//   // border-width: 7px;
//   // border-color: yellow;
//   transform: matrix(1.2, 0, 0, 1.2, -16, 32)
// }
// `;