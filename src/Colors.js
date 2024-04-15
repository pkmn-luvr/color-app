import React from 'react';
import { Link } from 'react-router-dom';
import './Colors.css';

const Colors = ({ colors }) => {
  return (
    <div className="colors-container">
      <h1>Colors</h1>
      {colors.map(color => (
        <Link key={color.name} to={`/colors/${color.name}`} className="color-link" style={{ color: color.hex }}>
          {color.name}
        </Link>
      ))}
      <Link to="/colors/new" className="add-color-link">Add a new color</Link>
    </div>
  );
};

export default Colors;
