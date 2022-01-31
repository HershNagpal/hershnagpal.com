import React from 'react';
import { Me } from './Me';
import '../styles/me.css';
import '../styles/content.css';

export const AboutMe = () => {
    return (
        <div className="text" id="aboutMe">
            <h3>Hersh Nagpal</h3>
            <p>
                The engineer is the gallbladder of their team. No one really understands its 
                function. It's a humble and hardworking organ that's not very glamorous to 
                think about. You could live without knowing anything about it, but it
                definitely makes your life easier behind the scenes. <br/>
            </p>
            <p>
                I'm an artist and software engineering student. I have been a gallbladder for 
                a few years now and I love to bring my hobbies and interests into my field. 
                This website is my way of sharing my combination of nostalgic art style and 
                love for engineering with you.<br/>
            </p>
            <Me/>
        </div>
    );
};
