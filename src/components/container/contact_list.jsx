    import React, {useState} from 'react'
import { Contact } from '../../models/contact.class'
import ContactForm from '../pure/forms/contactForm'
import ContactComponent from '../pure/contact'
import '../../styles/contact.scss'

export const ContactListComponent = () => {
    
    const exampleContact1 = new Contact ('Blas Ignacio', 'Delgado', 'blasidelgado@gmail.com', true)
    const exampleContact2 = new Contact ('Blas Ignacio2', 'Delgado2', 'blasidelgado2@gmail.com', false)
    const exampleContact3 = new Contact ('Blas Ignacio3', 'Delgado3', 'blasidelgado3@gmail.com', false)

    const [contacts, setContacts] = useState([exampleContact1, exampleContact2, exampleContact3])
    
    function changeStatus(contact) {
        const index = contacts.indexOf(contact)
        const allContacts = [...contacts]
        allContacts[index].status = !allContacts[index].status
        setContacts(allContacts)
    }

    function addContact(contact) {
        console.log('Added new contact')
        const allContacts = [...contacts]
        allContacts.push(contact)
        setContacts(allContacts)
    }

    function removeContact(contact) {
        console.log(`Removing contact '${contact.name + ' ' + contact.lastName}'`)
        const index = contacts.indexOf(contact)
        const allContacts = [...contacts]
        allContacts.splice(index, 1)
        setContacts(allContacts)
    }

    return (
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <h1>Contactos</h1>
            <h4>Lista de contactos:</h4>
            {contacts.map((contact, index) => {
                return (
                <ContactComponent key={index} contact={contact} logInOut={changeStatus} remove ={removeContact} />
            )})}
            <ContactForm add={addContact} />
        </div>
  )
}
