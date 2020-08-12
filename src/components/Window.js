import React from 'react'
import '../styles/window.css'
import {iconData, findImageSource} from '../iconData'
import {WindowButton} from './WindowButton'
// import {MenuBar} from './MenuBar'
import {isWindowOpen} from '../taskbarState'
import {WelcomeMessage} from './WelcomeMessage'
import Draggable from 'react-draggable'
import {Resume} from './Resume'
import {Projects} from './Projects'
import {AboutMe} from './AboutMe'

export const Window = ({taskbarState, updateTaskbar, id, windowState, updateWindowState}) => {
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

    return (
        <Draggable>
            <div 
                className="window"
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
                            <WindowButton 
                                type={"minimize"} 
                                taskbarState={taskbarState} 
                                updateTaskbar={updateTaskbar} 
                                id={id}
                                windowState={windowState}
                                updateWindowState={updateWindowState}
                            />
                            <WindowButton 
                                type={"maximize"} 
                                taskbarState={taskbarState} 
                                updateTaskbar={updateTaskbar} 
                                id={id}
                                windowState={windowState}
                                updateWindowState={updateWindowState}
                            />
                            <WindowButton 
                                type={"close"} 
                                taskbarState={taskbarState} 
                                updateTaskbar={updateTaskbar} 
                                id={id}
                                windowState={windowState}
                                updateWindowState={updateWindowState}
                            />
                        </div>
                    </div>
                </div>
                <div className="">
                    {/* <MenuBar className="menuBar" type={"txt"}/> */}
                </div>
                <div className="content-box">
                    {popupType()}
                </div>
            </div>
        </Draggable>
    )
}
