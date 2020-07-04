import ReactDOM from 'react'
import React from 'react'
import '../styles/windowButton.css'

export const WindowButton = ({type, updateTaskbar, taskbarState, id, windowState, updateWindowState}) => {

    const handleClick = () => {
        switch (type) {
            case "close":
                closeWindow()
                break
            case "minimize":
                minimizeWindow()
                break
            case "maximize":
                return "□"
            default:
                return "x"
        }
    }

    const closeWindow = () => {
        updateTaskbar( 
            taskbarState.filter((task) => task.id !== id)
        )
        saveWindowPosition()
    }

    const minimizeWindow = () => {
        updateTaskbar( 
            taskbarState.map((task) => ( 
                task.id === id ? { 
                    id: task.id, 
                    windowIsOpen: !task.windowIsOpen
                } : task
            ))
        )
        saveWindowPosition()
    }

    const saveWindowPosition = () => {
        const domNode = ReactDOM.findDOMNode(this);
        domNode.getBoundingClientRect()
        
        console.log(domNode.getBoundingClientRect())
    }

    const buttonTypeText = () => {
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

    return (
        <div className="buttonContainer">
            <button onClick={() => handleClick()} className={type}>{buttonTypeText()}</button>
        </div>
    )
}