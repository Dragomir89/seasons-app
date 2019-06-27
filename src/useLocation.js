import { useState, useEffect } from 'react'


const getValues = () => {
    const [lat, setLat] = useState(null);
    const [errorMessage, setErrorMesage] = useState('');

    useEffect(() => {
        window.navigator.geolocation.getCurrentPosition(
            position => setLat(position.coords.latitude),
            err => setErrorMesage(err.message)
        );
    }, [lat, errorMessage]);

    return {
        lat,
        errorMessage
    }
}

export default getValues;