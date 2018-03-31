import React from 'react';

const Source = (props) => {
  return (
    <div>
      <h3>Source Material</h3>
      <form>
        <textarea className="source-box" placeholder="Write or paste source material here!" cols="100" rows="20"></textarea>
      </form>
    </div>
  )
}

export default Source;