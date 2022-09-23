import React, {useRef} from 'react'
import { Contact } from '../../../models/contact.class'
import Proptypes from 'prop-types'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'

const AddTaskSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Name is too Short!')
        .max(25, 'Name is too Long!')
        .required('Name is required'),
    lastName: Yup.string()
        .min(2, 'Lastname is too Short!')
        .max(25, 'Lastname is too Long!')
        .required('Lastname is required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
    });

const ContactFormik = ( { add }) => {

    function addContact(values) {
        const newContact = new Contact (
            values.name,
            values.lastName,
            values.email,
            false
        )
        add(newContact)
        return true
    }

    const initialValues = {
        name: '',
        lastName: '',
        email: ''
    }

  return (
    <div>
        <h4>Agregar contacto</h4>
        <Formik
            initialValues={initialValues}
            validationSchema={AddTaskSchema}
            onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 2000));
                addContact(values)
                alert(`Contact ${values.name} created`);
      }}        >
            { ( { values ,errors, touched } ) => (
                <Form>
                    <Field id="name" name="name" placeholder="Your name" />
                    {errors.name && touched.name ? 
                    (<div>{errors.name}</div>)
                    : null}

                    <Field id="lastName" name="lastName" placeholder="Your lastName"/>
                    {errors.lastName && touched.lastName ? 
                    (<div>{errors.lastName}</div>)
                    : null}

                    <Field id="email" name="email" placeholder="Your email" />
                    {errors.email && touched.email ? 
                    (<div>{errors.email}</div>)
                    : null}

                    <button type='submit'>Add</button>

                </Form>
            ) }
            </Formik>
    </div>
  )
}

ContactFormik.propTypes = {
    add: Proptypes.func.isRequired
}

export default ContactFormik