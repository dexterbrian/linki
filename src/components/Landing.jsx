import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Landing() {
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [username, setUsername] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    // useEffect(() => {
    //     // This effect will run when apiData changes.
    //     if (apiData) {
    //     console.log('API data received:', apiData);
    //     }
    // }, [apiData]);

    async function loginUser() {
        await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username
            })
        })
        .then(response => response.json())
        .then(data => {
            if (!data.error) {
                setLoggedInUser(data);
                navigate('/home', {state: data});
            } else {
                setErrorMessage(data.error);
            }
            console.log('My response: ', data);
        })
        .catch(error => {
            setErrorMessage(error);
            console.error('Error:', error);
        });

        // if (!response.ok) {
        //     throw new Error(`HTTP error! Status: ${response.status}`);
        // }

        // const data = await response.json();

        // if (data) {
        //     setLoggedInUser(data);
        //     // history.push('/home');
        // }
        // console.log('My response: ', data);
    }

    async function createUser() {
        const response = await fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: '123456'
            })
        })
        .then(response => response.json())
        .then(data => {
            loginUser();
            console.log('My response: ', data);
        })
        .catch(error => {
            setErrorMessage(error);
            console.error('Error:', error);
        });

        // if (!response.ok) {
        //     throw new Error(`HTTP error! Status: ${response.status}`);
        // }

        // const data = await response.json();
        // if (data.username) {
        //     loginUser();
        //     console.log('My response: ', data);
        // } else {
        //     setErrorMessage(data.error);
        //     console.error('Error:', data.error);
        // }
    };

    return (
        <>
            <h1 className="home-app-name">Linki</h1>
            <h3>Create a Landing Page to Efficiently Share Many links from a Single Page. 🚀</h3>
            <div className="login-container">
                <input type="text" placeholder="Enter your Username" value={username} onChange={(e) => {
                    setUsername(e.target.value);
                }}/>
                {/* <input type="password" placeholder="Enter your Password" /> */}
                <div className="login-buttons">
                    <div className="button-container">
                        <button className="primary-button" onClick={createUser}>Sign Up</button>
                    </div>
                    <div className="button-container"><button className="secondary-button" onClick={loginUser}>Login</button></div>
                </div>
                <p className="error-messages">{errorMessage}</p>
            </div>
        </>
    )
}

export default Landing;