import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [countColor, setCountColor] = useState('#E07572');

  const countStyle = {
    color: countColor
  };

  return (
    <div className="App">
      <h1>IAsked<span style={countStyle}>{count}</span>People</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  )
}

export default App
