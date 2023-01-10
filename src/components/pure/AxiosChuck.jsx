import React, {useState} from 'react'
import { getRandomJoke } from '../../services/axiosService'
import ChuckJoke from './forms/ChuckJoke'

const likesStyle = {
    display: 'flex',
    justifyContent: 'space-around', 
    margin: '1rem',
}

const AxiosChuck = () => {

    const [joke, setJoke] = useState("")
    const [likes, setLikes] = useState(0)
    const [dislikes, setDislikes] = useState(0)

    const generateJoke = () => {
        getRandomJoke()
            .then((response) => {
                if (response.status === 200) {
                    setJoke(response.data.value)
                }
                console.log(response)
            })
            .catch((error) => alert(`Something went wrong: ${error}`))
    }

    const updateLikes = (dif) => {
        setLikes(likes + dif)
    }

    const updateDislikes = (dif) => {
        setDislikes(dislikes + dif)
    }


    return (
        <>
            <h1>Chuck Norris the myth</h1>
            <h5>Generate and rate our Chuck jokes</h5>
            <section style={likesStyle}>
                <div>
                    <p>Jokes I Liked:</p>
                    <p>{likes}</p>
                </div>                
                <div>
                    <p>Jokes I Disliked:</p>
                    <p>{dislikes}</p>
                </div>
            </section>
            <button className='btn btn-primary' onClick={generateJoke}>Create new joke</button>
            <ChuckJoke joke={joke} likeUpdater={updateLikes} dislikeUpdater={updateDislikes} />
        </>
    )
}

export default AxiosChuck