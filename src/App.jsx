import { useState } from 'react'
import './App.css'
import ScreenOne from './components/ScreenOne'
import ScreenTwo from './components/ScreenTwo'
import ScreenThree from './components/ScreenThree'
import quizQuestions from './questionData'

function App() {
  const [currentScreen, setCurrentScreen] = useState('ScreenOne')
  const [score, setScore] = useState(0)
  const totalQuestion = quizQuestions.length;


  return (
    <>
      {currentScreen === 'ScreenOne' && <ScreenOne setCurrentScreen={setCurrentScreen} totalQuestion={totalQuestion} />}
      {currentScreen === 'ScreenTwo' && <ScreenTwo setCurrentScreen={setCurrentScreen} setScore={setScore} score={score} />}
      {currentScreen === 'ScreenThree' && <ScreenThree totalScore={score} totalQuestion={totalQuestion} setCurrentScreen={setCurrentScreen}/>}
    </>
  )
}

export default App
