import React from 'react'
import { closeWindow, minimizeWindow } from '../taskbarState'

export const WindowButton = ({type, updateTaskbar, taskbarState, id}) => {

    const handleClick = () => {
        switch (type) {
            case "close":
                close()
                break
            case "minimize":
                minimize()
                break
            case "maximize":
                return "□"
            default:
                return "x"
        }
    }

    const close = () => {
        updateTaskbar( 
            closeWindow(id, taskbarState)
        )
    }

    const minimize = () => {
        updateTaskbar( 
            minimizeWindow (id, taskbarState)
        )
    }

    return (
        <div className="buttonContainer">
            <button onClick={() => handleClick()} className={type}>{}</button>
        </div>
    )
}