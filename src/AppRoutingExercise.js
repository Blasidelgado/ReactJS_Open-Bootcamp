import React, {useState ,useEffect} from 'react';
import {BrowserRouter as Router, useNavigate, Route, Routes, useParams, useLocation, Navigate} from 'react-router-dom'

import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import ContactsHomePage from './pages/home/ContactsHomePage';
import ContactsPage from './pages/contacts/ContactsPage';
import NotFoundPage from './pages/404/NotFoundPage';
import HomePage from './pages/home/HomePage';

const LoginAlertWrapper = () => {
    
    useEffect(() => {
      alert('Please login to see your contact list.')
        }, [])
    
    return <Navigate to='/' />
}

function AppRoutingExercise() {

    const [logged, setLogged] = useState(false)

    function changeStatus(){
        setLogged(!logged)
    }

    return (
      <Router>
        <Routes>
            <Route exact path='/' element={ <ContactsHomePage status={logged} setOnline={changeStatus}/>} />
            <Route exact path='/login' element={<LoginPage />} />  
            <Route exact path='/register' element={<RegisterPage />} />  
            <Route 
                exact 
                path='/contacts' 
                element={
                    logged ? 
                    <ContactsPage />
                    :   <LoginAlertWrapper />
                } />  
            <Route path='*' element={<NotFoundPage /> } />
        </Routes>
      </Router>
    );
  }
  
  export default AppRoutingExercise;