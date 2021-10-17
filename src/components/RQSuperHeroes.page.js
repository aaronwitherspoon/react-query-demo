import React, { useState } from 'react'
import { useQuery } from 'react-query';
import axios from 'axios';
import useSuperHeroes from '../hooks/useSuperHeroesData';
import { Link } from 'react-router-dom';

function RQSuperHeroesPage() {

    const onSuccess = (data) => {
        console.log('Successful fetch', data);
    }

    const onError = (error) => {
        console.log('Error fetching', error);
    }

    const { isLoading, data, isError, error, isFetching, refetch } = useSuperHeroes(onSuccess, onError);

    console.log({isLoading, isFetching})

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    if (isError) {
        return <h2>{error.message}</h2>
    }

    return (
        <div>
            <h1>RQ Super Heroes</h1>
            <button onClick={refetch}>Fetch heroes</button>
            {data?.data.map(hero => (
                <div key={hero.id}>
                    <Link to={`/rq-super-heroes/${hero.id}`}>
                        {hero.name}
                    </Link>
                </div>
            ))}
            {/* {data.map(heroName => (
                <div key={heroName}>{heroName}</div>
            ))} */}
        </div>
    )
}

export default RQSuperHeroesPage