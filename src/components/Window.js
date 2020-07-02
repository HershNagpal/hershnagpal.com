import React from 'react'
import '../styles/window.css';
import {WindowButton} from './WindowButton';
import {MenuBar} from './MenuBar';
import {isWindowOpen} from '../taskbarState'
import {WelcomeMessage} from './WelcomeMessage'
import {iconData, findImageSource} from '../iconData'
import Draggable from 'react-draggable';  
import {Resume} from './Resume';

export const Window = ({taskbarState, updateTaskbar, id}) => {
    if (!isWindowOpen(id, taskbarState)) return null

    const popupType = () => {
        switch (iconData[id].type) {
            case "pdf":
                return <Resume id={id}/>
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
                        <img className="window-image" src={findImageSource(id)}/>
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
                            />
                            <WindowButton 
                                type={"maximize"} 
                                taskbarState={taskbarState} 
                                updateTaskbar={updateTaskbar} 
                                id={id}
                            />
                            <WindowButton 
                                type={"close"} 
                                taskbarState={taskbarState} 
                                updateTaskbar={updateTaskbar} 
                                id={id}
                            />
                        </div>
                    </div>
                </div>
                <div className="">
                    <MenuBar className="menuBar" type={"txt"}/>
                </div>
                <div class="content-box">
                    {popupType()}
                </div>
            </div>
        </Draggable>
    )
}
