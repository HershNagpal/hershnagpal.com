import React from 'react'
import {StartButton} from './StartButton'
import '../styles/taskbar.css';

export const Taskbar = () => {
    return (
        <div 
            className="taskbar"
        >
            <StartButton/>
        </div>
    )
}