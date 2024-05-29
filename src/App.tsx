import React, { useRef } from 'react';
import Section1 from './pages/Section1';
import Section2 from './pages/Section2';
import History from './pages/History';

function App() {
  const aboutSection = useRef<HTMLDivElement>(null);
  return (
    <>
      <Section1 ref={aboutSection} />
      <Section2 ref={aboutSection} />
      <History />
    </>
  );
}

export default App;