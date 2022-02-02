import React from 'react';
import '../styles/icon.css';
import {findImageSource, iconData} from '../iconData';
import { openWindow } from '../taskbarState';


export const Icon = ({id, taskbarState, updateTaskbar}) => {

    const [clicked, changeClicked] = React.useState(false);

    const classes = clicked ? "icon clicked" : "icon";
    // const classes = "icon";
    
    const handleDoubleClick = () => {
        if (iconData[id].type === "ie") openLink(iconData[id].content) 
        
        else {
            const newWindow = openWindow(id, taskbarState)
            if(newWindow !== undefined) {
                updateTaskbar([...taskbarState, newWindow])
            }
        }
    };

    const openLink = (link) => {
        var win = window.open(link, '_blank')
        win.focus()
    };

    const handleClick = () => {
        changeClicked(!clicked)
    };

    return (
        <div 
            className={classes}
            onClick={() => handleClick()}
            onDoubleClick={() => handleDoubleClick()}
        >
            <div className="center">
                <img className="icon-image" alt="icon" src={findImageSource(id)}/>
            </div>
            <div className="center">
                <p className="icon-text" data-text={iconData[id].title}>{iconData[id].title}</p>
            </div>
        </div>
    );
};
