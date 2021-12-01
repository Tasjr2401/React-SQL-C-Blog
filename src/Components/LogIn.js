import React from "react";
import { useState } from "react";
import axios from "axios";

const LogIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [response, setResponse] = useState('');
    function handleUsernameChange({target}) {
        setUsername(target.value);
        console.log(target.value);
    }
    function handlePasswordChange({target}) {
        setPassword(target.value);
        console.log(target.value);
    }
    function handleLogIn() {
        console.log(`${username}, ${password}`);
        axios.get('https://localhost:44389/LogIn/Test').then((response) => {
            setResponse(response.data);
        });
    }
    return (
        <div>
            <input onChange={handleUsernameChange} placeholder="Username" type="text" value={username} />
            <input onChange={handlePasswordChange} placeholder="Password" type="text" value={password} />
            <button onClick={handleLogIn} >Log In</button>
            <br />
            <h1>{response}</h1>
        </div>
     );
}

export default LogIn;