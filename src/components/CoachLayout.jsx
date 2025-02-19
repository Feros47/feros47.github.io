// src/components/CoachLayout.js
import React from 'react';
import NavBar from './NavBar';

const CoachLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

export default CoachLayout;
