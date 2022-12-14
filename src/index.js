import React from 'react';
import ReactDOM from 'react-dom/client';

//Añadimos bootstrap a nuestro proyecto
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
// ! Importante, los estilos propios deben ir debajo del boostrap para que no los sobreescriba
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppRoutingOne from './AppRoutingOne';
import AppRoutingFinal from './AppRoutingFInal';
import AppRoutingExercise from './AppRoutingExercise';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
    // <AppRoutingExercise />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
