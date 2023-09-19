import { useLocation } from "react-router-dom";
import { useState } from "react";
import Username from "./Username";
import Linki from "./Linki";

function Home() {
    const location = useLocation();
    const [errorMessage, setErrorMessage] = useState('');
    const [username, setUsername] = useState(location.state.username);

    function addAnotherLink() {
        console.log('Adding another link');
    }

    function saveLinks() {
        console.log('Saving all links');
    }

    function logOutUser() {
        console.log('Logging out the user');
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