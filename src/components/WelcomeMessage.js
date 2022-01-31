import React from 'react';
import "../styles/content.css";

export const WelcomeMessage = () => {
    return (
        <div className="text">
            <h3>Welcome</h3>
            <p>
                This is my website. It's currently under construction, but
                I'm always working on new features and fancy animations. 
            </p>
            <h3>
                New and improved using React.js
            </h3>
            <p>
                Double click on any icon to get started. You can drag, close, and minimize windows too!
            </p>
        </div>
    );
};
