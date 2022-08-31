import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../../models/contact.class'

const ContactComponent = ({contact}) => {

    const changeStatus = () => {
        console.log('TODO: Cambiar el estado de los usuarios')
    }
  
    return (
    <div>
        <h3>Nombre:</h3>
        <p>{contact.name}</p>
        <h3>Apellido:</h3>
        <p>{contact.lastName}</p>
        <h4>Email:</h4>
        <p>{contact.email}</p>
        <h4>Conectado:</h4>
        <p>{contact.status ? "Contacto En Línea" : "Contacto No Disponible"}</p>
        <button onClick={changeStatus}>Mostrar por consola nueva tarea</button>
    </div>
  )
}

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
}

export default ContactComponent