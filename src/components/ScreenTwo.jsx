import { useState } from "react";
import quizQuestions from "../questionData";
import QuestionCard from "../components/QuestionCard";

function ScreenTwo({ setCurrentScreen, setScore, score }) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const lastIndex = quizQuestions.length - 1;
    const [ selectedAnswer, setSelectedAnswer ] = useState(null);

    return (
        <div className="screen">
            <QuestionCard
                question={currentQuestion}
                current={currentQuestionIndex + 1}
                total={quizQuestions.length}
                selectedAnswer={selectedAnswer}
                setSelectedAnswer={setSelectedAnswer}
            />

            {currentQuestionIndex < lastIndex ? (
                <button onClick={() => {
                    if (selectedAnswer === currentQuestion.answer){
                        setScore(score + 1)
                    }
                    setCurrentQuestionIndex(currentQuestionIndex + 1)
                    setSelectedAnswer(null);
                    
                    }}
                    disabled={selectedAnswer === null}
                >
                    Next
                </button>
            ) : (
                <button onClick={() => {
                    if (selectedAnswer === currentQuestion.answer){
                        setScore(score + 1)
                    }
                    setCurrentScreen("ScreenThree", { totalScore: score, total: quizQuestions.length })
                }}>
                    Finish
                </button>
            )}
        </div>
    );
}

export default ScreenTwo;
