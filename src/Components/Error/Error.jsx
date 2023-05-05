import React from 'react';
import './Error.css'

const Error = () => {
    return (
        <div className="error-page">
            <h1 className="error-heading">Oops!</h1>
            <p className="error-message">Something went wrong.</p>
            <button className="error-button" onClick={() => window.location.reload()}>
                Try again
            </button>
        </div>
    );
};

export default Error;