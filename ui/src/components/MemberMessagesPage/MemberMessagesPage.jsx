import React, { useState, useEffect, useContext } from 'react';
import { Paper, Button, Card, TextField, Typography } from '@mui/material';
import './MemberMessagesPage.css'
import config from '../../config';
import { AppContext } from '../../AppContext';
import { useNavigate } from 'react-router-dom';
const ApiUrl = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;

// blue color options: #1982FC, #1976d2
const messageStyle = {
  fromUser: {backgroundImage: 'linear-gradient(to bottom right, #4898f6, #1982FC)',  borderRadius: '8px 24px 0px 24px', textAlign:'left', color:'white', float:'right', clear: 'both', minWidth: '2%', maxWidth: '65%', marginBottom:'1%', marginLeft:'35%', marginRight:'1%',padding: '1%'},
  fromMHP: {backgroundColor: "lightgray", borderRadius: '24px 8px 24px 0px',textAlign:'left', float:'left', clear: 'both', minWidth: '2%', maxWidth: '65%', marginBottom:'1%', marginRight:'35%', marginLeft:'1%',padding: '1%'}  
};
const dateStyle = {
  fromUser: {color: 'gray', textAlign:'right',  float:'right', clear: 'both', marginRight:'1%', marginBottom: 0, padding: '1%'},
  fromMHP: {color: 'gray', textAlign:'left',  float:'left', clear: 'both', marginLeft:'1%', marginBottom: 0, padding: '1%'}  
};


const MemberMessagesPage = () => {

  let bgcolor = '#' + 'E29578'
  let background = {backgroundColor: bgcolor}
  let [mhpMessages, setMhpMessages] = useState([]); 
  const { values } = useContext(AppContext);
  const memberID = values.currentUser.id;
  
  const nav = useNavigate();
  if (!values.currentUser.role.isUser) nav('/error');

  useEffect(()=> {
    fetch(ApiUrl + `/mhpmessages/members/${memberID}`)
        .then(res=>res.json())
        .then(data=> setMhpMessages(data))
        .catch(err=>console.log(err))
  },[])
  
  
  const sendMsg = (member_from, comment) => {

    // POST config settings
    const newMsg = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
        members_id_from: member_from,
        comment: comment,
      })
    }
    // POST message to database
    fetch(`${ApiUrl}/mhpmessages`, newMsg)
    .then(res => res.json())
    fetch(ApiUrl + `/mhpmessages/members/${memberID}`)
    .then(res=>res.json())
    .then(data=> setMhpMessages(data))
    // Fetch updated messages and set state to re-render page
    .then(()=> {
      fetch(ApiUrl + `/mhpmessages/members/${memberID}`)
      .then(res=>res.json())
      .then(data=> setMhpMessages(data))
      .then(()=> document.getElementById('message').value = '')
      .catch(err=>console.log(err))
    })
  }


  return (
    <>
      <Paper elevation={3} sx={{width: '100%', marginLeft: '0%', marginRight: '0%', paddingBottom: '2vw', marginBottom: '5vw', borderRadius: '6px'}}>
        {/* Header */}
        <h1 style={{textAlign: 'center', ...background, borderRadius: '6px'}}>Messages With Mental Health Provider</h1>
        {/* Chat Message Box */}
        <Card elevation={5} sx={{margin:'1%', textAlign:'center', padding:'1%'}}>
            <span id="closeModal"> 
              { `New Message` }
            </span><div/>
            <TextField id='message' rows="12" placeholder='Type your message here...' fullWidth /><div/>
            <Button className='submit' onClick={() => {sendMsg(memberID, document.getElementById('message').value)}}>Submit</Button>
          </Card>

        {/* Display Messages in Descending Chronological Order (Earliest to Latest */}
        <Paper id='myModal'>
          <div>
            {mhpMessages.map((message) => {
              let sendDate = new Date (message.date);
              return (
                <div key={message.id}>
                  <p style={ memberID === message.members_id_to ? dateStyle.fromUser : dateStyle.fromMHP  }>
                    {sendDate.toLocaleString()}
                  </p>
                  <Typography style={ memberID === message.members_id_to ? messageStyle.fromUser : messageStyle.fromMHP } >
                    {`${message.comment}`}
                  </Typography>
                </div>
              )
            })}
            {/* If there are no messages to display, render no messages instead of end of messages */}
            <h3 style={{textAlign:'center', clear:'both'}}>End of Messages...</h3>
          </div>
        </Paper>
      </Paper>
    </>
  )
}

export default MemberMessagesPage;
