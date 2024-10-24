import  '../App.css'
import React, { useState } from 'react';
const API_URL = 'http://localhost:5001/jellyBeans';

const deleteJellyBean = async (flavor) => {
  const response = await fetch(API_URL, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({ flavor })
  });
  return response.json();
}


const Delete = ({ triggerRefresh }) => {
    const [flavor, setFlavor] = useState('');
    
    const handleDelete = (e) => {
        e.preventDefault();
        if (flavor.trim()) {
            const lowercasedFlavor = flavor.toLowerCase();
            deleteJellyBean(lowercasedFlavor); 
            setFlavor('');
            triggerRefresh();
        } else {
            alert('Please enter a valid flavor to delete');
        }
    };

    
  return (
    <div>
      <h2 className='AppHeaders'> Delete a Jelly Bean Flavor </h2>
      <h2 className='AppHeaders'> Make sure to pick one from the existing list </h2>
      <form onSubmit={handleDelete}>
        <input
        className='AppHeaders'
        type="text"
        placeholder="Enter jelly bean flavor to delete"
        value={flavor}
        onChange={(e) => setFlavor(e.target.value)}
        />
        <button type="submit">Delete Flavor</button>
      </form>
    </div>
  );
};

export default Delete;
