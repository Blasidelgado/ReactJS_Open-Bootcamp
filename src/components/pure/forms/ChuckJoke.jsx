import React, {useState, useEffect} from 'react'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt'
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt'
import { SvgIcon } from '@mui/material/'

export default function ChuckJoke( {joke, likeUpdater, dislikeUpdater} ) {

    const jokeLikeStatus = {
        LIKED: "LIKED",
        DISLIKED: "DISLIKED",
        UNRATED: "UNRATED",
    }

    const [likeStatus, setLikeStatus] = useState(jokeLikeStatus.UNRATED)
    const [showJoke, setShowJoke] = useState("")

    useEffect(() => {
      setShowJoke(joke)
    
      return () => {
        setLikeStatus(jokeLikeStatus.UNRATED)
      }
    }, [joke, jokeLikeStatus.UNRATED])
    

    const likeHandler = () => {
        switch (likeStatus) {
            case "LIKED":
                setLikeStatus(jokeLikeStatus.UNRATED)
                likeUpdater(-1)
                break;
            case "UNRATED":
                setLikeStatus(jokeLikeStatus.LIKED)
                likeUpdater(+1)
                break;
            case "DISLIKED":
                setLikeStatus(jokeLikeStatus.LIKED)
                likeUpdater(+1)
                dislikeUpdater(-1)
                break;      
            default:
                break;
        }
    }

    const dislikeHandler = () => {
        switch (likeStatus) {
            case "LIKED":
                setLikeStatus(jokeLikeStatus.DISLIKED)
                likeUpdater(-1)
                dislikeUpdater(+1)
                break;
            case "UNRATED":
                setLikeStatus(jokeLikeStatus.DISLIKED)
                dislikeUpdater(+1)
                break;
            case "DISLIKED":
                setLikeStatus(jokeLikeStatus.UNRATED)
                dislikeUpdater(-1)
                break;      
            default:
                break;
        }
    }

    return (
        <section className='mt-4'style={{width: '500px'}}>
        <p>{joke}</p>
        {joke ?
        <div>
            <SvgIcon className='me-3' component={ThumbUpOffAltIcon} onClick={(likeHandler)}/>
            <SvgIcon className='ms-3' component={ThumbDownAltIcon}  onClick={(dislikeHandler)}/>
        </div>
        :
        <></>
        }
        </section>
    )
}
