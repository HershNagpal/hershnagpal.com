import React from 'react'
import {StartButton} from './StartButton'
import '../styles/taskbar.css'
import {Task} from './Task'
import {StartMenu} from './StartMenu'

export const Taskbar = ({updateTaskbar, taskbarState, startMenuState, toggleStartMenu}) => {

    return (
        <div 
            className="taskbar"
        >
            <StartButton toggleStartMenu={toggleStartMenu} startMenuState={startMenuState}/>
            {taskbarState.map((task, index) => (
                // this p tag works but its  feet under the taskbar
                <Task key={index} id={task.id} updateTaskbar={updateTaskbar} taskbarState={taskbarState} />
            ))}
            {startMenuState && <StartMenu/>}
        </div>
    )
}