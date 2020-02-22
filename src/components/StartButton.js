import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class StartButton extends Component {

    constructor() {
        super()
        this.state = {
            isPressed: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    render() {
        return (
            <div 
                onClick={this.handleClick} 
                id="start-button" 
                className={this.state.isPressed ? "taskbar-icon-rest": "taskbar-icon-clicked"}
            >
                Start
            </div>
        )   
    }

    handleClick() {
        this.setState(state => ({
            isPressed: !state.isPressed
        }));
    }
}

export default StartButton