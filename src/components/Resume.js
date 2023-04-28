import React from 'react';
// import Resume_PDF from '../images'
import myResume from "../CV/Anna Marcus Resume 2023.pdf";

function Resume() {
    return (
        <div>
            <p>This is Resume</p>
            <embed 
            src={myResume + "#navpanes=0&scrollbar=0"}
            width="100%"
            height="600px"
            ></embed>
        </div>
    );
}

export default Resume;