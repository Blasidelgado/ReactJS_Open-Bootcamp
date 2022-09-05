import React from 'react'
import { Contact } from '../../models/contact.class'
import ContactComponent from '../pure/contact'

export const ContactListComponent = () => {
    
    const exampleContact = new Contact ('Blas Ignacio', 'Delgado', 'blasidelgado@gmail.com', true)

    return (
        <div>
            <h1>Lista de contactos:</h1>
            <ContactComponent contact={exampleContact} />
        </div>
  )
}
