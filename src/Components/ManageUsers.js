import react, {useState} from "react";
import reactDom from "react-dom";
import { useEffect } from "react/cjs/react.production.min";

export const ManageUsers = () => {
    const [search, setSearch] = useState("");
    const [resultArray, setResultArray] = useState([]);

    function handleSearchChange({target}) {
        setSearch(target.value);
    }
    function handleUserSearch() {
        //make Axios request to endpoint that searches users based off Username or Display name and returns list
    }

    function handlePromotionRequest(userId) {
        //alert the user to confirm action and then send user id to server to set aside in waitlist table and message through inbox
        //another admin to confirm the user's promotion

    }

    function handleUserDeactivation(userId) {
        //create popup text field to ask for reason of deactivation
        //Send Axios request with userId to server to set aside in new table to be reviewed later.
    }

    let searchResultsRender;
    useEffect(() => {
        //create list to X length to be stored in variable to be rendered 
        searchResultsRender = (
            <ul>
                {resultArray.map(user => {
                    <li key={user}>
                        <img id={user.username + 'Image'} />
                        <h1>{user.username}</h1>
                        <h2>{user.displayname}</h2>
                        <h2>Current Role: {user.role}</h2>
                        <input type='button' value='Promote' onClick={handlePromotionRequest(user.id)}/>
                        <input type='button' value='Deactivate' onClick={handleUserDeactivation(user.id)} />
                    </li>
                })}
            </ul>
        );
    },[resultArray]);

    return (
        <div>
            <h1>Manage Users</h1>
            <form onSubmit={handleUserSearch}>
                <input type='text' placeholder="Search User Here..." onChange={handleSearchChange}/>
                <input type="submit" value="Search" />
            </form>
            {searchResultsRender}
        </div>
    );
}