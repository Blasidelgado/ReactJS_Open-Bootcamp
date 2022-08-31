import React, {useState} from 'react'
import PropTypes from 'prop-types'

function GreetingF(props) {

    const [age, setage] = useState(29);

    const birthday = () => {
        setage(age + 1)
    }

  return (
      <div>
            <h1>Hola {props.name}!</h1>
            <h2>Edad: {age}</h2>
            <button onClick={birthday}>cumplir años</button>
        </div>
    )
}

GreetingF.propTypes = {
    name: PropTypes.string,
    edad: PropTypes.number,
}

export default GreetingF
