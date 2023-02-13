import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ScheduleChecklistTemplate from 'pages/scheduleChecklistTemplate';
import './App.css';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/testing/template/scheduleall" element={<ScheduleChecklistTemplate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
