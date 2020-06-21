import React, {Component} from 'react'
import StartButton from './StartButton'
import '../styles/taskbar.css';

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