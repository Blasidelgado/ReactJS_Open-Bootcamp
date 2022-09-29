import React, {useState} from 'react'
import { getNumbers } from '../../services/observableService'

const ObservableExample = () => {

    const [number, setNumber] = useState(0)

    const obtainNewNumbers = () => {
        console.log('Subscription to observable')
        const subscription = getNumbers.subscribe(
            {
                next(newNumber){
                    setNumber(newNumber)
                    console.log('New Number', newNumber)
                },
                error(error) {
                    alert(`Something went wrong: ${error}`)
                    console.log('Error with the observable')
                },
                complete(){
                    alert(`Finished with: ${number}`)
                    console.log('Done with the observable')
                }
            }
            )
        console.log(subscription)
    }

  return (
    <div>
        <h2>Number: {number}</h2>
        <button onClick={obtainNewNumbers}>Obtain new numbers</button>
    </div>
  )
}

export default ObservableExample