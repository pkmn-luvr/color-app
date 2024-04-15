import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NewColor.css'; 

const NewColor = ({ setColors }) => {
  const [name, setName] = useState('');
  const [hex, setHex] = useState('#000000');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setColors(prevColors => [{ name, hex }, ...prevColors]);
    navigate('/colors');
  };

  return (
    <form onSubmit={handleSubmit} className="new-color-form">
      <label htmlFor="name">Color Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <label htmlFor="hex">Color Hex:</label>
      <input
        type="color"
        id="hex"
        value={hex}
        onChange={(e) => setHex(e.target.value)}
        required
      />
      <button type="submit">Add Color</button>
    </form>
  );
};

export default NewColor;
