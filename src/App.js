import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Colors from './Colors';
import Color from './Color';
import NewColor from './NewColor';

function App() {
  const [colors, setColors] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/colors" element={<Colors colors={colors} />} />
        <Route path="/colors/new" element={<NewColor setColors={setColors} />} />
        <Route path="/colors/:colorName" element={<Color colors={colors} />} />
        <Route path="*" element={<Navigate replace to="/colors" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
