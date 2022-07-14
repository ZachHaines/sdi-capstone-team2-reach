import React, { useState } from 'react';
import { Typography, Stack } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import './MHP.css';
import styled from 'styled-components';
import config from '../../config';
import { useContext, useEffect } from 'react';
import { AppContext } from '../../AppContext';
import { useNavigate } from 'react-router-dom';
import { SurveyPaper, primaryTheme, TitleTypography, SurveySubmitButton, SurveyTextField, SurveyCard } from '../Shared/CustomComponents';
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


const MHPPage = () => {


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
      <SurveyPaper theme={primaryTheme} elevation={3} sx={{ width: '100%', marginLeft: '0%', marginRight: '0%', paddingBottom: '2vw', marginBottom: '5vw', borderRadius: '6px'}}>
        <SurveyPaper theme={primaryTheme} >
          <TitleTypography theme={primaryTheme} >Mental Health Provider</TitleTypography>
        </SurveyPaper>
            <DataGrid sx={{boxShadow: 20, height: '70vh', width: '98%', marginLeft: '1%', marginRight: '1%' }} 
              rows={rows} columns={columns}
              pageSize={15}
              rowsPerPageOptions={[15]}
              onRowClick={rowSingleClickHandler}
              onRowDoubleClick={rowDoubleClickHandler}/>

        {messaging ?
        // gradient from light green center to calming off-white #FEFCF2
        <SurveyPaper theme={primaryTheme}  id='myModal' > 
            <div style={{textAlign: 'center'}}>
              {   messaging ?  
              <SurveySubmitButton theme={primaryTheme} sx={{boxShadow: 20, border:'black', color: '#E29578', margin: '16px'}} onClick={messageButtonHandler}>
                Cancel
              </SurveySubmitButton>: <></>}
            </div>
          <SurveyCard theme={primaryTheme} elevation={5} sx={{boxShadow: 20, margin:'1%', textAlign:'center', padding:'1%'}}>
            <Stack spacing={1}>
              <span id="closeModal" onClick={() => {setMessaging(!messaging)}}> 
                <Typography variant='h5'>
                  { (userTo === 0) ? `No user selected...` : `Send New Message to Member # ${userTo}` }
                </Typography>
              </span><div/>
              <SurveyTextField id='message' rows="12" placeholder='Type your message here...' fullWidth /><div/>
              <SurveySubmitButton theme={primaryTheme} sx={{color: '#E29578'}} className='submit' onClick={() => {sendMsg(userTo, values.currentUser.id, document.getElementById('message').value)}}>Submit</SurveySubmitButton>
            </Stack>
          </SurveyCard>
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
        </SurveyPaper>
         : <></>
        }
      </SurveyPaper>
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