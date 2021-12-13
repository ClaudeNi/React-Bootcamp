import React from 'react';

class Counter extends React.Component {
    render() {
        return (
            <div>
                <button className={this.props.className} onClick={this.props.onClick}>{this.props.text}</button>
                {this.props.counter}
            </div>
        );
    }
}

export default Counter;