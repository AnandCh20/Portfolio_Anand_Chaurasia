import React, { useState } from 'react';

const Projects = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="accordion card shadow-lg rounded-4 bg-dark py-4 px-4">

            <h1 className="display-2 fw-bold text-center text-white mb-4 bg-dark">Projects</h1>

            <div className="accordion-item bg-dark text-white ">
                <h2 className="accordion-header" id="headingOne">
                    <button
                        className={`accordion-button ${activeIndex === 0 ? '' : 'collapsed'}`}
                        type="button"
                        onClick={() => handleToggle(0)}
                        aria-expanded={activeIndex === 0}
                        aria-controls="collapseOne"
                    >
                        E-Commerce Website
                    </button>
                </h2>
                <div
                    id="collapseOne"
                    className={`accordion-collapse collapse ${activeIndex === 0 ? 'show' : ''}`}
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                >
                    <div className="accordion-body">
                        <h5 className="fw-bold text-white mb-2">About</h5>
                        This project is a simple e-commerce website built using HTML, CSS, and JavaScript. It demonstrates the core functionalities of an online store, including product listing, adding items to a shopping cart.
                        <p><a className="link-opacity-25-hover" href="https://product-card-six-ebon.vercel.app/" style={{textDecoration:'none'}}>🔗 https://product-card-six-ebon.vercel.app/</a></p>
                    </div>
                </div>
            </div>
            <div className="accordion-item bg-dark text-white">
                <h2 className="accordion-header" id="headingTwo">
                    <button
                        className={`accordion-button ${activeIndex === 1 ? '' : 'collapsed'}`}
                        type="button"
                        onClick={() => handleToggle(1)}
                        aria-expanded={activeIndex === 1}
                        aria-controls="collapseTwo"
                    >
                    KwikNotes    
                    </button>
                </h2>
                <div
                    id="collapseTwo"
                    className={`accordion-collapse collapse ${activeIndex === 1 ? 'show' : ''}`}
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                >
                    <div className="accordion-body">
                    <h5 className="fw-bold text-white">About</h5>    
                    A website for the computer department Students. Using a combination of HTML, CSS, JavaScript, Bootstrap
                    and leveraging version control with Github and Git, I created a user-friendly website that offers a centralized
                    repository of semester notes and crucial study materials.
                    <p><a className="link-opacity-25-hover" href="https://product-card-six-ebon.vercel.app/" style={{textDecoration:'none'}}>🔗 https://product-card-six-ebon.vercel.app/</a></p>
                    </div>
                </div>
            </div>
            <div className="accordion-item bg-dark text-white">
                <h2 className="accordion-header" id="headingThree">
                    <button
                        className={`accordion-button ${activeIndex === 2 ? '' : 'collapsed'}`}
                        type="button"
                        onClick={() => handleToggle(2)}
                        aria-expanded={activeIndex === 2}
                        aria-controls="collapseThree"
                    >
                        Product Management System
                    </button>
                </h2>
                <div
                    id="collapseThree"
                    className={`accordion-collapse collapse ${activeIndex === 2 ? 'show' : ''}`}
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                >
                    <div className="accordion-body">
                    <h5 className="fw-bold text-white mb-2">About</h5>
                        <ul>
                        <li>(CRUD)Users can add, update, view, and delete products in the inventory.</li> 
                        <li>Users log in with an email and password. A special code (JWT) is created upon successful login</li>
                        <li>User interface is built with React, Node.js handles the server-side logic (processing requests and data)</li>
                        <li>Products and login information are stored in MongoDB.</li>     
                        </ul>
                        <p><a className="link-opacity-25-hover" href="https://product-card-six-ebon.vercel.app/" style={{textDecoration:'none'}}>🔗 https://product-card-six-ebon.vercel.app/</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
