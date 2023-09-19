import { useLocation } from "react-router-dom";
import { useState } from "react";
import Username from "./Username";
import Linki from "./Linki";
import { useNavigate } from "react-router-dom";

function Home() {
    const location = useLocation();
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');
    const [username, setUsername] = useState(location.state.username);

    function addAnotherLink() {
        console.log('Adding another link');
    }

    function saveLinks() {
        console.log('Saving all links');
    }

    async function logOutUser() {
        console.log('Logging out the user');

        await fetch('http://localhost:3000/logout', {
            method: 'DELETE'
        })
        .then(response => {
            navigate('/');
        })
        .then(data => {
            console.log('My response: ', data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    return (
        <>
            <h1>Hey {username}! 😊</h1>
            <h3>Which link would you like to add today?</h3>

            <Username username={username} setUsername={setUsername}/>

            <Linki />

            <div className="button-container">
                <button className="secondary-button" onClick={addAnotherLink}>+ Enter Another Link</button>
            </div>

            <div className="button-container">
                <button className="secondary-button" onClick={logOutUser}>Log Out</button>
            </div>
            <div className="button-container">
                <button className="primary-button" onClick={saveLinks}>Save Links</button>
            </div>
            <p className="error-messages">{errorMessage}</p>
        </>
    );
}

export default Home;