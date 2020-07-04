import React from 'react'
import '../styles/startMenu.css'

export const StartMenu = () => {
    return (
        <div id="startMenu">
            <div id="left">
                <div class="b">
                    Windows
                    <span class="num95">95</span>
                </div>
            </div>
            <div class="menuItem expander">Documents</div>
            <div class="menuItem">Photos</div>
            <div class="menuItem">Contact</div>
            <div class="menuItem">Find</div>
            <div class="menuItem">Help</div>
            <div class="divider"></div>
            <div class="menuItem" id="shutdown">Shut Down</div>
        </div>
    )
}
