import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Username from "./Username";
import EditLinki from "./EditLinki";
import { useNavigate } from "react-router-dom";
import { nanoid } from 'nanoid';

function Home() {
    const location = useLocation();
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');
    const [username, setUsername] = useState(location.state.username);
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [linkis, setLinkis] = useState(
        [{
            id: nanoid(),
            title: '',
            url: ''
        }]
    );

    useEffect(() => {
        fetch(`http://localhost:3000/users/${username}`, {
            method: 'GET'
        })
          .then((response) => response.json())
          .then((data) => setLinkis(data.links));
      }, []
    );

    function addAnotherLink() {

        setLinkis([...linkis, {
            id: nanoid(),
            title: '',
            url: ''
        }]);
        
        console.log('Adding another link', linkis.length);
    }

    async function saveLinks() {
        console.log('Saving all links');

        await fetch('http://localhost:3000/links', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                title: title,
                url: url
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                setErrorMessage(data.error);
            }
            console.log('My response: ', data);
        })
        .catch(error => {
            setErrorMessage(error);
            console.error('Error:', error);
        });
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

            {
                linkis.length === 1 ? (
                    <EditLinki url={url} setUrl={setUrl} title={title} setTitle={setTitle}/>
                ) : (
                    linkis.map((linki) => (
                        <EditLinki key={linki.id} url={linki.url} setUrl={setUrl} title={linki.title} setTitle={setTitle}/>
                    ))
                )
            }

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