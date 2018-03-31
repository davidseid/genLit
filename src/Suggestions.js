import React from 'react';

const Suggestions = ({suggestedWords}) => {
  return (
    <div>
      <h3>Suggestions</h3>
      <div>
      {suggestedWords.map(word => <p>{word}</p>)}
      </div>
    </div>
  )
}

export default Suggestions;
