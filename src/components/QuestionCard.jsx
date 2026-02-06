import quizQuestions from "../questionData";


function QuestionCard() {
    return (
        <div className="question-card">
            <h2 style={{color:"white"}}>Question 1 of {quizQuestions.length}</h2>
            <p style={{color:"white"}}>{quizQuestions[0].question}</p>
            <ul style={{listStyleType:"none", padding:0}}>
                {quizQuestions[0].options.map((option, index) => (
                    <li key={index} style={{marginBottom:"10px", fontSize:"18px", color:"white"}}>
                        <input type="radio" name="answer" value={index} />
                        {option}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default QuestionCard;