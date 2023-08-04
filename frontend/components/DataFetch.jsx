import { useState, useEffect } from 'react';

export default function MarkerData() {
    const [apiMarkers, setApiMarkers] = useState([]);

    useEffect(() => {
    fetchMarkers();
    }, []);

    const fetchMarkers = async () => {
        try {
            const response = await fetch("http://localhost:8080/history/markers");
            const data = await response.json();
            setApiMarkers(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    return transformArray(apiMarkers);
}

const transformArray = (apiArray) => {
    const transformedArray = apiArray.map((apiObject) => {
        const { latitude, longitude, pos, description, ...rest } = apiObject;
        const newObject = {
        ...rest, // Copy other properties as they are
        description, 
        isOpen: false, 
        pos: { lat: parseFloat(latitude), lng: parseFloat(longitude) }, 
        };
        return newObject;
    });

    return transformedArray;
};