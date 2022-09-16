import React, {useState, useRef} from 'react'

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
    const [animation, setAnimation] = useState(false)
    
    function changeColor() {
        let newColor = {
            ...squareStyle,
            backgroundColor: `rgb(${getRandomColor()})`
        }
        setSquareStyle(newColor)
    }
    
    const myInterval = useRef()

    function startAnimation() {
        setAnimation(true)
        changeColor()
        myInterval.current = setInterval(changeColor, 2000)
    }

    function endRepeat(){
        setSquareStyle(initialStyle)
        clearInterval(myInterval.current)
    }

    function cancelAnimation(){
        setAnimation(false)
        clearInterval(myInterval.current)
    }
    

    return (
        <div>
            <div 
            style={squareStyle} 
            onMouseEnter={startAnimation} 
            onMouseLeave={endRepeat} 
            onDoubleClick={animation ? cancelAnimation : startAnimation}>
                Hover me!
            </div>
        </div>
  )
}

export default Square