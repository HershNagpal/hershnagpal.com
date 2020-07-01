import React from 'react'
import '../styles/icon.css';
import {findImageSource, iconData} from '../iconData'


export const Icon = ({id, taskbarState, updateTaskbar}) => {
    
    const handleDoubleClick = () => {
        if (iconData[id].type === "ie") openLink(iconData[id].content) 
        
        else {
            const itemIndex = taskbarState.findIndex((task) => task.id === id)
            const thisIconInTaskbar = (-1 != itemIndex)
    
            if (!thisIconInTaskbar) {
                updateTaskbar([...taskbarState,
                    {
                      id: id,
                      windowIsOpen: "true",
                    },
                ])
            }
        }
    }

    const handleClick = () => {
        const itemIndex = taskbarState.findIndex((task) => task.id === id)
        const thisIconInTaskbar = (-1 != itemIndex)
        const windowIsOpen = thisIconInTaskbar ? taskbarState[itemIndex].windowIsOpen 
            : false
            
        if (thisIconInTaskbar) {
            if (!windowIsOpen){
            updateTaskbar( 
                taskbarState.map((task) => ( 
                    task.id === id ? { 
                        id: task.id, 
                        windowIsOpen: true
                    } : task
                ))
            )
            }
        }
    }

    const openLink = (link) => {
        var win = window.open(link, '_blank');
        win.focus();
    }

    return (
        <div 
            className="icon"
            onDoubleClick={() => handleDoubleClick()}
            onClick={() => handleClick()}
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