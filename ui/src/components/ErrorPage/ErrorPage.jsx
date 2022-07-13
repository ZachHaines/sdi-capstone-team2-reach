import { Button, Paper, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const nav = useNavigate();
  // automatically redirects user back to login page after 3 seconds
  setTimeout(()=> {
    nav('/login')
    console.log('Redirecting back to login page...')
  },"1000")
  return (
    <Paper sx={{margin:'5%', padding: '5%'}} elevation={10}>
      <Typography align="center" variant="h2">This is not the page you are looking for</Typography>
      <Button sx={{margin: '5%', marginLeft:'25%', marginRight: '25%', width: '50%'}} variant='contained' onClick={()=>{nav('/login')}}>Go Back to Login</Button>
    </Paper>
  )
}

export default ErrorPage;