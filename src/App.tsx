import React from 'react';
import Shortner from './Components/Shortner';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <Routes>
          <Route path="/" element={<Shortner />} />
          <Route path="/:url" element={<Shortner />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
