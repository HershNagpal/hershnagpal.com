import React, {Component} from 'react'
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

export default Taskbar