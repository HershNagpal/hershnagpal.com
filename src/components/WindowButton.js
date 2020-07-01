import React from 'react'
import '../styles/windowButton.css'

export const WindowButton = ({type, updateTaskbar, taskbarState, id}) => {

    const handleClick = () => {
        switch (type) {
            case "close":
                updateTaskbar( 
                    taskbarState.filter((task) => task.id !== id)
                )
                break
            case "minimize":
                updateTaskbar( 
                    taskbarState.map((task) => ( 
                        task.id === id ? { 
                            id: task.id, 
                            windowIsOpen: !task.windowIsOpen
                        } : task
                    ))
                )
                break
            case "maximize":
                return "□"
            default:
                return "x"
        }
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