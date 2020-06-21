import React from 'react'
import '../styles/menuBar.css';

const menuBarTypeText = (type) => {
    switch (type) {
        case "txt":
            return ["File","Edit","View","Insert","Format","Help",]
        default:
            return ["File","Edit","View","Help",]
    }
}

const MenuBar = (props) => {

    return (
        <div className="menuBar">
            {
                menuBarTypeText(props.type).map(str => {
                    return(`
                        ${str}
                    `)
                })
            }
        </div>
    )
}

export default MenuBar