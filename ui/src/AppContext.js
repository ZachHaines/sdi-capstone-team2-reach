


import React, { useState } from "react";
import propTypes from 'prop-types';

const AppContext = React.createContext();

// Use AppProvider at the root of your project to provided to all children
const AppProvider = ({ children }) => {

  const [currentUser, setCurrentUser] = useState( {
    first_name: '',
    last_name: '',
    username: '',
    id: 0,
  });

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
    currentUser
  }

  const setters = {
    setCurrentUser
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