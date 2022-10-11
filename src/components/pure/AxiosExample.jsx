import React, {useState, useEffect} from 'react'
import {getRandomUser} from '../../services/axiosService'

const AxiosExample = () => {

    const [user, setUser] = useState(null)

    // useEffect(() => {
    //     obtainUser()
    // }, [])

    const obtainUser = () => {
        getRandomUser()
        .then((response) => {
            if (response.status === 200) {
                setUser(response.data.results[0])
            }
            console.log(response)})
        .catch((error) => alert(`Something went wrong: ${error}`))
    }
    

  return (
    <div>
        <h1>Axios example</h1>
        {user != null ?
        (<div>
            <img src={user.picture.large} alt='avatar'></img>
            <h2>{user.name.title} {user.name.first} {user.name.last}</h2>
            <h3>{user.email}</h3>
        </div>)
        :   null }
        <div>
            <p>Generate a new user</p>
        </div>
        <button onClick={obtainUser}>Random User</button>
    </div>
  )
}

export default AxiosExample