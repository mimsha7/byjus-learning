import React from 'react';

const NotFound = () => {
    const nStyle = {
        color: 'red',
        textAlign: 'center',
    }
    return (
        <div style={nStyle}>
            <h1>Sorry, page not found.</h1>
            <h2>Try Again!</h2>
        </div>
    );
};

export default NotFound;