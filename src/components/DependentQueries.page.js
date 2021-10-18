import React, { useState } from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

const fetchUserByEmail = (email) => {
    return axios.get(`http://localhost:4000/users/${email}`);
}

const fetchCoursesByChannelId = (channelId) => {
    return axios.get(`http://localhost:4000/channels/${channelId}`);
}

function DependentQueriesPage({email}) {
    
    const { data: user } = useQuery(['user', email], () => fetchUserByEmail(email));
    const channelId = user?.data.channelId;

    const { isLoading, data: courseList } = useQuery(['courses', channelId], () => fetchCoursesByChannelId(channelId), {
        enabled: !!channelId
    });

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h2>Dependent Queries</h2>
            { courseList && courseList.data.courses.map(course => (
                <div key={course}>{course}</div>
            ))}
        </div>
    )
}

export default DependentQueriesPage
