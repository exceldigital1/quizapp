function ScreenThree({ setCurrentScreen }) {
    return (
        <div className="screen">
            <h1>Quiz Complete!</h1>
            <button onClick={() => setCurrentScreen('ScreenOne')}>Restart Quiz</button>
        </div>
    )
}

export default ScreenThree;