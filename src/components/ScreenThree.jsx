function ScreenThree({ setCurrentScreen, totalScore, totalQuestion }) {
    return (
        <div className="screen">
            <h1>Quiz Complete!</h1>
            <p>Your score: {totalScore} out of {totalQuestion}</p>

            <button onClick={() => setCurrentScreen('ScreenOne')}>Restart Quiz</button>
        </div>
    )
}

export default ScreenThree;