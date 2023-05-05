import React from 'react'
import './App.scss'
import Quiz from './Quiz'
import { jsQuizz } from './constant'

const App = () => {
  return (
    <div>
      <Quiz questions={jsQuizz.questions}/>
    </div>
  )
}

export default App
