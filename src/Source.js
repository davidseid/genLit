import React from 'react';

const Source = ({setSourceText}) => {
  return (
    <div>
      <div className="instruction">
        <h3>Source Material:</h3>
        <h4>The app draws upon whatever you put here to generate suggestions. Paste in something large, like a play or book!</h4>
      </div>
      <div className="text-box">
        <textarea 
          className="text-box" 
          placeholder="Write or paste source material here!" 
          cols="200" 
          rows="20"
          onChange={(e) => {setSourceText(e.target.value)}}
        >
        </textarea>
      </div>
    </div>

  )
}

export default Source;