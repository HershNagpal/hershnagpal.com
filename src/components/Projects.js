import React from 'react'
import "../styles/content.css"

export const Projects = () => {
    return (
        <div className="text">
            <h3>This Website</h3>
            <p>
                Built using functional React and CSS. Hosted on AWS S3. <br/>
                Pipeline hosted by AWS CodePipeline. <br/>
            </p>
            <a href="https://github.com/HershNagpal/hershnagpal.com">On Github</a>

            <h3>CarrotWolf</h3>
            <p>
                A roguelike game still in pre-alpha. <br/>
                Built using functional React and MaterialUI. <br/>
            </p>
            {/* <a href="hershnagpal.github.io/carrot-client/">CarrotWolf Alpha</a> */}
            {/* <br/> */}
            <a href="https://github.com/HershNagpal/carrot-client">On Github</a>

            <h3>WebCheckers</h3>
            <p>
                An online version of checkers. Play against friends or a computer. <br/>
                Built using Java, Freemarker, and Maven. <br/>
            </p>
            <a href="https://github.com/HershNagpal/webcheckers">On Github</a>

            <h3>Library Management System</h3>
            <p>
                An object-oriented Java app used to manage a library's books and members. <br/>
                Built using Java, Freemarker, and Maven. <br/>
            </p>
            <a href="https://github.com/HershNagpal/lbms">On Github</a>

            <h3>The Movie Database</h3>
            <p>
                An iOS app that allows browsing, searching, and saving movies, powered by TMDB. <br/>
                Built using Swift for iOS. <br/>
            </p>
            <a href="https://github.com/HershNagpal/waymovies">On Github</a>
        </div>
    )
}