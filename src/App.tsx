import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Section1 from './pages/Section1';
import Section2 from './pages/Section2';
import History from './pages/History';
import MyProjects from './pages/Projects';
import Poetry from './pages/Poetry';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Poetry" element={<Poetry />} />
        <Route path="/" element={
          <>
            <Section1 />
            <Section2 />
            <History />
            <MyProjects />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
