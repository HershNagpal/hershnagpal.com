import React, {Component} from 'react'
import '../styles/startButton.css';
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
                className={this.state.isPressed ? "start-button-click": "start-button-rest"}
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