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
                <div class="popup-text">
                        <h3> Welcome</h3>
                        <p>This is where I experiment with web design and have fun making ridiculous ideas come to life.</p>
                        <h3>What's New?</h3>
                        <ul>
                            <li>Taskbar and '_' buttons can now be used to minimize</li>
                            <li>IE links open a new tab when double-clicked</li>
                            <li>Clicking on windows, their icons, or taskbar icons focuses them</li>
                        </ul>
                        <h3>Planned Features:</h3>
                        <ul>
                            <li><strong>Moving this party to React.js</strong></li>
                            <p>In light of the fact that React is <strong>very nice</strong>, I'm in the process of remaking this site.</p>
                        </ul>

                        <button class="close-popup">OK</button>
                    </div>
            </div>
        </Draggable>
    )
}
