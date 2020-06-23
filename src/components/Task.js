import React from 'react'
import '../styles/task.css';
import {findImageSource, iconData} from '../iconData'

export const Task = ({id}) => {

    const [isPressed, updateIsPressed] = React.useState(false);

    const handleClick = () => updateIsPressed(!isPressed)
    
    return (
        <div
        className={isPressed ? "task open": "task unopen"}
            onClick={() => handleClick()} 
        >
            <img className="task-image" alt="icon" src={findImageSource(id)} />
            {iconData[id].title}
        </div>
    )
}
