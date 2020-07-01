import React from 'react'
import {iconData} from '../iconData'
import "../styles/content.css"

export const Resume = ({id}) => {
    return (
        <div className="resume-content">
            <embed src={iconData[id].content}/>
        </div>
    )
}