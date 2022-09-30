import React, {useState} from 'react'
import { getRandomJoke } from '../../services/axiosService'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt'
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt'
import { SvgIcon } from '@mui/material/'

const likesStyle = {
    display: 'flex',
    justifyContent: 'space-around', 
    margin: '1rem',
}

const AxiosChuck = () => {

    const [jokes, setJokes] = useState([])
    const [likes, setLikes] = useState(0)
    const [dislikes, setDislikes] = useState(0)

    const generateJoke = () => {
        getRandomJoke()
            .then((response) => {
                if (response.status === 200) {
                    let temp = [...jokes]
                    temp.push(response.data.value)
                    setJokes(temp)
                }
                console.log(response)
            })
            .catch((error) => alert(`Something went wrong: ${error}`))
    }

    const newLike = () => {
        setLikes(likes + 1)
    }    
    
    const newDislike = () => {
        setDislikes(dislikes + 1)
    }

    return (
        <div>
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
                {jokes.map(joke => (
            <section className='mt-4'style={{width: '500px'}}>
                    <p>{joke}</p>
                    {/* TODO: Make jokes rateable just once */}
                    <SvgIcon className='me-3' component={ThumbUpOffAltIcon} onClick={newLike} />
                    <SvgIcon className='ms-3' component={ThumbDownAltIcon} onClick={newDislike} />
            </section>
                ))}
        </div>
    )
}

export default AxiosChuck