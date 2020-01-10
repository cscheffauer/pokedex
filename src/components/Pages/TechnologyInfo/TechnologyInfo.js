import React from 'react'

import './TechnologyInfo.css';


const TechnologyInfo = () => {
    return (
        <div className="TechnologyInfo tc dib br3 pa3 ma2 bw2 shadow-5">
            <h3>This page uses data of </h3>
            <a href="https://swapi.co" target="_blank" rel="noopener noreferrer">swapi.co</a>
            <br />
            <h3>This page was built with </h3>
            <p>React.js, Redux, React-lazy</p>
            <br />
            <h3>Tested with</h3>
            <p>Jest</p>
            <br />
            <h3>Special technologies used</h3>
            <p>PWA<br />This page is a Progressive Web App, <br />which means it caches data locally and enables users <br />to work without any internet connection 🤓 <br /><br />Go and check it out on your own!</p>
        </div>);
}

export default TechnologyInfo;
