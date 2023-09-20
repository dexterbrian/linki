import { useState } from 'react';

function EditLinki({ title, setTitle, url, setUrl }) {
    return (
        <>
            <div className="linki-container">
                <input type="text" placeholder="Enter your Link" value={title} onChange={(e) => {
                    setTitle(e.target.value);
                }}/>
                <input type="text" placeholder="Enter a Title for your Link" value={url} onChange={(e) => {
                    setUrl(e.target.value);
                }}/>
            </div>
        </>
    );
}

export default EditLinki;