import axios from "axios";
import React, { useEffect, useState } from "react";
import {LocalApiUrl} from "../HelpfulFunctions/Constants";

function Home() {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    function handleChange({target}) {
        setMessage(target.value);
    }
    //Eventually this will be in a component of its own
    function GotoLogin() {
        document.cookie = 'TempPage=/Home;path=/';
        window.location.pathname = '/LogIn';
    }
    useEffect(() => {
        axios.get(LocalApiUrl + '/LogIn/UserInfo').then((response) => {
            setName(response.data.name);
        }).catch((er) => {
            setName('Guest');
            console.log(er);
        });
    }, []);
    
    return (
        <div>
            <h1 onClick={GotoLogin}>{name}</h1>
            <input type="text" value={message} onChange={handleChange} />
            <h2>{message}</h2>   
        </div>
    );
}

export default Home;