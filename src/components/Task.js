import React from 'react';
import '../styles/task.css';
import {findImageSource, iconData} from '../iconData';
import {isWindowOpen, toggleWindow} from '../taskbarState';

export const Task = ({id, taskbarState, updateTaskbar}) => {
    const handleClick = () => updateTaskbar(toggleWindow(id, taskbarState));
    
    return (
        <div
            className={isWindowOpen(id, taskbarState) ? "task open": "task unopen"}
            onClick={() => handleClick()} 
        >
            <img className="task-image" alt="icon" src={findImageSource(id)} />
            {iconData[id].title}
        </div>
    );
};
