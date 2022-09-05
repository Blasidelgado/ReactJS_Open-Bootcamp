import React, {useState} from 'react'

const LoginForm = () => {

    const initialCredentials = [
        {
            user: '',
            password: ''
        }
    ]

    const [credentials, setcredentials] = useState(initialCredentials)

    return (
      <div>loginForm</div>
    )
}

export default LoginForm
