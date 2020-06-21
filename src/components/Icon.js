import React, {Component} from 'react'
import PropTypes from 'prop-types'
import '../styles/icon.css';


class Icon extends Component {

    constructor(props) {
        super(props)
        this.props = props
        this.state = {
            isPressed: false
        }
        this.openLink = this.openLink.bind(this)
    }

    render() {
        return (
            <div 
                className="icon draggable"
                onDoubleClick={this.openLink}
            >
                <div className="center">
                    <img className="icon-image" alt="icon" src={this.props.iconImage} />
                </div>
                <div className="center">
                    <p className="icon-text">{this.props.iconText}</p>
                </div>
            </div>
        )      
    }

    openLink() {
        
    }
}

Icon.propTypes = {
    iconImage: PropTypes.string,
    iconText: PropTypes.string
}

export default Icon