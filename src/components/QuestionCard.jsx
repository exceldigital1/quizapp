function QuestionCard({ question, current, total, selectedAnswer, setSelectedAnswer }) {
    return (
        <div className="question-card">
            <h2 style={{ color: "white" }}>
                Question {current} of {total}
            </h2>

            <p style={{ color: "white" }}>{question.question}</p>

            <ul style={{ listStyleType: "none", padding: 0, }}>
                {question.options.map((option, index) => (
                    <li
                        key={index}
                        style={{ marginBottom: "10px", fontSize: "18px", textAlign: "left", color: "white" }}
                    >
                        <input
                            style={{ transform: "scale(1.5)", marginRight: "10px" }}
                            type="radio"
                            name="answer"
                            value={index}
                            checked={selectedAnswer === index}
                            onChange={() => setSelectedAnswer(index)} /> {option}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default QuestionCard;
