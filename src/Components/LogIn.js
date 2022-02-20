import React from "react";
import { useState } from "react";
import axios from "axios";
import { RetrieveCookie } from '../HelpfulFunctions/CookieHelper';
import { LocalApiUrl } from "../HelpfulFunctions/Constants";

const LogIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [response, setResponse] = useState('');
    const [trueName, setTrueName] = useState('');
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
        const dataToSend = {
            Username: username,
            Password: password
        }
        axios.post(LocalApiUrl + '/LogIn/Validate', dataToSend).then((response) => {
            if(response.data) {
                document.cookie = `token=${response.data.token};path=/`;
                var tempPagePath = RetrieveCookie('TempPage');
                window.location.pathname = tempPagePath;
            } else {
                setResponse('Something went wrong');
            }
        }).catch((er) => {
            setResponse('Something went wrong');
        });
    }
    function handleNameCall() {
        var token = RetrieveCookie('token');
        axios.get(LocalApiUrl + '/LogIn/UserInfo', {headers: {'Authorization': `Bearer ${token}`}}).then((response) => {
            setTrueName(response.data.name);
        }).catch((er) => {
            setTrueName('Could not find true name');
        });
    }
    return (
        <div>
            <input onChange={handleUsernameChange} placeholder="Username" type="text" value={username} />
            <input onChange={handlePasswordChange} placeholder="Password" type="text" value={password} />
            <button onClick={handleLogIn} >Log In</button>
            <br />
            <a href="/CreateAccount">Create Account</a>
            <br />
            <h1>{response}</h1>
            <br />
            <button onClick={handleNameCall}>What is my name?</button>
            <h1>{trueName}</h1>
        </div>
     );
}

export default LogIn;