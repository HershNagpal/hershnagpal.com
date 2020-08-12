import React from 'react'
import '../styles/startMenu.css'

export const StartMenuItem = ({text}) => {
    return (
        <div className="menuItem">
            {text}
        </div>
    )
}