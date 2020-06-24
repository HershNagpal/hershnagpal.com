import React from 'react'
import '../styles/windowButton.css'



const buttonTypeText = (type) => {
    switch (type) {
        case "close":
            return "×"
        case "minimize":
            return "_"
        case "maximize":
            return "□"
        default:
            return "x"
    }
}

const WindowButton = (props) => {
    return (
        <div className="buttonContainer">
            <button className={props.type}>{buttonTypeText(props.type)}</button>
        </div>
    )
}

export default WindowButton