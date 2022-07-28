import axios from "axios";
import React, {useState} from "react";
import { LocalApiUrl } from "../../HelpfulFunctions/Constants";

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
    function CreateAccount(e) {
        e.preventDefault();
        if(password !== checkPassword){
            alert('Passwords did not match');
            return;
        }
        
        if(username.length > 8 && password.length > 8 && username.match('\\d') && firstName.match('\\W') && lastName.match('\\W')) {
            alert('Your Username and Password must be at least 8 characters long. First and Last name may only contain alphabetic characters');
            return;
        }

        var accountInfo = {
            Username: username,
            Password: password,
            FirstName: firstName,
            LastName: lastName
        }

        axios.post(LocalApiUrl + '/LogIn/CreateUser', accountInfo).then((response) => {
            console.log(response);
            if(response.data.success === true) {
                window.location.pathname = '/LogIn';
            } else {
                alert("Something went wrong on our end.");
            }
        }).catch((err) => {
            alert('An error occurred on our end.');
            console.log(err);
        });
    }
    return (
        <div>
            <form onSubmit={CreateAccount}>
                <input onChange={handleUsernameChange} placeholder="Username" type='text'/>
                <br/>
                <input id="passwordElement" onChange={handlePasswordChange} placeholder="Password" type='password'/>
                {/* <button id="show" onClick={() => {
                    var e = document.getElementById('passwordElement');
                    var b = document.getElementById('hide');
                    e.type = 'text';
                    b.style = null;
                    this.style = {display: 'none'};
                }}>Show</button>
                <button id="hide" style={{display: 'none'}} onClick={() => {
                    var e = document.getElementById('passwordElement');
                    var b = document.getElementById('show');
                    e.type = 'password';
                    b.style = null;
                    this.style = {display: 'none'};
                }}>Hide</button> */}
                <br/>
                <input type='password' onChange={handleConfirmPasswordChange} placeholder="Confirm Password" />
                <br/>
                <input onChange={handleFirstNameChange} placeholder="Firstname" type='text'/>
                <br/>
                <input onChange={handleLastNameChange} placeholder="Lastname" type='text'/>
                <br/>
                <input type='submit' value='Submit' />
            </form>
        </div>
    );
}

export default CreateAccount;