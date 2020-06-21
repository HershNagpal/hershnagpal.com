import React, {Component} from 'react'
import '../styles/icon.css';
import DocumentIcon from '../assets/images/icons/doc.png';
import TextIcon from '../assets/images/icons/txt.png';


class Icon extends Component {

    constructor(props) {
        super(props)
        this.props = props
        this.state = {
            isPressed: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    findImageSource() {
        switch (this.props.type) {
            case "doc":
                return DocumentIcon;
            case "text":
                return TextIcon;
            default:
                return TextIcon;
        }
    }

    render() {
        return (
            <div 
                className="icon draggable"
                onDoubleClick={this.handleClick}
            >
                <div className="center">
                    <img className="icon-image" alt="icon" src={this.findImageSource()} />
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

export default Icon