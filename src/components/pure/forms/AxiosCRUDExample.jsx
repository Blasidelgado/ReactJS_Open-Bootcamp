import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'

import { getAllUsers, getAllPagedUsers, login, getUserByID, createUser, updateUserByID, deleteUserByID } from '../../../services/axiosCRUDService'

const AxiosCRUDExample = () => {

    const loginSchema = Yup.object().shape(
        {
            email: Yup.string()
                    .email('Invalid email format')
                    .required('Email is required'),
            password: Yup.string()
                    .required('Password is required')
        }
    );

    const initialCredentials = {
        email: '',
        password: ''
    }

    const authUser = (values) => {
        login(values.email,values.password)
            .then((response) => {
                if(response.data.token) {
                    alert(JSON.stringify(response.data.token))
                    sessionStorage.setItem('token', response.data.token)
                }else{
                    sessionStorage.removeItem('token')
                    throw new Error('Login failure')
                }
            })
            .catch((error) => {
                sessionStorage.removeItem('token')
                alert(`Something went wrong: ${error}`)
            }) 
            .finally(() => console.log('Login done'))
    }

    //CRUD Examples
    const obtainAllUsers = () => {
        getAllUsers()
            .then((response) => {
                if(response.data.data && response.status === 200) {
                alert(JSON.stringify(response.data.data))
                }else{
                    throw new Error (`No users found`)
                }
            })
            .catch((error) => alert(`Something went wrong: ${error}`))
    }

    const obtainAllPagedUsers = (page) => {
        getAllPagedUsers(page)
            .then((response) => {
                if(response.data.data && response.status === 200) {
                alert(JSON.stringify(response.data.data))
                }else{
                    throw new Error (`No users found in page ${page}`)
                }
            })
            .catch((error) => alert(`Something went wrong: ${error}`))
    }

    const obtainUserByID = (id) => {
        getUserByID(id)
        .then((response) => {
            if(response.data.data && response.status === 200) {
            alert(JSON.stringify(response.data.data))
            }else{
                throw new Error ('Cannot obtain user')
            }
        })
            .catch((error) => alert(`Something went wrong: ${error}`))
    }

    const createNewUser= (name, job) => {
        createUser(name, job)
            .then((response) => {
                if(response.data && response.status === 201) {
                alert(JSON.stringify(response.data))
                }else{
                    throw new Error ('User not created')
                }
            })
            .catch((error) => alert(`Something went wrong: ${error}`))
    }

    const updateUser = (id, name, job) => {
        updateUserByID(id, name, job)
        .then((response) => {
            if(response.data && response.status === 200) {
            alert(JSON.stringify(response.data))
            }else{
                throw new Error ('User not found & not update done')
            }
        })
            .catch((error) => alert(`Something went wrong: ${error}`))
    }

    const deleteUser = (id) => {
        deleteUserByID(id)
        .then((response) => {
            if(response.status === 204) {
            alert(`User with id: ${id} deleted succesfully`)
            }else{
                throw new Error ('Cannot obtain user to delete')
            }
        })
            .catch((error) => alert(`Something went wrong: ${error}`))
    }
    
    return (
        <div>
            <h4>Login Formik</h4>
            <Formik
                // *** Initial values that the form will take
                initialValues = { initialCredentials }
                // *** Yup Validation Schema ***
                validationSchema = {loginSchema}
                // ** onSubmit Event
                onSubmit={async (values) => {
                    authUser(values)
                }}
            >

                {/* We obtain props from Formik */}
                
                {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => (
                        <Form>
                            <label htmlFor="email">Email</label>
                            <Field id="email" type="email" name="email" placeholder="example@email.com" />

                            {/* Email Errors */}
                            {
                                errors.email && touched.email && 
                                (
                                    <ErrorMessage name="email" component='div'></ErrorMessage>
                                )
                            }

                            <label htmlFor="password">Password</label>
                            <Field
                                id="password"
                                name="password"
                                placeholder="password"
                                type='password'
                            />
                            {/* Password Errors */}
                            {
                                errors.password && touched.password && 
                                (
                                    <ErrorMessage name="password" component='div'></ErrorMessage>
                                )
                            }
                            <button type="submit">Login</button>
                            {isSubmitting ? (<p>Login your credentials...</p>): null}
                        </Form>
                )}
            </Formik>
            {/* Example buttons to test API responses */}
            <div>
                <button onClick={obtainAllUsers}>Get all users</button>
                <button onClick={() => obtainAllPagedUsers(1)}>Get all paged users with Axios</button>
                <button onClick={() => obtainUserByID(1)}>Get user by ID</button>
                <button onClick={() => createNewUser('morpheus', 'leader')}>Create User </button>
                <button onClick={() => updateUser(1, 'morpheus', 'Developer')}>Update User</button>
                <button onClick={() => deleteUser(1)}>Delete User </button>
            </div>
        </div>
    )
}

export default AxiosCRUDExample