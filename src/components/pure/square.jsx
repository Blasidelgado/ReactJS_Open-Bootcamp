import React, {useState} from 'react'

const Square = () => {
    
    // FUNCION GENERADORA DE COLOR RANDOM
    const getRandomColor = () => {
        let red = Math.floor(Math.random() * 256)
        let green = Math.floor(Math.random() * 256)
        let blue = Math.floor(Math.random() * 256)
        return `${red}, ${green}, ${blue}`
    }     

    //TODO: FUNCION REPETIDORA CADA 2 SEG DE FUNCION getRandonColor

    const initialStyle = {
        width: '255px',
        height: '255px',
        backgroundColor: "black",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white'
    }

    const [squareStyle, setSquareStyle] = useState(initialStyle)
    
    function changeColor() {
        let newColor = {
            ...squareStyle,
            backgroundColor: `rgb(${getRandomColor()})`
        }
        setSquareStyle(newColor)
    }
    
    let loop;

    function repeat() {
        changeColor()
        loop = setInterval(changeColor, 2000)
    }

    function stopRepeat(){
        clearInterval(loop)
    }
    

    return (
        <div>
            <div style={squareStyle} onMouseEnter={repeat} onMouseOut={stopRepeat}>
                Hover me!
            </div>
        </div>
  )
}

export default Square