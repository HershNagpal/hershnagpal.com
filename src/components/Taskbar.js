import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Task from './Task'
import StartButton from './StartButton'

class Taskbar extends Component {

    constructor(props) {
        super(props)

        this.state = {
            taskArray: this.props.tasks
        }
    }

    render() {
        return (
            <div 
                className="taskbar"
            >
                <StartButton/>
            </div>
        )
    }
}

Taskbar.propTypes = {
    tasks: PropTypes.array
}

export default Taskbar