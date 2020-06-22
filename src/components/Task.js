import React from 'react'
import '../styles/task.css';
import {findImageSource} from '../iconData'

export const Task = ({id}) => {
    return (
        <div
            className="task unopen"
        >
            <img className="start-image" alt="icon" src={findImageSource(id)} />
            skills.txt
        </div>
    )
}