import React from 'react';
import myResume from "../CV/Anna Marcus Resume 2023.pdf";


function Resume() {
    return (
      <div className="h-screen flex justify-center items-center">
        <embed
          src={myResume + "#navpanes=0&scrollbar=0"}
          className="h-full w-full"
        />
      </div>
    );
  }
  

export default Resume;