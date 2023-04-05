import React, {useState} from 'react';
import './App.css';

import User from './components/User';
import UserList from './components/UserList';

function App() {

  const [userList, setUserList] = useState([])

  const addUSerHandler = (uName, uAge) =>{
    setUserList((prevState)=>{
      return [...prevState,{name: uName,age:uAge,id: Math.random().toString()}]
    })
  }

  return (
    <div>
      <User onAddUser = {addUSerHandler}/>
      <UserList users={userList}/>
    </div>
  );
}

export default App;
