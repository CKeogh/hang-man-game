import React from 'react';

const Image = (props) => {
    return <img onChange= {props.handleChange} src={props.image} alt="hangman"></img>
}

export default Image;