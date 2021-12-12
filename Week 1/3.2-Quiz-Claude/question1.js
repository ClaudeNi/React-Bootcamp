import './style.css';

const QuizQuestionOne = () => {
    return (
        <div className="quiz-card">
            <QuestionOneText />
            <QuestionOneInput />
        </div>
    );
};

const QuestionOneText = () => {
    return (
        <span>How much do you love front end?</span>
    );
};

const QuestionOneInput = () => {
    return (
        <input type={"range"}></input>
    );
};

export default QuizQuestionOne;