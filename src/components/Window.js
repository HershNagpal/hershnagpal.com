import React from 'react'
import '../styles/window.css'
import {iconData, findImageSource} from '../iconData'
import {WindowButton} from './WindowButton'
import {MenuBar} from './MenuBar'
import {isWindowOpen, focusWindow} from '../taskbarState'
import {WelcomeMessage} from './WelcomeMessage'
import Draggable from 'react-draggable'
import {Resume} from './Resume'
import {Projects} from './Projects'
import {AboutMe} from './AboutMe'
import {windowButtonState} from './windowButtonState'

export const Window = ({taskbarState, updateTaskbar, id}) => {
    if (!isWindowOpen(id, taskbarState)) return null

    const popupType = () => {
        switch (iconData[id].title) {
            case "resume.pdf":
                return <Resume id={id}/>
            case "about me.txt":
                return <AboutMe/>
            case "projects.txt":
                return <Projects/>
            default:
                return <WelcomeMessage/>
        }
    }
    
    const handleClick = () => {
        // updateTaskbar(focusWindow(id, taskbarState))
    }

    const position = {
        left: ((id*3) + 7) + "%",
        top: ((id*3) + 7) + "%",
    }

    return (
        <Draggable handle=".row" >
            <div 
                className="window"
                onClick={() => handleClick()}
                style={{
                    left: position.left,
                    top: position.top,
                }}
            >
                <div className="row">
                    <div className="column left">
                        <img className="window-image" src={findImageSource(id)} alt=""/>
                    </div>
                    <div className="column middle">
                        <p className="title">{iconData[id].title}</p>
                    </div>
                    <div className="column right">
                        <div className="buttons">
                            {
                                windowButtonState.map((button, index) => (
                                    <WindowButton 
                                        key={index}
                                        type={button.type}
                                        updateTaskbar={updateTaskbar}
                                        taskbarState={taskbarState}
                                        id={id}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
                <MenuBar className="menuBar" type={"txt"}/>
                <div className="content-box">
                    {popupType()}
                </div>
            </div>
        </Draggable>
    )
}
