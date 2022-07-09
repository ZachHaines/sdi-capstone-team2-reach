


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
    role: {}
  });

  useEffect(()=>{
    fetch(ApiUrl+`/roles`)
    .then(res=>res.json())
    .then(data=>{
      setRoles(data)
      console.log(data)
      console.log(roles)
      setCurrentUser({...currentUser, role: data[0]})
    })
  }, [])
  /* EQUIPMENT VALUES AND TYPES
    table.increments();
    table.string('name', 256) // specifies type, field name, and limit (i.e. character limit)
    table.integer('subcategory_id');    
    table.foreign('subcategory_id').references('subcategory.id');
    table.string('caliber', 128);
    table.integer('max_range_meters');
    table.boolean('armored');
    table.string('country', 256);
    table.string('image', 1024);
*/




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