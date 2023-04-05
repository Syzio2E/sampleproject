import React, { useState } from "react";

const User = (props)=>{

    const [username, setUsername] = useState('')
    const [age, setAge] = useState('')

    function addUserHandler(e){
        e.preventDefault()
        if(username.trim().length===0 || age.trim().length===0){
            return;
        }
        if(setAge < 1){
            return ;
        }
        props.onAddUser(username,age)
        setUsername('')
        setAge('')
    }

    const usernameChangeHandler =(e)=>{
        setUsername(e.target.value)
    }
    const ageChangeHandler = (e)=>{
        setAge(e.target.value)
    }

    return (   
            <>
            <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" value={username} onChange={usernameChangeHandler}/>
            <label htmlFor="age">Age:</label>
            <input type="number" id="age" value={age} onChange={ageChangeHandler}/>
            <button type="submit">Add User</button>
            </form>
            
            </> 
    )
}

export default User;