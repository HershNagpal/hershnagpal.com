import React, {Component} from 'react'
import PropTypes from 'prop-types'

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
                <img className="icon-image" alt="icon" src={this.props.iconImage} />
                <p className="icon-text">{this.props.iconText}</p>
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