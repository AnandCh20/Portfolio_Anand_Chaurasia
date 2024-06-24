import React from "react";


const MyContact = () => (
    <div className="card shadow-lg rounded-3 bg-dark text-white my-5 py-4 px-4">
        <h1 className="display-2 fw-bold text-center text-white mb-4 bg-dark ">Contact</h1>
        <form>
            <div className="mb-3 bg-dark">
                <label htmlFor="name" className="form-label bg-dark">Name:</label>
                <input type="text" className="form-control bg-dark" id="name" name="name" required />
            </div>
            <div className="mb-3 bg-dark">
                <label htmlFor="email" className="form-label bg-dark">Email:</label>
                <input type="email" className="form-control bg-dark" id="email" name="email" required />
            </div>
            <div className="mb-3 bg-dark">
                <label htmlFor="message" className="form-label bg-dark">Message:</label>
                <textarea className="form-control bg-dark" id="message" name="message" rows="4" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
    </div>
);


export default MyContact;