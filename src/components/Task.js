import React from 'react'
import PropTypes from 'prop-types'

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

Task.propTypes = {
    taskImage: PropTypes.string,
    taskText: PropTypes.string
}

export default Task