function Username({ username, setUsername }) {

    function copyLink() {
        console.log('Copying link');
    }

    return (
        <>
            <div className="username-container">
                <input type="text" value={username} onChange={(e) => {
                    setUsername(e.target.value);
                }}/>
            </div>
            <div className="button-container">
                <button className="secondary-button" onClick={copyLink}>Copy Your Linki</button>
            </div>
        </>
    );
}

export default Username;