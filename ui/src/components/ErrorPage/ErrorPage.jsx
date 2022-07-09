

import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const nav = useNavigate();
  return (
    <>
      <h2>This is not the page you are looking for</h2>
      <Button onClick={()=>{nav('/login')}}>Login</Button>
    </>
  )

}

export default ErrorPage;