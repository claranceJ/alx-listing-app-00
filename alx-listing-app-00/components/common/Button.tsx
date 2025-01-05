// This file will define a reusable Button component, which will be used for actions like “Book Now,” “Details,” etc.

import React from 'react';
import '../../styles';// import CSS files for styling

const Button = ({}) => {
    return (
        <button className={`button ${className}`} onClick={onClick}>
           {children}
        </button>
        
    );
};

export default Button;