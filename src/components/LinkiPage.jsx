import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function LinkiPage() {

    const { username } = useParams();
    const navigate = useNavigate();
    const [linkis, setLinkis] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/users/${username}`, {
            method: 'GET'
        })
          .then((response) => response.json())
          .then((data) => setLinkis(data.links));
      }, []
    );

    function openLandingPage() {
        navigate('/');
    }

    function openShareOptions() {
        console.log('Opening share options');
    }

    return (
        <>
            <h1>Hey there! 👋</h1>
            <h3>Check out my links below. Don't forget to share! 😊</h3>

            {
                linkis.length === 0 ? (
                    <p>Sorry! No linkis here yet. 😞</p>
                ) : (
                    linkis.map((linki) => (
                        <div key={linki.id} className="button-container">
                            <a href={linki.url} className="secondary-button" target="_blank">{linki.title}</a>
                        </div>
                    ))
                )
            }

            <div className="button-container">
                <button className="secondary-button" onClick={openShareOptions}>Share {username}'s Linki</button>
            </div>
            <div className="button-container">
                <button className="primary-button" onClick={openLandingPage}>Create Your Own Linki Page</button>
            </div>
        </>
    );
}

export default LinkiPage;