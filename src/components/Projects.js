import React from 'react'
import "../styles/content.css"

export const Projects = () => {
    return (
        <div className="text">
            <h3>This Website</h3>
            <p>
                Built using React and CSS. Hosted on AWS S3. <br/>
                Pipeline hosted by AWS CodePipeline. <br/>
            </p>
            <a href="https://github.com/HershNagpal/hershnagpal.com">On Github</a>

            <h3>WebCheckers</h3>
            <p>
                Built using Java, Freemarker, and Maven. <br/>
            </p>
            <a href="https://github.com/HershNagpal/webcheckers">On Github</a>

            <h3>Library Management System</h3>
            <p>
                Built using Java, Freemarker, and Maven. <br/>
            </p>
            <a href="https://github.com/HershNagpal/lbms">On Github</a>

            <h3>The Movie Database</h3>
            <p>
                Built Swift for iOS. <br/>
            </p>
            <a href="https://github.com/HershNagpal/waymovies">On Github</a>
        </div>
    )
}