import React from 'react'
import '../styles/task.css';
import {findImageSource, iconData} from '../iconData'
import {isWindowOpen} from '../taskbarState'
import { Icon } from './Icon';

export const Task = ({id, taskbarState, updateTaskbar}) => {
    const handleClick = () => updateTaskbar(
        taskbarState.map((task) => ( 
            task.id === id ? { 
                id: task.id, 
                windowIsOpen: !task.windowIsOpen
            } : task
        ))
    ) // Split into separate functions
    
    
    return (
        <div
            className={isWindowOpen(id, taskbarState) ? "task open": "task unopen"}
            onClick={() => handleClick()} 
        >
            <img className="task-image" alt="icon" src={findImageSource(id)} />
            {iconData[id].title}
        </div>
    )
}
