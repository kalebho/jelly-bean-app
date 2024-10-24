import '../App.css';
import React, { useState } from 'react';
const API_URL = 'http://localhost:5001/jellybeans';

const updateJellyBean = async (oldFlavor, newFlavor) => {
    const response = await fetch(`${API_URL}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ oldFlavor, newFlavor })
    });
    return response.json();
};

const Update = ({triggerRefresh}) => {

    const [oldFlavor, setOldFlavor] = useState('');
    const [newFlavor, setNewFlavor] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const lowercasedOldFlavor = oldFlavor.toLowerCase();
        const lowercasedNewFlavor = newFlavor.toLowerCase();
        updateJellyBean(lowercasedOldFlavor, lowercasedNewFlavor); 
        setOldFlavor('');
        setNewFlavor('');
        triggerRefresh();
    };


    return(
        <div>
            <h1 className='AppHeaders'> Update A Jelly Bean in the Existing List</h1>
            <h1 className='AppHeaders'> Input the existing flavor and the new flavor you want it to update to</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Old Flavor:
                    <input
                        type="text"
                        value={oldFlavor}
                        onChange={(e) => setOldFlavor(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    New Flavor:
                    <input
                        type="text"
                        value={newFlavor}
                        onChange={(e) => setNewFlavor(e.target.value)}
                    />
                </label>
                <br />
                <button type="submit">Update Flavor</button>
            </form>
        </div>
    );
}

export default Update;