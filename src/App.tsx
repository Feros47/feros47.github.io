// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Section1 from './pages/Section1';
import Section2 from './pages/Section2';
import History from './pages/History';
import MyProjects from './pages/Projects';
import Poetry from './pages/Poetry';
import Handbook from './pages/Handbook';
import Expectations from './pages/Expectations';
import Strategies from './pages/Strategies';
import Fundamentals from './pages/Fundamentals';
import CoachLayout from './components/CoachLayout';
import CoachHome from './pages/CoachHome';
import PlayerHome from './pages/PlayerHome';
import Volleyball from './pages/Volleyball';
import Privacy from './pages/privacy-policy.jsx';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Poetry" element={<Poetry />} />
        <Route path="/Privacy" element={<Privacy/>}/>
        <Route path="/Volleyball" element={<Volleyball />} />
        <Route path="/Volleyball/Coach/" element={<CoachLayout><CoachHome /></CoachLayout>}>
          <Route path="Handbook" element={<CoachLayout><Handbook /></CoachLayout> }/>
          <Route path="Expectations" element={<CoachLayout><Expectations /></CoachLayout>} />
          <Route path="Strategies" element={<CoachLayout><Strategies /></CoachLayout>} />
          <Route path="Fundamentals" element={<CoachLayout><Fundamentals /></CoachLayout>} />
        </Route>
        <Route path="/Volleyball/Player" element={<PlayerHome />} />
        <Route
          path="/"
          element={
            <>
              <Section1 />
              <Section2 />
              <History />
              <MyProjects />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
