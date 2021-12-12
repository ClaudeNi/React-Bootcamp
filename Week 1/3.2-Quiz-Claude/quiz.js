import './style.css';
import QuizQuestionOne from './question1';
import QuizQuestionTwo from './question2';

const Quiz = () => {
    return (
        <div className='quiz'>
            <QuizTitle />
            <QuizQuestionOne />
            <QuizQuestionTwo />
        </div>
    );
};

const QuizTitle = () => {
    return (
      <h2>How Do You Like Front End?</h2>  
    );
};


export default Quiz;