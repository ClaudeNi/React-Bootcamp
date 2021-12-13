import React from 'react';
import '../App.css';

const Card = (props) => {
    return (
        <div className='card'>
            <img alt="image" src={props.src}/>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
            <a href="#">Share</a> <a href="#">Explore</a>
        </div>
    );
}

export default Card;