import {React, useEffect} from 'react'
import { BrowserRouter as Router, Navigate, Route, Routes, useParams, useLocation } from "react-router-dom";

import HomePage from "./pages/home/HomePage";
import NotFoundPage from "./pages/404/NotFoundPage";
import AboutPage from "./pages/about-faqs/AboutPage";
import ProfilePage from "./pages/profile/ProfilePage";
import Taskspage from "./pages/tasks/TasksPage";
import TaskDetailPage from "./pages/tasks/TaskDetailPage";
import LoginPage from "./pages/auth/LoginPage";
import Statepage from './pages/home/Statepage';
import Dashboard from './pages/dashboard/Dashboard';
import DashboardPage from './pages/dashboard/Dashboard';



function AppRoutingFinal() {

  const loggedIn= true
  
  return (
    <Router>
      {/* Routes */}
      <Routes>
      {/* Redirections to protect our routes */}
        <Route 
          exact 
          path='/' 
          element={ 
            loggedIn ? 
            <Navigate to='/dashboard' />
            : <Navigate to='/login' />
            } 
            />
          <Route />
          {/* Login Route */}
          <Route exact path='/login' element={<LoginPage />} />
          {/* Dashboard Route */}
          <Route 
            exact 
            path='/dashboard' 
            element={
              loggedIn ?
              <DashboardPage />
              : <Navigate to='/login' />
            } 

            />
        <Route element={<NotFoundPage /> } />
      </Routes>
    </Router>
  );
}

export default AppRoutingFinal;
