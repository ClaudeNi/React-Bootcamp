import React from 'react';

class Btn extends React.Component {
    render() {
        return (
            <div>
                <button className={this.props.className}>{this.props.text}</button>
            </div>
        );
    }
}

export default Btn;