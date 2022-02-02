import React from 'react';
import '../styles/content.css';
import {Icon} from './Icon';
import resume from '../assets/content/HNagpal-Resume.pdf';

export const Folder = ({type, taskbarState, updateTaskbar}) => {

    const icons = [
        {
            id: 3,
            title: "resume.pdf",
            type: "pdf",
            content: resume,
        },  
        {
            id: 3,
            title: "resume.pdf",
            type: "pdf",
            content: resume,
        },  
        {
            id: 3,
            title: "resume.pdf",
            type: "pdf",
            content: resume,
        },  
    ];
        
    return (
        <div className='folder'>
            {
                icons.map((icon, index) => (
                    <Icon 
                        key={index}
                        id={icon.id}
                        taskbarState={taskbarState}
                        updateTaskbar={updateTaskbar}
                    />
                ))
            }
        </div>
    );
};
