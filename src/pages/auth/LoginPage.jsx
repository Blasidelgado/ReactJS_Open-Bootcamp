import React from "react";
import { Link } from "react-router-dom";
import LoginFormik from "../../components/pure/forms/loginFormik";


const LoginPage = () => {
  return (
    <div>
        <h1>Login page</h1>
        <LoginFormik />
        <h6 className="mt-5">
          Not registered? 
          <Link to='/register'>Click to register</Link>
        </h6>
    </div>
  )
}

export default LoginPage