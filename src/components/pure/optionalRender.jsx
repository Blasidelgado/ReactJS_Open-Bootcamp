import React, {useState} from 'react'

let red = 0
let green = 200
let blue = 150

//Definiendo estilos en constantes:
// ? Estilo para usuario logueado
const loggedStyle = {
    backgroundColor: `rgb(${red},${green},${blue})`,
    color: 'white',
    fontWeight: 'bold'
}

// ? Estilo para usuario no logueado
const unloggedStyle = {
    backgroundColor: 'tomato',
    color: 'white',
    fontWeight: 'bold'
}

//Login / Logout buttons

const LoginButton = ({loginAction, propStyle}) => {
    return (
        <button onClick={loginAction} style={propStyle} >Login</button>
    )
}

const LogoutButton = ({logoutAction, propStyle}) => {
    return (
        <button onClick={logoutAction} style={propStyle}>Logout</button>
    )
}

// ? (Expresión true) && expresión => Se renderiza la expresión
// ? (Expresión false) && expresión => No se renderiza la expresión

const OptionalRender = () => {

    const [access, setAccess] = useState(true)
    const [nMessages, setnMessages] = useState(0)

/*     const updateAccess = () => {
        setAccess(!access)
    } */

    const loginAction = () => {
        setAccess(true)
    }
    const logoutAction = () => {
        setAccess(false)
    }

    let optionalButton;

/*     if (access) {
        optionalButton = <button onClick={updateAccess}>Logout</button>
    }
    else {
        optionalButton = <button onClick={updateAccess}>Login</button>
    }     */
    
    if (access) {
        optionalButton = <LogoutButton logoutAction={logoutAction} propStyle={unloggedStyle} ></LogoutButton>
    }
    else {
        optionalButton = <LoginButton loginAction={loginAction} propStyle={loggedStyle} ></LoginButton>
    }

    // Unread messages
    let addMessages = () => {
        setnMessages(nMessages + 1)
    }

    return (
        <div>
            {/* Optional Button */}
            {optionalButton}
            {/* N Messages unread */}
            {/* With boolean operations */}
            {/* {nMessages > 0 && nMessages === 1 && <p>You have {nMessages} new message... </p>}
            {nMessages > 1 && <p>You have {nMessages} new messages... </p>}
            {nMessages === 0 && <p>There are no new messages</p>} */}
            {/* With ternary operator */}
            {access ?
                <div>
                    {nMessages > 0 ?
                        <p>You have {nMessages} new message{nMessages > 1 ? 's' : null} </p>
                        :   <p>There are no new messages</p>}
                    <button onClick={addMessages}> {nMessages === 0 ? 'Add your first message' : 'Add new message'} </button>
                </div> 
                :   null 
            }
        </div>
    )
}

export default OptionalRender