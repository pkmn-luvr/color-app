import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import './Color.css'; 

const Color = ({ colors }) => {
  const { colorName } = useParams();
  const color = colors.find(c => c.name === colorName);

  if (!color) {
    return <Navigate replace to="/colors" />;
  }

  return (
    <div className="color-display" style={{ backgroundColor: color.hex }}>
      <h1>{color.name}</h1>
    </div>
  );
};

export default Color;
