import React from 'react'
import '../styles/startButton.css';

export const StartButton = () => {

    const [isPressed, updateIsPressed] = React.useState(false);

    const handleClick = () => updateIsPressed(!isPressed)
    
    return (
        <div 
            onClick={() => handleClick()} 
            id="start-button" 
            className={isPressed ? "start-button-click": "start-button-rest"}
        >
            Start
        </div>
    )   
}