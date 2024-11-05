import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <h1>Welcome to the Crewmate Creator!</h1>
            <p>Here is where you can create your very own set of crewmates before sending them off into space!</p>
            <img src="/crewmates.png" alt="Crewmates illustration" />
            <img src="/spaceship.png" alt="Crewmates illustration" />
        </div>
    );
};

export default Home;