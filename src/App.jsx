import { useState } from 'react'
import './App.css'
import ScreenOne from './components/ScreenOne'
import ScreenTwo from './components/ScreenTwo'
import ScreenThree from './components/ScreenThree'

function App() {
  const [currentScreen, setCurrentScreen] = useState('ScreenOne')

  return (
    <>
      {currentScreen === 'ScreenOne' && <ScreenOne setCurrentScreen={setCurrentScreen} />}
      {currentScreen === 'ScreenTwo' && <ScreenTwo setCurrentScreen={setCurrentScreen} />}
      {currentScreen === 'ScreenThree' && <ScreenThree setCurrentScreen={setCurrentScreen} />}
    </>
  )
}

export default App
