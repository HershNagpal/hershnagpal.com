import React from 'react'
import '../styles/window.css';
import WindowButton from './WindowButton';
import MenuBar from './MenuBar';

export const Window = () => {

    return (
        <div 
            className="window"
        >
            <div className="row">
                <div className="column left">
                    <p className="title">text.txt - Notepad</p>
                </div>
                <div className="column middle">
                    <p/>
                </div>
                <div className="column right">
                    <div className="buttons" style={{float: "right"}}>
                    <WindowButton type={"minimize"}/>
                    <WindowButton type={"maximize"}/>
                    <WindowButton type={"close"}/>
                    </div>
                </div>
            </div>
            <div className="">
                <MenuBar className="menuBar" type={"txt"}/>
            </div>
        </div>
    )
    
}