import React from 'react';

const SideBar = () => (
    <div className='d-flex flex-column flex-shrink-0 p-3 text-white bg-dark rounded-3 shadow-lg' style={{ height: '100%' }}>
        <a href="/" className="d-flex text-center text-white text-decoration-none bg-dark">
            <h5 className="fs-2 border rounded-pill py-4 px-5 bg-dark">Anand Chaurasia</h5>
        </a>
        <hr />
            <a href="#" className="d-inline-flex focus-ring focus-ring-light py-2 px-2 text-decoration-none rounded-2 text-white text-center px-2 py-2 mx-4 my-4 bg-dark border" style={{ width: '80%' }}>Personal Details</a>
            <a href="#" className="d-inline-flex focus-ring focus-ring-light py-2 px-2 text-decoration-none  rounded-2 text-white text-center px-2 py-2 mx-4 my-4 bg-dark border" style={{ width: '80%' }}>Skills</a>
            <a href="#" className="d-inline-flex focus-ring focus-ring-light py-2 px-2 text-decoration-none  rounded-2 text-white text-center px-2 py-2 mx-4 my-4 bg-dark border" style={{ width: '80%' }}>Projects</a>
            <a href="#" className="d-inline-flex focus-ring focus-ring-light py-2 px-2 text-decoration-none  rounded-2 text-white text-center px-2 py-2 mx-4 my-4 bg-dark border" style={{ width: '80%' }}>Contacts</a>
        <hr />
    </div>
);

export default SideBar;
