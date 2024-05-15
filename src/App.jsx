import { useState } from 'react';
import { arr } from './questions';
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import './App.css';

function App() {

  const [answer, setAnswer] = useState(false);

  const handleAns = (id) => {
    setAnswer(answer === id ? null : id);
  }


  return (
    <>
      <h1>React Accordian</h1>
      {arr.map((question) => {
        const isAnswer = answer === question.id;
        return (
          <>
            <div className='question-box' key={question.id}>
              <div className='question-holder'>
                <button onClick={() => handleAns(question.id)}>{isAnswer ? <FaMinus /> : <FaPlus />}</button>
                <h4>{question.que}</h4>
              </div>
              {isAnswer && <div className='answer-holder'>
                <p>{question.ans}</p>
              </div>}
            </div>
          </>
        )
      })}

    </>
  )
}

export default App
