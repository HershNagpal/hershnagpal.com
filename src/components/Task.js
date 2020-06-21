import React from 'react'

const Task = (props) => {
    return (
        <div 
            class="task draggable"
        >
            <img class="task-image" alt="task" src={props.taskImage} />
            <p class="task-text">{props.taskText}</p>
        </div>
    )
}

export default Task