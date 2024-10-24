import '../App.css';
import { useState, useEffect, React } from 'react';

const API_URL = 'http://localhost:5001/jellyBeans';

const View = () => {
    const [jellyBeans, setJellyBeans] = useState([]);

    useEffect(() => {
        // Fetch the jelly beans from the backend
        const fetchJellyBeans = async () => {
            const response = await fetch(API_URL);
            const data = await response.json();
            setJellyBeans(data); // Store the jelly beans in the state
        };

        fetchJellyBeans(); // Call the function to fetch jelly beans on component mount
    }, []);

    return (
        <div>
            <h1 className='AppHeaders'> Jelly Bean Flavors </h1>
            <ul>
                {jellyBeans.map((flavor, index) => (
                    <li key={index}>{flavor}</li>
                ))}
            </ul>
        </div>
    );
}


export default View;