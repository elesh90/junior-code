import { useState, useEffect } from 'react'
import './App.css'
import { FaUserAstronaut } from 'react-icons/fa';
import { IPeople } from './Interfaces/People.type';
import { peopleData } from './peopleData';
import PeopleList from './Components/PeopleList';

function App() {
  const [peopleCount, setPeopleCount] = useState(0);
  const [questionCount, setQuestionCount] = useState(0);
  const [countColor, setCountColor] = useState('#E07572');
  const [peopleList, setPeopleList] = useState(peopleData as IPeople[]);

  const countStyle = {
    color: countColor
  };

  useEffect(() => {
    setPeopleCount(peopleData.length);
  }, []);

  return (
    <div className="App">
      <h1>IAsked<span style={countStyle}>{peopleCount}</span>People<span style={countStyle}>{questionCount}</span>Questions</h1>
      <div className="card">
        <div>
          <section className="people">
            <div className="people-icon">
              <FaUserAstronaut />
            </div>
            <div className="people-name">
              <span>John Doe</span>
            </div>
            <button onClick={() => setQuestionCount((questionCount) => questionCount + 1)}>
              {questionCount}
            </button>
          </section>
        </div>
        <div className="people-list">
          <PeopleList />
        </div>
      </div>
    </div>
  )
}

export default App
