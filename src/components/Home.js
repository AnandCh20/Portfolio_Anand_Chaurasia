import React from 'react';

const Home = ({ name }) => (
    <section id="main">
        <div className="card bg-dark text-white">
            <div className="card-body bg-dark shadow-lg rounded-3">
                <h1 className="display-2 py-2 fw-bold lh-1 text-white text-center bg-dark">My Portfolio</h1>
                <div className="row">
                    <div className="col-md-3 bg-dark">
                        <img src="./MY.PNG" className="img-fluid rounded-circle" alt={`Portrait of ${name || 'the developer'}`} />
                    </div>
                    <div className="col-md-9 py-5 bg-dark">
                        <h3 className="card-title bg-dark">{name || 'Web Developer'}</h3>
                        <p className="card-text bg-dark">Hi, {name || 'there'}! I'm a passionate web developer with a love for creating amazing user experiences.</p>
                        <p className="card-text bg-dark">I specialize in front-end development using modern technologies like React, and I'm eager to take on new challenges in the field of web development.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Home;
