import React from 'react'
import '../styles/icon.css';
import {iconImageMap, findImageSource} from '../iconData'


export const Icon = ({id, iconText, link}) => {
    
    const handleClick = () => console.log("congrations")

    return (
        <div 
            className="icon draggable"
            onDoubleClick={() => handleClick()}
        >
            <div className="center">
                <img className="icon-image" alt="icon" src={findImageSource(id)} />
            </div>
            <div className="center">
                <p className="icon-text">{iconText}</p>
            </div>
        </div>
    )      
}