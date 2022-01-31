import React from 'react';
import {StartMenuItem} from './StartMenuItem';
import '../styles/startMenu.css';

export const StartMenu = () => {

    const shutDown = () => {
        console.log("Shut Down")
    };

    const photos = () => {
        openLink("https://www.instagram.com/wafer_wave/");
    };

    const openLink = (link) => {
        var win = window.open(link, '_blank')
        win.focus()
    };

    return (
        <div id="startMenu">
            <div id="left">
                <div className="b">
                    Hersh Nagpal 
                    <span className="num"> 98</span>
                </div>
            </div>
            <StartMenuItem text={"Documents"} />
            <StartMenuItem text={"Photos"} />
            <StartMenuItem text={"Contact"} />
            <StartMenuItem text={"Find"} />
            <StartMenuItem text={"Help"} />
            <StartMenuItem text={"Shut Down"} handleClick={shutDown}/>
        </div>
    );
};
