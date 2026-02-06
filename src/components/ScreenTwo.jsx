import QuestionCard from "../components/QuestionCard";

function ScreenTwo({ setCurrentScreen }) {
    return (
        <div className="screen">
            <QuestionCard />
            <button onClick={() => setCurrentScreen('ScreenThree')}>Finish Quiz</button>
        </div>
    )
}

export default ScreenTwo;