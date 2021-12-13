import React from 'react';
import Square from './Square';

class Box extends React.Component {
    render() {
        return (
            <div className='box'>
                <button onClick={this.props.onClick}>Show/Hide</button>
                <Square visibleClass={this.props.visibleClass} />
            </div>
        );
    }
}

export default Box;