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
        this.handleClick = this.handleClick.bind(this)
    }

    render() {
        return (
            <div 
                className="icon draggable"
                onDoubleClick={this.handleClick}
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

    handleClick() {
        this.openLink(this.props.link)
    }

    openLink(url) {
        var win = window.open(url, '_blank');
        win.focus();
    }
}

Icon.propTypes = {
    iconImage: PropTypes.string,
    iconText: PropTypes.string,
    link: PropTypes.string,
}

export default Icon