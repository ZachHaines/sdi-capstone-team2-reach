import React from 'react';
import config from '../../config';

const ApiUrl = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;

const MemberList = () => {
  const [members, setMembers] = React.useState([]);
  React.useEffect(()=>{
   fetch(ApiUrl+'/members')
   .then(res=>res.json())
   .then(data=>{
    console.log(data)
    setMembers(data);
   }) 
  })
  return (
    <>
      {members.map((e)=>{
        return (
          <p key={e.username}>
            {e.username} 
          </p>
        )
      })}
    </>
  )
}

export default MemberList;