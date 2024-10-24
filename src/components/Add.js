import  '../App.css'
import React, { useState } from 'react';
const API_URL = 'http://localhost:5001/jellyBeans';

const addJellyBean = async (flavor) => {
  const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ flavor })
  });
  return response.json();
};

const Add = ({ triggerRefresh }) => {
    const [newFlavor, setNewFlavor] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (newFlavor.trim()) {
            const lowercasedFlavor = newFlavor.toLowerCase();
            addJellyBean(lowercasedFlavor); 
            setNewFlavor(''); //clear the input after adding
            triggerRefresh();
        } else {
            alert('Please enter a valid flavor');
        }
    };

    
  return (
    <div>
      <h2 className='AppHeaders'> Add a Jelly Bean Flavor </h2>
      <form onSubmit={handleSubmit}>
        <input
        className='AppHeaders'
        type="text"
        placeholder="Enter jelly bean flavor"
        value={newFlavor}
        onChange={(e) => setNewFlavor(e.target.value)}
        />
        <button type="submit">Add Flavor</button>
      </form>
    </div>
  );
};

export default Add;
