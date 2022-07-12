import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import config from '../../config';
import { AppContext } from '../../AppContext';
import { IconButton, Badge, Card, CardContent } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MemberMessagesPage from '../MemberMessagesPage/MemberMessagesPage';
const ApiUrl = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;

export default function NotificationDialogButton() {
  const [open, setOpen] = React.useState(false);
  const [numNotifications, setNumNotifications] = React.useState(0);
  const {values} = React.useContext(AppContext);
  const [mhpmessages, setMhpmessages] = React.useState([]);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  React.useEffect(()=>{
    fetch(ApiUrl+`/mhpmessages/members/${values.currentUser.id}`)
    .then(res=>res.json())
    .then(data => {
      let temp = data.filter((e) => {
        return e.members_id_to === values.currentUser.id;
      })
      console.log('mhp messages fetched ', data)
      console.log('mhp messages filtered ', temp)
      setMhpmessages(temp);
      setNumNotifications(temp.length)

    })
  },[])

  if(mhpmessages.length <= 0)
  {
    return (
      <>
        <IconButton color="inherit" onClick={() => {handleClickOpen()}}>
          <Badge badgeContent={numNotifications} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>MHP Notifications</DialogTitle>
          <DialogContent>
            <DialogContentText>
              No Received Messages
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }else {
    return (
      <>
        <IconButton color="inherit" onClick={() => {handleClickOpen()}}>
          <Badge badgeContent={numNotifications} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>MHP Notifications</DialogTitle>
          <DialogContent>
            {/* {
              mhpmessages.map((e, i)=>{
                return (
                <Card key={e.id} sx={{marginBottom: '2%', backgroundColor: '#25383C'}}>
                  <CardContent sx={{color: 'white'}}  onClick={()=>{
                      const init = {
                        method: 'DELETE',
                        headers: {
                          'Content-Type': 'application/json;charset=utf-8'
                        }
                      }
                      fetch(ApiUrl + `/mhpmessages/${e.id}`, init)
                      .then(res=>res.json())
                      .then(data => {
                        console.log(data);
                        console.log('mhp messages fetched ', data)
                        let front = mhpmessages.slice(0, i);
                        let end = mhpmessages.slice(i + 1, mhpmessages.length);
                        setMhpmessages(front.concat(end));
                        setNumNotifications(numNotifications-1)
                      })
                    }}>
                    {e.comment}
                    <br></br>
                  </CardContent>
                </Card>
                )
              })
            } */}
            <MemberMessagesPage />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }

}