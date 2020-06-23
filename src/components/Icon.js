import React from 'react'
import '../styles/icon.css';
import {findImageSource, iconData} from '../iconData'


export const Icon = ({id, link, taskbarState, updateTaskbar}) => {
    
    const handleClick = () => {
        const itemIndex = taskbarState.findIndex((task) => task.id === id)
        const thisIconInTaskbar = (-1 != itemIndex)
        const windowIsOpen = thisIconInTaskbar ? taskbarState[itemIndex].windowIsOpen 
            : false

        if (thisIconInTaskbar) {
            if (!windowIsOpen){
            console.log("Open Window") 
            // TODO: open window
            }
        } else {
            updateTaskbar([...taskbarState,
                {
                  id: id,
                  windowIsOpen: "true",
                },
            ])
        }
    }

    return (
        <div 
            className="icon draggable"
            onDoubleClick={() => handleClick()}
        >
            <div className="center">
                <img className="icon-image" alt="icon" src={findImageSource(id)}/>
            </div>
            <div className="center">
                <p className="icon-text">{iconData[id].title}</p>
            </div>
        </div>
    )      
}