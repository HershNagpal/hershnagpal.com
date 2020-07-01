import React from 'react'
import '../styles/menuBar.css';

export const MenuBar = ({type}) => {

    const menuBarTypeText = (type) => {
        switch (type) {
            case "txt":
                return ["File","Edit","View","Insert","Format","Help",]
            default:
                return ["File","Edit","View","Help",]
        }
    }

    return (
        <div className="menuBar">
            {
                menuBarTypeText(type).map(str => {
                    return(
                    <span>{str}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    )
                })
            }
        </div>
    )
}