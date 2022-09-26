import React from 'react'
import Button from '@mui/material/Button'
import Copyright from '../../components/pure/Copyright'
import {useNavigate} from 'react-router-dom'

const DashboardPage = () => {

    const navigate = useNavigate()

  return (
    <div>
        <Button variant="contained" onClick={() => navigate('/login')} >Logout</Button>
        <Copyright />
    </div>
  )
}

export default DashboardPage