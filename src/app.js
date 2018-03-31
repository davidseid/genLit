import React from 'react';
import Source from './Source';
import Write from './Write';
import Suggestions from './Suggestions';

const title = 'Creator\'s Block App';


const App = (props) => {
  return (
    <div>
      <div>{title}</div>
      <Source />
      <Write />
      <Suggestions />
    </div>
  )
}

export default App;

