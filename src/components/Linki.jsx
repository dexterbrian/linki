import { useState } from 'react';

function Linki() {
    
    const [linkTitle, setLinkTitle] = useState('');
    const [link, setLink] = useState('');

    return (
        <>
            <div className="linki-container">
                <input type="text" placeholder="Enter your Link" value={linkTitle} onChange={(e) => {
                    setLinkTitle(e.target.value);
                }}/>
                <input type="text" placeholder="Enter a Title for your Link" value={link} onChange={(e) => {
                    setLink(e.target.value);
                }}/>
            </div>
        </>
    );
}

export default Linki;