function Landing() {
    return (
        <>
            <h1 className="home-app-name">Linki</h1>
            <h3>Create a Landing Page to Efficiently Share Many links from a Single Page. 🚀</h3>
            <div>
                <input type="text" placeholder="Enter your Username" />
                <input type="password" placeholder="Enter your Password" />
            </div>
            <div><button className="primary-button">Sign Up</button></div>
            <div><button className="secondary-button">Login</button></div>
        </>
    )
}

export default Landing;