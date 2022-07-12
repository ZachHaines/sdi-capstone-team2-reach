import React, { useState } from 'react';
import { Paper, Button, Card, TextField } from '@mui/material';
import './messages.css'
import config from '../../config';
import { useContext, useEffect } from 'react';
import { AppContext } from '../../AppContext';
// import { useNavigate } from 'react-router-dom';
const ApiUrl = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;
const messageStyle = {
  fromMember: {backgroundColor: "#1976d2", textAlign:'right', marginBottom:'1%', marginLeft:'35%', marginRight:'1%',padding: '1%'},
  toProvider: {backgroundColor: "lightgray", textAlign:'left', marginBottom:'1%', marginRight:'35%', marginLeft:'1%',padding: '1%'}  
};


const MemberMessagesPage = () => {
  console.log(messageStyle);
  let bgcolor = '#' + '80A1D4'
  let background = {backgroundColor: bgcolor}
  // let [isEditing, setIsEditing] = useState(false);
  let [messaging, setMessaging] = useState(false);
  
   
  // let [surveyMessages, setSurveyMessages] = useState([]);
  let [mhpMessages, setMhpMessages] = useState([]); 
  const { values } = useContext(AppContext);
  
  // const nav = useNavigate();

  console.log('values:', values.currentUser.role.isUser)

  // if (!values.currentUser.role.isUser) nav('/error');

  useEffect(()=> {
    fetch(ApiUrl + `/mhpmessages/members/${values.currentUser.id}`)
    .then(res=>res.json())
    .then(data=>{
      console.log('Fetch Member Messages:', data) 
      setMhpMessages(data);
      setMessaging(!messaging)
    })
    .catch(err=>console.log(err))
  }, [])
  
  // const submit = () => {
  //   setIsEditing(!isEditing)
  // }

  const sendMsg = (/*member_to, member_from, comment*/) => {
    setTimeout(() => {
      setMessaging(!messaging)
    }, 750)

    // console.log(member_to, member_from, comment)
    // const newMsg = {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json;charset=utf-8'
    //   },
    //   body: JSON.stringify({
    //     members_id_to: member_to,
    //     members_id_from: member_from,
    //     comment: comment,
    //   })
    // }
  }


  return (
    <>
      <Paper elevation={3} sx={{width: '100%', marginLeft: '0%', marginRight: '0%', paddingBottom: '2vw', marginBottom: '5vw', borderRadius: '6px'}}>
        <h1 style={{textAlign: 'center', ...background, borderRadius: '6px'}}>Messages to Mental Health Provider</h1>
        <Paper id='myModal'>
          <Card elevation={5} sx={{margin:'1%', textAlign:'center', padding:'1%'}}>
            <span id="closeModal" onClick={() => {setMessaging(!messaging)}}>New Message to MHP:</span><div/>
            <TextField id='message' rows="12" placeholder='Type your message here...' fullWidth /><div/>
            <Button className='submit' onClick={() => {sendMsg(null, values.currentUser.id, document.getElementById('message').value)}}>Submit</Button>
          </Card>

          {mhpMessages.map((message) => {
            return (
              // check if element id === message id
              <Card key={message.id} sx={ values.currentUser.id === message.members_id_from ? messageStyle.fromMember : messageStyle.toProvider}>
                <p>{`${message.date}`}</p>
                <p>{`${message.comment}`}</p>
              </Card>
            )
          })}
        </Paper>
      </Paper>
    </>
  )
}

export default MemberMessagesPage;

