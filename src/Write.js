import React from 'react';

const Write = ({getCurrentWord}) => {
  return (
    <div>
      <h3>Your Creative Writing</h3>
      <div className="text-box">
        <form>
          <textarea 
            placeholder="Start writing here!" 
            cols="200" 
            rows="10"
            onChange={(e) => {getCurrentWord(e.target.value)}}>
          </textarea>
        </form>
      </div>
    </div>
  )
}
export default Write;
