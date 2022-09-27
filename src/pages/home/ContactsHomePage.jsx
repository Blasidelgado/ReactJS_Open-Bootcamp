import React from 'react'
import Button from '@mui/material/Button'
import { Link, useNavigate } from 'react-router-dom'

const ContactsHomePage = ( {setOnline, status} ) => {

    const navigate = useNavigate()



  return (
    <div>
        <aside>
            <nav className='mb-5'>
                <Link className='me-3' to='/login' >Login</Link>
                <Link to='/register' >Register</Link>
            </nav>
        </aside>
        <main>
            <h1>Welcome to your contacts web app</h1>
            <Button variant="contained" onClick={() => navigate('/contacts')} >Go see my contacts</Button>
        </main>
        <button className='mt-4' onClick={() => setOnline()} >Change user status</button>
        <p>Current user status: {status ? "Online" : "Offline"}</p>
    </div>
  )
}

export default ContactsHomePage