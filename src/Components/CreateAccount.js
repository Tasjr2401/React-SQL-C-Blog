import axios from "axios";
import React, {useState} from "react";
import ReactDom from "react-dom";
import { LocalApiUrl } from "../HelpfulFunctions/Constants";

const CreateAccount = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [checkPassword, setCheckPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    function handleUsernameChange({target}) {
        setUsername(target.value);
    }
    function handlePasswordChange({target}) {
        setPassword(target.value);
    }
    function handleFirstNameChange({target}) {
        setFirstName(target.value);
    }
    function handleLastNameChange({target}) {
        setLastName(target.value);
    }
    function handleConfirmPasswordChange({target}) {
        setCheckPassword(target.value);
    }
    function CreateAccount() {
        if(password !== checkPassword){
            alert('Passwords did not match');
        }
        if(username.length > 8 && password.length > 8 && username.match('\d') && firstName.match('\W') && lastName.match('\W')) {
            var accountInfo = {
                Username: username,
                Password: password,
                FirstName: firstName,
                LastName: lastName
            }

            axios.post(LocalApiUrl + '/LogIn/CreateUser', accountInfo).then((response) => {
                if(response.data.Success === true) {
                    window.location.pathname = '/LogIn';
                } else {
                    alert("Something went wrong on our end.");
                }
            }).catch((err) => {
                alert('An error occurred on our end.');
                console.log(err);
            });

        } else {
            alert('Your Username and Password must be at least 8 characters long. First and Last name may only contain alphabetic characters')
        }
    }
    return (
        <div>
            <form onSubmit={CreateAccount}>
                <input onChange={handleUsernameChange} placeholder="Username" type='text'/>
                <input onChange={handlePasswordChange} placeholder="Password" type='text'/>
                <input type='text' onChange={handleConfirmPasswordChange} placeholder="Confirm Password" />
                <input onChange={handleFirstNameChange} placeholder="Firstname" type='text'/>
                <input onChange={handleLastNameChange} placeholder="Lastname" type='text'/>
                <input type='submit' value='Submit'>Create Account</input>
            </form>
        </div>
    );
}