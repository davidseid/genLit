import React from 'react';

const Source = ({setSourceText}) => {
  return (
    <div>
      <h3>Source Material</h3>
      <textarea 
        className="source-box" 
        placeholder="Write or paste source material here!" 
        cols="100" 
        rows="20"
        onChange={(e) => {setSourceText(e.target.value)}}
      >
      </textarea>
    </div>
  )
}

export default Source;