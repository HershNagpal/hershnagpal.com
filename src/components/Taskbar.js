import React from 'react'
import {StartButton} from './StartButton'
import '../styles/taskbar.css';
import {Task} from './Task'
import {iconData, iconImageMap} from '../iconData'

export const Taskbar = ({updateTaskbar, taskbarState}) => {

    return (
        <div 
            className="taskbar"
        >
            <StartButton/>
                {taskbarState.map((taskID, index) => (
                    // this p tag works but its  feet under the taskbar
                   <Task key={index} id={taskID}/>
                ))}
        </div>
    )
}