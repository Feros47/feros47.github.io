import React from 'react';
import translation from '../translations/dk/translation.json'; // Adjust the path as necessary

const Poetry = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-retro-darkPeach via-retro-darkMint to-retro-darkBlue p-8 flex items-center justify-center">
      <div className="w-full max-w-4xl h-full bg-retro-darkYellow bg-opacity-90 shadow-xl rounded-lg flex flex-col items-center p-10">
        <h1 className="text-5xl font-bold mb-6 text-center text-retro-darkPink">About Me</h1>
        <div className="text-xl text-retro-text flex-grow">
          <p className="mb-4">
            <span className="font-semibold">{translation.section2.header}</span>
          </p>
          <p className="mb-4">
            <span className="font-semibold">Name: </span>{translation.section2.name}
          </p>
          <p className="mb-4">
            <span className="font-semibold">Age: </span>{translation.section2.ageDescription}
          </p>
          <p className="mb-6">
            <span className="font-semibold">Hobbies: </span>{translation.section2.hobbiesDescription}
          </p>
          <div className="flex justify-center space-x-4">
            {translation.section2.icons.split(' / ').map((icon, index) => (
              <span key={index} className="text-3xl transform transition-all hover:scale-125" role="img" aria-label="icon">{icon}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Poetry;
