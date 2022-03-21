import React, { useState } from 'react';
import AddUser from './Components/User/AddUser';
import UserList from './Components/User/UserList';


function App() {


  const [userList, setUserList] = useState([])

  const adduserhandler = (newuser) => {
    setUserList((prevList) => {
      return [...prevList, newuser]
    })
    // userList.shift(newuser)
    console.log(userList);
  }

  return (
    <div>
      <AddUser onAdduser={adduserhandler} />
      <UserList user={userList} />
    </div>
  );
}

export default App;
