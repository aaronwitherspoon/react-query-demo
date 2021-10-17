import axios from 'axios';
import React, { useState, useEffect } from 'react'

function SuperheroesPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get('http://localhost:4000/superheroes').then((res) => {
            setData(res.data);
            setIsLoading(false);
        }).catch(err => {
            setError(err.message);
            setIsLoading(false);
        })
    }, []);

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    if (error) {
        return <h2>{error}</h2>
    }

    return (
        <div>
            <h1>Superheroes</h1>
            {data.map(hero => (
                <div key={hero.id}>{hero.name}</div>
            ))}
        </div>
    )
}

export default SuperheroesPage
