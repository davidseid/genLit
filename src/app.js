import React from 'react';
import Source from './Source';
import Write from './Write';
import Suggestions from './Suggestions';

const title = 'Creator\'s Block';


const App = (props) => {
  return (
    <div>
      <h2>{title}</h2>
      <Source />
      <Write />
      <Suggestions />
    </div>
  )
}

export default App;

