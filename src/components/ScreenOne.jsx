function ScreenOne({ setCurrentScreen }) {
    return (
        <div className="screen">
            <h1>Welcome to the Quiz App</h1>
            <h3>Test your knowledge with our interactive quiz!</h3>
            <p>15 Questions</p>
            <button onClick={() => setCurrentScreen('ScreenTwo')}>Start Quiz</button>
        </div>
    )
}

export default ScreenOne;