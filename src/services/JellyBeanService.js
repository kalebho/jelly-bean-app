const API_URL = 'http://localhost:5001/jellybeans';


const updateJellyBean = async (oldFlavor, newFlavor) => {
    const response = await fetch(`${API_URL}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ oldFlavor, newFlavor })
    });
    return response.json();
};


