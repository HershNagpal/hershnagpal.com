import React from 'react'
import {StartButton} from './StartButton'
import '../styles/taskbar.css';
import {Task} from './Task'

export const Taskbar = ({updateTaskbar, taskbarState}) => {

    return (
        <div 
            className="taskbar"
        >
            <StartButton/>
                {taskbarState.map((task, index) => (
                    // this p tag works but its  feet under the taskbar
                    <Task key={index} id={task.id} updateTaskbar={updateTaskbar} taskbarState={taskbarState} />
                ))}
        </div>
    )
}