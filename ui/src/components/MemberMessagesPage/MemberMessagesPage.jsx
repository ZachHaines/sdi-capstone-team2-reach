import React, { useState, useEffect, useContext } from 'react';
import { Stack, Typography } from '@mui/material';
import './MemberMessagesPage.css'
import config from '../../config';
import { TitleTypography, primaryTheme, SurveyPaper, SurveySubmitButton, SurveyTextField, SurveyCard } from '../Shared/CustomComponents';
import { AppContext } from '../../AppContext';
import { useNavigate } from 'react-router-dom';
const ApiUrl = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;

// blue color options: #1982FC, #1976d2
const messageStyle = {
  fromMHP: {backgroundColor: '#006D77',  boxShadow: '8px 8px 24px 4px gray', borderRadius: '8px 24px 0px 24px', textAlign:'left', color:'white', float:'right', clear: 'both', minWidth: '2%', maxWidth: '65%', marginBottom:'1%', marginLeft:'35%', marginRight:'1%',padding: '1%'},
  fromUser: {backgroundColor: '#FFDDD2', boxShadow: '-8px 8px 24px 4px gray', borderRadius: '24px 8px 24px 0px',textAlign:'left', float:'left', color: 'black', clear: 'both', minWidth: '2%', maxWidth: '65%', marginBottom:'1%', marginRight:'35%', marginLeft:'1%',padding: '1%'}  
};
const dateStyle = {
  fromMHP: {color: 'gray', textAlign:'right',  float:'right', clear: 'both', marginRight:'3%', marginBottom: 0, padding: '1%'},
  fromUser: {color: 'gray', textAlign:'left',  float:'left', clear: 'both', marginLeft:'3%', marginBottom: 0, padding: '1%'}  
};


const MemberMessagesPage = () => {


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
      <SurveyPaper theme={primaryTheme} elevation={3} sx={{width: '100%', marginLeft: '0%', marginRight: '0%', paddingBottom: '2vw', marginBottom: '5vw', borderRadius: '6px'}}>
        {/* Header */}
        <TitleTypography align='center' theme={primaryTheme}>Messages With Mental Health Provider</TitleTypography>
        {/* Chat Message Box */}
        <SurveyCard theme={primaryTheme} elevation={5} sx={{margin:'1%', textAlign:'center', padding:'1%'}}>
            <Stack spacing={1}>
              <span id="closeModal"> 
                { `New Message` }
              </span><div/>
              <SurveyTextField theme={primaryTheme} id='message' rows="12" placeholder='Type your message here...' fullWidth /><div/>
              <SurveySubmitButton theme={primaryTheme} className='submit' onClick={() => {sendMsg(memberID, document.getElementById('message').value)}}>Submit</SurveySubmitButton>
            </Stack>
          </SurveyCard>

        {/* Display Messages in Descending Chronological Order (Earliest to Latest */}
        <SurveyPaper SurveyPaper theme={primaryTheme} id='myModal'>
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
        </SurveyPaper>
      </SurveyPaper>
    </>
  )
}

export default MemberMessagesPage;
