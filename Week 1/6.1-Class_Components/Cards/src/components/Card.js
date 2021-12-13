import React from 'react';
import '../App.css';

class Card extends React.Component {
    render() {
        return (
            <div className='card'>
                <img alt="image" src={this.props.src}/>
                <h3>{this.props.title}</h3>
                <p>{this.props.text}</p>
                <a href="#">Share</a> <a href="#">Explore</a>
            </div>
        );
    }
}

export default Card;