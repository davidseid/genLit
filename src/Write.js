import React from 'react';

const Write = ({getCurrentWord}) => {
  return (
    <div>
      <h3>Your Creative Writing</h3>
      <form>
        <textarea 
          className="write-box" 
          placeholder="Start writing here!" 
          cols="100" 
          rows="20"
          onChange={(e) => {getCurrentWord(e.target.value)}}>
        </textarea>
      </form>
    </div>
  )
}
export default Write;
