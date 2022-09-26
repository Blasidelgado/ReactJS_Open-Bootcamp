import React from 'react'
import {useLocation} from 'react-router-dom'


const Statepage = () => {

    const location = useLocation()

    console.log('Query Params:', location.search) // Query Params sent

    return (
        <div>
            <h1>State is {location.state.online ? 'The user is online' : 'The user is offline'}</h1>
        </div>
    )
}

export default Statepage