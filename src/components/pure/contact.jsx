import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/contact.class'

const ContactComponent = ({contact, logInOut, remove}) => {

    function checkStatus() {
        return (contact.status) ? 
        (<i className="bi bi-circle-fill" style={ {color:"green"} } onClick={() => logInOut(contact)} />)
        : (<i className="bi bi-circle-fill" style={ {color:"gray"} } onClick={() => logInOut(contact)} />)
    }
  
    return (
        <div className="card mb-3" style={ {maxWidth: "540px"} }>
          <div className="row g-0">
            <div className="col-md-4">
            {/* // TODO: Set a dinamic avatar image instead of hardcoding it    */}
              <img src="/assets/defaultContact.jpg" className="img-fluid rounded-start" alt="Avatar Profile" />
            </div>  
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{contact.name}</h5>
                <h5 className="card-title">{contact.lastName}</h5>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{contact.email}</li>
                    <li className="list-group-item ">
                        {contact.status ? 'Conectado' : 'No conectado'}
                        <span className="status-icon">
                            {checkStatus()}
                        </span>
                    </li>
                    <li className="list-group-item">
                        <span className="status-icon">
                        </span>
                    </li>
                </ul>
              </div>
            </div>
          </div>
            <i className="bi bi-trash3" onClick={() => remove(contact)} style={ {color:"red", fontSize: "24px", marginTop: "-1.2rem", marginBottom: "0.5rem"} } />
        </div>  
        )
}

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact),
    logInOut: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
    }

export default ContactComponent