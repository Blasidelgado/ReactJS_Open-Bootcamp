import React, { Component } from "react";
import Proptypes from 'prop-types'


class Greeting extends Component {

    constructor(props){
        super(props);
        this.state = {
            age: 29
        }
    }
    
    render() {
        return (
            <div>
                <h1>Hola {this.props.name}!</h1>
                <h2>Edad: {this.state.age}</h2>
                <button onClick={this.birthday}>cumplir años</button>
            </div>
        )
    }

    birthday = () => {
        this.setState((state) => (
            {age: state.age +1}
        )
        )
    }

/*     birthday() {
        this.setState((state) => {
            return {age: state.age + 1}
        })
   }
*/
}

Greeting.propTypes = {
    name: Proptypes.string,
}

export default Greeting