import './style.css';

const QuizQuestionTwo = () => {
    return (
        <div className="quiz-card">
            <QuestionTwoText />
            <QuestionTwoInput />
        </div>
    );
};

const QuestionTwoText = () => {
    return (
        <span>What is your favorite front end feature/topic?</span>
    );
};

const QuestionTwoInput = () => {
    return (
        <input type={"text"}></input>
    );
};

export default QuizQuestionTwo;