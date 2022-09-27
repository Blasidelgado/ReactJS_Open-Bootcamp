import React from "react";
import { Link } from "react-router-dom";
import RegisterFormik from "../../components/pure/forms/RegisterFormik";


const RegisterPage = () => {
  return (
    <div>
        <h1>Register Page</h1>
        <RegisterFormik />
        <h6 className="mt-5">
          Already registered? 
          <Link to='/login'>Go to login</Link>
        </h6>
    </div>
  )
}

export default RegisterPage