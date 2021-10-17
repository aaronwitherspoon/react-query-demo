import React from 'react'
import { useParams } from 'react-router'
import useSuperHeroData from '../hooks/userSuperHeroData'

function RQSuperHeroPage() {

    let { heroId } = useParams();

    const { isLoading, data, isError, error } = useSuperHeroData(heroId)

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    return (
        <div>
            {data?.data.name} - {data?.data.alterEgo}
        </div>
    )
}

export default RQSuperHeroPage
