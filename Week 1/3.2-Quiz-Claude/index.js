import React from 'react';
import ReactDOM from 'react-dom';
import Quiz from './quiz';

const App = () => {
    return (
        <div>
            <Quiz />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector("#root"));