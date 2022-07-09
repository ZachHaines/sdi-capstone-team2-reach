

import { Button, Paper, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const nav = useNavigate();
  return (
    <Paper sx={{margin:'5%', padding: '5%'}} elevation={10}>
      <Typography align="center" variant="h2">This is not the page you are looking for</Typography>
      <Button sx={{margin: '5%', marginLeft:'25%', marginRight: '25%', width: '50%'}} variant='contained' onClick={()=>{nav('/login')}}>Go Back to Login</Button>
    </Paper>
  )
}

export default ErrorPage;