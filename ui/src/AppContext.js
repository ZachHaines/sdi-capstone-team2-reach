


import React, { useEffect, useState } from "react";
import propTypes from 'prop-types';


import config from './config';
const ApiUrl = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;

const AppContext = React.createContext();

// Use AppProvider at the root of your project to provided to all children
const AppProvider = ({ children }) => {

  const [roles, setRoles] = useState([])


  const [currentUser, setCurrentUser] = useState( {
    first_name: '',
    last_name: '',
    username: 'something.something',
    id: 0,
    roles_id: 0,
    role: {
      id: 0,
      isAdmin: false,
      isChaplain: false,
      isDependent: false,
      isMHP: false,
      isPCM: false,
      isSARC: false,
      isUser: false,
      name: "none",

    }
  });

  useEffect(()=>{
    fetch(ApiUrl+`/roles`)
    .then(res=>res.json())
    .then(data=>{
      setRoles(data)
      // console.log(data)
      // console.log(roles)
      setCurrentUser({...currentUser, role: data[0]})
    })
  }, [])

  const values = {
    currentUser,
    roles
  }

  const setters = {
    setCurrentUser,
    setRoles
  }

  return (
    <AppContext.Provider value={{values, setters}}>
      {children}
    </AppContext.Provider>
  );
};
AppProvider.propTypes = {
  children: propTypes.any
}

export { AppProvider, AppContext };