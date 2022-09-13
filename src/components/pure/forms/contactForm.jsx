import React, {useRef} from 'react'
import { Contact } from '../../../models/contact.class'
import Proptypes from 'prop-types'

const ContactForm = ( {add} ) => {

    const nameRef = useRef('')
    const lastNameRef = useRef('')
    const emailRef = useRef('')

    function addContact(e) {
        e.preventDefault()
        const newContact = new Contact (
            nameRef.current.value,
            lastNameRef.current.value,
            emailRef.current.value,
            false
        )
        add(newContact)
    }

  return (
    <form onSubmit={addContact}>
    <h4>Agregar contacto</h4>
        <label htmlFor='name'>Nombre</label>
        <input id= 'name' ref={nameRef} type='text' placeholder='nombre'></input>
        <label htmlFor='name'>Apellido</label>
        <input id= 'lastName' ref={lastNameRef} type='text' placeholder='apellido'></input>
        <label htmlFor='email'>Email</label>
        <input id= 'email' ref={emailRef} type='text' placeholder='email'></input>
        <button type='submit' className='btn btn-success'>Submit</button>
    </form>
  )
}

ContactForm.propTypes = {
    add: Proptypes.func.isRequired
}

export default ContactForm