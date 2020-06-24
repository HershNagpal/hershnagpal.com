import React from 'react'
import '../styles/window.css';
import WindowButton from './WindowButton';
import MenuBar from './MenuBar';
import {isWindowOpen} from '../taskbarState'
import {iconData, findImageSource} from '../iconData'
import Draggable from 'react-draggable';  

export const Window = ({taskbarState, updateTaskbar, id}) => {
    if (!isWindowOpen(id, taskbarState)) return null

    return (
        <Draggable>
            <div 
                className="window"
            >
                <div className="row">
                    <div className="column left">
                        <p className="title">{iconData[id].title}</p>
                    </div>
                    <div className="column middle">
                        <p/>
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
            </div>
        </Draggable>
    )
}
