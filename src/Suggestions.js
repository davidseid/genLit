import React from 'react';
import SuggestedWord from './SuggestedWord';

const Suggestions = ({suggestedWords}) => {
  return (
    <div>
      <h3>Suggestions</h3>
      <div className="suggested-words">
      {suggestedWords.map((word) => {
        return <SuggestedWord word={word} />
      })}
      </div>
    </div>
  )
}

export default Suggestions;
