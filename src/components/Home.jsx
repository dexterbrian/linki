import { useLocation } from "react-router-dom";
import { useState } from "react";

function Home() {
    const location = useLocation();
    const [linkTitle, setLinkTitle] = useState('');
    const [link, setLink] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [username, setUsername] = useState(location.username);

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

            <div className="username-container">
                <input type="text" value={username} onChange={(e) => {
                    setUsername(e.target.value);
                }}/>
            </div>
            <div className="button-container">
                <button className="secondary-button" onClick={addAnotherLink}>Copy Your Linki</button>
            </div>

            <div className="linki-container">
                <input type="text" placeholder="Enter your Link" value={linkTitle} onChange={(e) => {
                    setLinkTitle(e.target.value);
                }}/>
                <input type="text" placeholder="Enter a Title for your Link" value={link} onChange={(e) => {
                    setLink(e.target.value);
                }}/>
            </div>

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