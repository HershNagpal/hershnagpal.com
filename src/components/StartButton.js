import React from 'react'
import '../styles/startButton.css';
import win95Icon from '../assets/images/icons/win95.png'
export const StartButton = () => {

    const [isPressed, updateIsPressed] = React.useState(false);

    const handleClick = () => updateIsPressed(!isPressed)
    
    return (
        <div 
            onClick={() => handleClick()} 
            id="start-button" 
            className={isPressed ? "start-button-click": "start-button-rest"}
        >
            <img className="start-image" alt="icon" src={win95Icon} />
            Start
        </div>
    )   
}