import React from 'react'

import {useLocation, useNavigate} from 'react-router-dom'

const AboutPage = () => {

    const location = useLocation()
    const history = useNavigate()

    const navigate = (path) => {
        history(path)
    }

    console.log('We are in Route:', location.pathname)

  return (
    <div>
        <h1>
            About | FAQs
        </h1>
        <div>
            <button onClick={ () => navigate('/') }>Go to home</button>
            <button onClick={ () => navigate(-1) }>Go back</button>
            <button onClick={ () => navigate(+1) }>Go forward</button>
        </div>
    </div>
  )
}

export default AboutPage