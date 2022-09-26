import {React, useEffect} from 'react'
import { BrowserRouter as Router, Link, Navigate, Route, Routes, useParams, useLocation } from "react-router-dom";

import HomePage from "./pages/home/HomePage";
import NotFoundPage from "./pages/404/NotFoundPage";
import AboutPage from "./pages/about-faqs/AboutPage";
import ProfilePage from "./pages/profile/ProfilePage";
import Taskspage from "./pages/tasks/TasksPage";
import TaskDetailPage from "./pages/tasks/TaskDetailPage";
import LoginPage from "./pages/auth/LoginPage";
import Statepage from './pages/home/Statepage';

// Wrapper component to alert user which page is entering

const LoginPageWrapper = ( {children} ) => {
  const params = useLocation()
  const alertedPage = (params.pathname).charAt(1).toUpperCase() + (params.pathname).slice(2).toLowerCase()
  useEffect(() => {
    alert('You are entering the page: '+ alertedPage);
  }, []);
  return children
};

// Wrapper component to match corresponding task detail page
const TaskDetailPageWrapper = () => {

  let taskList = [
    {
      id: 1,
      name: 'Task 1',
      description: 'My first Task'
    },    
    {
      id: 2,
      name: 'Task 2',
      description: 'My second Task'
    }
  ]

  const {id} = useParams()
  const match = taskList.find((task) => task.id === Number(id))

  return (
    <div>
    {console.log(useParams())}
    <TaskDetailPage task={match} />
    </div>
  )
}

// App Routing One Component 
function AppRoutingOne() {

  let logged = false;

  useEffect(() => {
    logged = localStorage.getItem('credentials');
    console.log('User logged?', logged)
  }, [])
  
  
  return (
    <Router>
      <div>
        <aside>
          <Link to='/'>|| HOME |</Link>
          <Link to='/about'>| ABOUT |</Link>
          <Link to='/faqs'>| FAQS |</Link>
          <Link to='/any404'>| Not Existing Route ||</Link>
          <Link to='/login'>| LOGIN |</Link>
          <Link to='/task/1'>| Task 1 |</Link>
          <Link to='/task/2'>| Task 2 |</Link>
        </aside>

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route exact path ='/online-state' element={<Statepage />} />
            <Route path="/login" element={ logged ?
              <LoginPageWrapper children={<Navigate to='/' />}/>
              : <LoginPageWrapper children={<LoginPage /> }/>} />
            <Route path="/about" element={<AboutPage />} /> 
            <Route path="/faqs" element={<AboutPage />} /> 
            <Route path="/profile" element={ logged ? <ProfilePage /> 
            : <Navigate to="/login" replace/> }/>
            <Route path="/tasks" element={ <Taskspage /> } />
            <Route exact path='/task/:id' element={ <TaskDetailPageWrapper />}
              />

            {/* 404 - Page Not Found */}
            <Route path="*" element={ <NotFoundPage /> } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default AppRoutingOne;
