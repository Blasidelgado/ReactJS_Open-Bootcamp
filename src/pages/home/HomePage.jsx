import React from 'react'
import {useLocation, useNavigate, Link} from 'react-router-dom'

const HomePage = () => {

    const location = useLocation()
    const navigate = useNavigate()

    const statevalue= {online: true}

    const navigateProps = (path, statevalue) => {
      navigate({
        pathname: path,
        search: `?online=${statevalue.online}`, //Query params
      },
      {state:{...statevalue}} // State param
      )
    }

    console.log('We are in Route', location.pathname)

  return (
    <div>
        <h1>Home Page</h1>
        
        {/* Passing state with Link  */}
        {/* <Link to='/online-state' state= {{online: "si"}}>
          Go to page with State
        </Link> */}
        
        {/* Passing state with navigate and hook function */}
        <button onClick={() => navigateProps('/online-state', statevalue)}>Go to online state</button>
        <button onClick={() => navigate('/profile')}>Go to profile</button>
        <button onClick={() => navigate(-1)}>Go back</button>
        <button onClick={() => navigate(+1)}>Go forward</button>
    </div>
  )
}

export default HomePage