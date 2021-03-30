import React from 'react'
import '../styles/startMenu.css'

export const StartMenuItem = ({text, handleClick}) => {
    
    return (
        <div className="menuItem" onClick={handleClick}>
            {text}
        </div>
    )
}