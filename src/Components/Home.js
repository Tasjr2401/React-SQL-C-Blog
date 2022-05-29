import axios from "axios";
import React, { useEffect, useState } from "react";
import {LocalApiUrl} from "../HelpfulFunctions/Constants";
import {RetrieveCookie, DeleteCookie} from "../HelpfulFunctions/CookieHelper";

const Home = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [user, setUser] = useState(false);

    function handleChange({target}) {
        setMessage(target.value);
    }
    //Eventually this will be in a component of its own
    function GotoLogin() {
        document.cookie = 'TempPage=/;path=/';
        window.location.pathname = '/LogIn';
    }
    function handleLogOut() {
        DeleteCookie('token', '/');
        setUser(false);
    }

    useEffect(() => {
        let token = RetrieveCookie('token');
        axios.get(LocalApiUrl + '/LogIn/UserInfo', 
        {headers: {
            'Authorization': 'Bearer ' + token
        }}
        ).then((response) => {
            setName(response.data.name);
            setUser(true);
        }).catch((er) => {
            setName('Guest');
            console.log(er);
        });
    }, [user]);
    
    let nameHeading;
    if(user === true) {
        nameHeading = (
            <div>
                <h1>{name}</h1>
                <button onClick={handleLogOut}>Log Out</button>
            </div>
        );
    }
    else
        nameHeading = <h1 onClick={GotoLogin}>Guest</h1>;
    
    return (
        <div>
            {nameHeading}
            <input type="text" value={message} onChange={handleChange} />
            <h2>{message}</h2>   
        </div>
    );
}

export default Home;